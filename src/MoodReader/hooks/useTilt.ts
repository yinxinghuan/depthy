import { useState, useEffect, useCallback, useRef } from 'react';
import type { TiltState } from '../types';

/**
 * Track device tilt (gyroscope) on mobile, mouse position on desktop.
 * Returns normalized tilt state: x/y in range [-1, 1].
 */
export function useTilt(): TiltState {
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 });
  const hasGyro = useRef(false);
  const baseGamma = useRef<number | null>(null);
  const baseBeta = useRef<number | null>(null);

  // ── Gyroscope (mobile) ──
  useEffect(() => {
    const handler = (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return;
      hasGyro.current = true;

      // Calibrate on first reading
      if (baseGamma.current === null) {
        baseGamma.current = e.gamma;
        baseBeta.current = e.beta;
      }

      // Relative tilt from initial position
      const gamma = e.gamma - baseGamma.current!; // left/right tilt (-90 to 90)
      const beta = e.beta - baseBeta.current!;     // front/back tilt (-180 to 180)

      // Normalize to [-1, 1], clamp range to ±25 degrees
      const maxAngle = 25;
      const x = Math.max(-1, Math.min(1, gamma / maxAngle));
      const y = Math.max(-1, Math.min(1, beta / maxAngle));

      setTilt({ x, y });
    };

    window.addEventListener('deviceorientation', handler);
    return () => window.removeEventListener('deviceorientation', handler);
  }, []);

  // ── Mouse tracking (desktop fallback) ──
  const onMouseMove = useCallback((e: MouseEvent) => {
    if (hasGyro.current) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 2;  // -1 to 1
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setTilt({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [onMouseMove]);

  return tilt;
}
