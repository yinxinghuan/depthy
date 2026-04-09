type Locale = 'zh' | 'en';

const strings: Record<string, Record<Locale, string>> = {
  hint: { zh: '倾斜设备 / 移动鼠标', en: 'Tilt device / Move mouse' },
  enable_gyro: { zh: '点击启用陀螺仪', en: 'Tap to enable gyroscope' },
};

function detectLocale(): Locale {
  const override = localStorage.getItem('game_locale');
  if (override === 'en' || override === 'zh') return override;
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

const locale = detectLocale();

export function t(key: string, vars?: { n?: number | string }): string {
  const entry = strings[key];
  if (!entry) return key;
  let s = entry[locale] ?? entry.zh;
  if (vars?.n !== undefined) s = s.replace('{n}', String(vars.n));
  return s;
}
