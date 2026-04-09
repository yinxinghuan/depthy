import { useState } from 'react';
import LayeredCharacter from './components/LayeredCharacter';
import { useTilt } from './hooks/useTilt';
import { CHARACTERS } from './data/characters';
import { t } from './i18n';
import './MoodReader.less';

export default function MoodReader() {
  const [charIndex, setCharIndex] = useState(0);
  const tilt = useTilt();
  const char = CHARACTERS[charIndex];

  const prev = () => setCharIndex(i => (i - 1 + CHARACTERS.length) % CHARACTERS.length);
  const next = () => setCharIndex(i => (i + 1) % CHARACTERS.length);

  return (
    <div className="mr">
      {/* Character display */}
      <div className="mr__stage">
        <LayeredCharacter
          key={char.name}
          layers={char.layers}
          canvasSize={char.canvasSize}
          tilt={tilt}
          width={400}
          maxShift={35}
        />
      </div>

      {/* Bottom controls */}
      <div className="mr__controls">
        <button className="mr__nav" onPointerDown={prev}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="mr__info">
          <span className="mr__name">{char.displayName}</span>
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
        {CHARACTERS.map((c, i) => (
          <span
            key={c.name}
            className={`mr__dot ${i === charIndex ? 'mr__dot--active' : ''}`}
            onPointerDown={() => setCharIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
