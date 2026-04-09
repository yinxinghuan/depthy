import React, { forwardRef, useEffect, useState } from 'react';
import posterSrc from '../img/poster.png';
import './SplashScreen.less';

// Import all character modules to collect image srcs for preloading
import isaya from '../data/char_isaya';
import jenny from '../data/char_jenny';
import algram from '../data/char_algram';
import isabel from '../data/char_isabel';

function getAllImageSrcs(): string[] {
  const srcs = new Set<string>();
  for (const char of [isaya, jenny, algram, isabel]) {
    srcs.add(char.bgSrc);
    for (const layers of Object.values(char.expressions)) {
      for (const l of layers) srcs.add(l[0]);
    }
  }
  return [...srcs];
}

const PRELOAD = getAllImageSrcs();
const MIN_MS = 2000;
const MAX_ASSET_MS = 15000;

interface Props { onDone: () => void; }

const SplashScreen = React.memo(
  forwardRef<HTMLDivElement, Props>(function SplashScreen({ onDone }, ref) {
    const [posterReady, setPosterReady] = useState(false);
    const [progress, setProgress] = useState(0);
    const [fading, setFading] = useState(false);
    const [minDone, setMinDone] = useState(false);
    const [assetsDone, setAssetsDone] = useState(false);

    useEffect(() => {
      const t = setTimeout(() => setMinDone(true), MIN_MS);
      return () => clearTimeout(t);
    }, []);

    useEffect(() => {
      if (!posterReady) return;
      let loaded = 0;
      const total = PRELOAD.length;
      const onOne = () => {
        loaded++;
        setProgress(loaded / total);
        if (loaded >= total) setAssetsDone(true);
      };
      PRELOAD.forEach(src => {
        const img = new Image();
        img.onload = img.onerror = onOne;
        img.src = src;
      });
      const maxT = setTimeout(() => setAssetsDone(true), MAX_ASSET_MS);
      return () => clearTimeout(maxT);
    }, [posterReady]);

    useEffect(() => {
      if (minDone && assetsDone) setFading(true);
    }, [minDone, assetsDone]);

    useEffect(() => {
      if (!fading) return;
      const t = setTimeout(onDone, 500);
      return () => clearTimeout(t);
    }, [fading, onDone]);

    return (
      <div className={`mr-splash${fading ? ' mr-splash--fading' : ''}`} ref={ref}>
        <img
          className={`mr-splash__img${posterReady ? ' mr-splash__img--visible' : ''}`}
          src={posterSrc}
          alt="Depthy"
          draggable={false}
          onLoad={() => setPosterReady(true)}
        />
        <div className="mr-splash__bar-track">
          <div className="mr-splash__bar-fill" style={{ width: `${Math.round(progress * 100)}%` }} />
        </div>
      </div>
    );
  })
);

SplashScreen.displayName = 'SplashScreen';
export default SplashScreen;
