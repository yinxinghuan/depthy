import { useState, useEffect, useCallback, useRef } from 'react';
import LayeredCharacter from './components/LayeredCharacter';
import { useTilt } from './hooks/useTilt';
import { CHARACTER_NAMES, loadCharacter } from './data/characters';
import { t } from './i18n';
import type { CharacterData } from './types';
import './MoodReader.less';

/** Preload all images in a character's layer data. Resolves when all loaded. */
function preloadImages(char: CharacterData): Promise<void> {
  const srcs = char.layers.map(l => l[0]);
  return Promise.all(
    srcs.map(src => new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve(); // don't block on error
      img.src = src;
    }))
  ).then(() => {});
}

export default function MoodReader() {
  const [charIndex, setCharIndex] = useState(0);
  const [charData, setCharData] = useState<CharacterData | null>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const tilt = useTilt();
  const cacheRef = useRef<Map<string, CharacterData>>(new Map());

  const charName = CHARACTER_NAMES[charIndex];

  // Load character module + preload all its images
  useEffect(() => {
    let cancelled = false;
    setVisible(false);

    const load = async () => {
      // Check cache first
      let data = cacheRef.current.get(charName);
      if (!data) {
        data = await loadCharacter(charName);
        cacheRef.current.set(charName, data);
      }

      // Preload all layer images
      await preloadImages(data);

      if (cancelled) return;
      setCharData(data);
      setReady(true);
      // Fade in on next frame
      requestAnimationFrame(() => {
        if (!cancelled) setVisible(true);
      });
    };

    load();
    return () => { cancelled = true; };
  }, [charName]);

  const prev = useCallback(() => {
    setReady(false);
    setCharIndex(i => (i - 1 + CHARACTER_NAMES.length) % CHARACTER_NAMES.length);
  }, []);

  const next = useCallback(() => {
    setReady(false);
    setCharIndex(i => (i + 1) % CHARACTER_NAMES.length);
  }, []);

  return (
    <div className="mr">
      {/* Character display */}
      <div className="mr__stage">
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

      {/* Bottom controls */}
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

      {/* Dots indicator */}
      <div className="mr__dots">
        {CHARACTER_NAMES.map((name, i) => (
          <span
            key={name}
            className={`mr__dot ${i === charIndex ? 'mr__dot--active' : ''}`}
            onPointerDown={() => { setReady(false); setCharIndex(i); }}
          />
        ))}
      </div>
    </div>
  );
}
