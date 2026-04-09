type Locale = 'zh' | 'en';

const strings: Record<string, Record<Locale, string>> = {
  hint: { zh: '倾斜 / 触摸拖动', en: 'Tilt / Touch drag' },
  enable_gyro: { zh: '点击启用陀螺仪', en: 'Tap to enable gyroscope' },
  chat_with: { zh: '和TA聊聊', en: 'Chat with' },
  start: { zh: '开始', en: 'Start' },
  back_home: { zh: '返回', en: 'Back' },
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
