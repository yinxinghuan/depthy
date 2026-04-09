import { useState, useEffect, useCallback, useRef } from 'react';
import type { TiltState } from '../types';

/**
 * Track device tilt (gyroscope) on mobile, mouse position on desktop.
 * Returns normalized tilt state: x/y in range [-1, 1].
 *
 * iOS 13+ requires explicit permission via user gesture —
 * call requestGyroPermission() from a button tap.
 */
export function useTilt() {
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 });
  const [gyroGranted, setGyroGranted] = useState(false);
  const hasGyro = useRef(false);
  const baseGamma = useRef<number | null>(null);
  const baseBeta = useRef<number | null>(null);
  const listenersAttached = useRef(false);

  const handler = useCallback((e: DeviceOrientationEvent) => {
    if (e.gamma === null || e.beta === null) return;
    hasGyro.current = true;

    // Calibrate on first reading
    if (baseGamma.current === null) {
      baseGamma.current = e.gamma;
      baseBeta.current = e.beta;
    }

    const gamma = e.gamma - baseGamma.current!;
    const beta = e.beta - baseBeta.current!;
    const maxAngle = 25;
    const x = Math.max(-1, Math.min(1, gamma / maxAngle));
    const y = Math.max(-1, Math.min(1, beta / maxAngle));

    setTilt({ x, y });
  }, []);

  // Attach listener (non-iOS or after permission granted)
  useEffect(() => {
    if (listenersAttached.current) return;

    const needsPermission = typeof DeviceOrientationEvent !== 'undefined' &&
      typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function';

    if (!needsPermission) {
      // Android / desktop — just attach
      window.addEventListener('deviceorientation', handler);
      listenersAttached.current = true;
      return () => window.removeEventListener('deviceorientation', handler);
    }

    // iOS — wait for gyroGranted flag
    if (gyroGranted) {
      window.addEventListener('deviceorientation', handler);
      listenersAttached.current = true;
      return () => window.removeEventListener('deviceorientation', handler);
    }
  }, [handler, gyroGranted]);

  // Request gyroscope permission (must be called from user gesture)
  const requestGyroPermission = useCallback(async () => {
    const DOE = DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> };
    if (typeof DOE.requestPermission === 'function') {
      try {
        const result = await DOE.requestPermission();
        if (result === 'granted') {
          setGyroGranted(true);
          return true;
        }
      } catch {
        // User denied or error
      }
      return false;
    }
    // Non-iOS — already works
    return true;
  }, []);

  // Check if iOS permission is needed
  const needsPermission = typeof DeviceOrientationEvent !== 'undefined' &&
    typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function' &&
    !gyroGranted;

  // Mouse tracking (desktop fallback)
  const onMouseMove = useCallback((e: MouseEvent) => {
    if (hasGyro.current) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setTilt({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [onMouseMove]);

  return { tilt, needsPermission, requestGyroPermission };
}
