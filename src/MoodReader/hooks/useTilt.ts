import { useState, useEffect, useCallback, useRef } from 'react';
import type { TiltState } from '../types';

/**
 * Track device tilt via gyroscope, mouse, or touch drag.
 * Priority: gyroscope > touch drag > mouse move
 *
 * iOS 13+ needs requestPermission() from a user gesture.
 * Telegram WebView may block gyro entirely — touch drag is the fallback.
 */
export function useTilt() {
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 });
  const [permissionState, setPermissionState] = useState<'pending' | 'requesting' | 'granted' | 'denied' | 'unavailable'>('pending');
  const hasGyro = useRef(false);
  const baseGamma = useRef<number | null>(null);
  const baseBeta = useRef<number | null>(null);

  // ── Gyroscope handler ──
  const gyroHandler = useCallback((e: DeviceOrientationEvent) => {
    if (e.gamma === null || e.beta === null) return;
    hasGyro.current = true;

    if (baseGamma.current === null) {
      baseGamma.current = e.gamma;
      baseBeta.current = e.beta;
    }

    const gamma = e.gamma - baseGamma.current!;
    const beta = e.beta - baseBeta.current!;
    const maxAngle = 25;
    setTilt({
      x: Math.max(-1, Math.min(1, gamma / maxAngle)),
      y: Math.max(-1, Math.min(1, beta / maxAngle)),
    });
  }, []);

  // ── Check if iOS permission is needed ──
  const iosNeedsPermission = typeof DeviceOrientationEvent !== 'undefined' &&
    typeof (DeviceOrientationEvent as any).requestPermission === 'function';

  // ── Auto-attach for non-iOS (Android, desktop) ──
  useEffect(() => {
    if (iosNeedsPermission) return;

    window.addEventListener('deviceorientation', gyroHandler);

    // If no gyro events after 1s, mark as unavailable
    const timer = setTimeout(() => {
      if (!hasGyro.current) setPermissionState('unavailable');
      else setPermissionState('granted');
    }, 1000);

    return () => {
      window.removeEventListener('deviceorientation', gyroHandler);
      clearTimeout(timer);
    };
  }, [gyroHandler, iosNeedsPermission]);

  // ── Attach after iOS permission granted ──
  useEffect(() => {
    if (permissionState !== 'granted' || !iosNeedsPermission) return;

    window.addEventListener('deviceorientation', gyroHandler);

    // Check if events actually fire
    const timer = setTimeout(() => {
      if (!hasGyro.current) setPermissionState('unavailable');
    }, 1500);

    return () => {
      window.removeEventListener('deviceorientation', gyroHandler);
      clearTimeout(timer);
    };
  }, [permissionState, gyroHandler, iosNeedsPermission]);

  // ── Request iOS permission (must be from user gesture) ──
  const requestGyroPermission = useCallback(async () => {
    setPermissionState('requesting');
    try {
      const result = await (DeviceOrientationEvent as any).requestPermission();
      if (result === 'granted') {
        setPermissionState('granted');
        return;
      }
    } catch { /* denied or error */ }
    setPermissionState('unavailable');
  }, []);

  // ── Mouse tracking (desktop) ──
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (hasGyro.current) return;
      setTilt({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  // ── Touch drag fallback (mobile without gyro) ──
  useEffect(() => {
    let startX = 0, startY = 0;
    let currentX = 0, currentY = 0;

    const onStart = (e: TouchEvent) => {
      if (hasGyro.current) return;
      const t = e.touches[0];
      startX = t.clientX - currentX * window.innerWidth * 0.5;
      startY = t.clientY - currentY * window.innerHeight * 0.5;
    };

    const onMove = (e: TouchEvent) => {
      if (hasGyro.current) return;
      const t = e.touches[0];
      const dx = (t.clientX - startX) / (window.innerWidth * 0.5);
      const dy = (t.clientY - startY) / (window.innerHeight * 0.5);
      currentX = Math.max(-1, Math.min(1, dx));
      currentY = Math.max(-1, Math.min(1, dy));
      setTilt({ x: currentX, y: currentY });
    };

    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchmove', onMove);
    };
  }, []);

  // Show permission button only when iOS needs it and hasn't been tried
  const showPermissionButton = iosNeedsPermission && permissionState === 'pending';

  return { tilt, showPermissionButton, requestGyroPermission };
}
