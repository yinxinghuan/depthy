import { useState, useEffect } from 'react';
import LayeredCharacter from './components/LayeredCharacter';
import { useTilt } from './hooks/useTilt';
import { CHARACTER_NAMES, loadCharacter } from './data/characters';
import { t } from './i18n';
import type { CharacterData } from './types';
import './MoodReader.less';

export default function MoodReader() {
  const [charIndex, setCharIndex] = useState(0);
  const [charData, setCharData] = useState<CharacterData | null>(null);
  const [loading, setLoading] = useState(true);
  const tilt = useTilt();

  const charName = CHARACTER_NAMES[charIndex];

  // Lazy load character data
  useEffect(() => {
    setLoading(true);
    loadCharacter(charName).then(data => {
      setCharData(data);
      setLoading(false);
    });
  }, [charName]);

  const prev = () => setCharIndex(i => (i - 1 + CHARACTER_NAMES.length) % CHARACTER_NAMES.length);
  const next = () => setCharIndex(i => (i + 1) % CHARACTER_NAMES.length);

  return (
    <div className="mr">
      {/* Character display */}
      <div className="mr__stage">
        {loading || !charData ? (
          <div className="mr__loading">Loading...</div>
        ) : (
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
            onPointerDown={() => setCharIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
