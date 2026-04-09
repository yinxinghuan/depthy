import { useState, useEffect, useCallback, useRef } from 'react';
import LayeredCharacter from './components/LayeredCharacter';
import { useTilt } from './hooks/useTilt';
import { CHARACTER_NAMES, loadCharacter } from './data/characters';
import { t } from './i18n';
import type { CharacterData } from './types';
import './MoodReader.less';

/** Preload all images in a character's layer data. */
function preloadImages(char: CharacterData): Promise<void> {
  const srcs = char.layers.map(l => l[0]);
  return Promise.all(
    srcs.map(src => new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve();
      img.src = src;
    }))
  ).then(() => {});
}

export default function MoodReader() {
  const [charIndex, setCharIndex] = useState(0);
  const [charData, setCharData] = useState<CharacterData | null>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const { tilt, needsPermission, requestGyroPermission } = useTilt();
  const cacheRef = useRef<Map<string, CharacterData>>(new Map());

  const charName = CHARACTER_NAMES[charIndex];

  useEffect(() => {
    let cancelled = false;
    setVisible(false);

    const load = async () => {
      let data = cacheRef.current.get(charName);
      if (!data) {
        data = await loadCharacter(charName);
        cacheRef.current.set(charName, data);
      }
      await preloadImages(data);
      if (cancelled) return;
      setCharData(data);
      setReady(true);
      requestAnimationFrame(() => {
        if (!cancelled) setVisible(true);
      });
    };

    load();
    return () => { cancelled = true; };
  }, [charName]);

  const switchChar = useCallback((i: number) => {
    setReady(false);
    setCharIndex(i);
  }, []);

  const prev = useCallback(() => switchChar((charIndex - 1 + CHARACTER_NAMES.length) % CHARACTER_NAMES.length), [charIndex, switchChar]);
  const next = useCallback(() => switchChar((charIndex + 1) % CHARACTER_NAMES.length), [charIndex, switchChar]);

  const handleGyroRequest = useCallback(async () => {
    await requestGyroPermission();
  }, [requestGyroPermission]);

  return (
    <div className="mr">
      <div className="mr__stage">
        {/* Loading shimmer placeholder */}
        {!ready && (
          <div className="mr__shimmer" style={{ width: 380, height: 380, borderRadius: 28 }} />
        )}

        {/* Character portrait with fade-in */}
        <div className={`mr__portrait ${visible ? 'mr__portrait--visible' : ''}`}>
          {ready && charData && (
            <LayeredCharacter
              key={charData.name}
              layers={charData.layers}
              canvasSize={charData.canvasSize}
              tilt={tilt}
              width={380}
              maxShift={35}
            />
          )}
        </div>
      </div>

      {/* iOS gyro permission button */}
      {needsPermission && (
        <button className="mr__gyro-btn" onPointerDown={handleGyroRequest}>
          {t('enable_gyro')}
        </button>
      )}

      <div className="mr__controls">
        <button className="mr__nav" onPointerDown={prev}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="mr__info">
          <span className="mr__name">{charData?.displayName ?? '...'}</span>
          <span className="mr__hint">{t('hint')}</span>
        </div>

        <button className="mr__nav" onPointerDown={next}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>

      <div className="mr__dots">
        {CHARACTER_NAMES.map((name, i) => (
          <span
            key={name}
            className={`mr__dot ${i === charIndex ? 'mr__dot--active' : ''}`}
            onPointerDown={() => switchChar(i)}
          />
        ))}
      </div>
    </div>
  );
}
