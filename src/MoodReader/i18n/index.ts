type Locale = 'zh' | 'en';

const strings: Record<string, Record<Locale, string>> = {
  hint: { zh: '倾斜 / 触摸拖动', en: 'Tilt / Touch drag' },
  enable_gyro: { zh: '点击启用陀螺仪', en: 'Tap to enable gyroscope' },
  start_quiz: { zh: '测测你像谁', en: 'Take the Quiz' },
  result_you_are: { zh: '你最像', en: 'You are most like' },
  back: { zh: '再测一次', en: 'Try Again' },
};

function detectLocale(): Locale {
  const override = localStorage.getItem('game_locale');
  if (override === 'en' || override === 'zh') return override;
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

const locale = detectLocale();

export function t(key: string): string {
  const entry = strings[key];
  if (!entry) return key;
  return entry[locale] ?? entry.zh;
}
