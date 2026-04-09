import { useState, useEffect } from 'react';

interface Props {
  text: string;
  speed?: number;
}

export default function Typewriter({ text, speed = 40 }: Props) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return <p className="mr__typewriter">{displayed}<span className="mr__cursor">|</span></p>;
}
