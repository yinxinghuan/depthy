import type { ExpressionName } from '../types';

export interface Ending {
  suspect: string;
  label: { zh: string; en: string };
  /** Which character reacts */
  reactor: string;
  reactExpr: ExpressionName;
  text: { zh: string; en: string };
  verdict: { zh: string; en: string };
  tag: { zh: string; en: string };
}

export const ENDINGS: Ending[] = [
  {
    suspect: 'isabel',
    label: { zh: '指控 Isabel', en: 'Accuse Isabel' },
    reactor: 'isabel',
    reactExpr: 'sad',
    text: {
      zh: 'Isabel 沉默了很久。\n\n"……你说得对。是我让司机从后门把画搬走的。画廊老板帮我关了监控。"\n\n她看向窗外。\n\n"那幅画确实很美。我只是……用了错误的方式。"\n\nIsaya 站在门口，没有说话。最后，她轻轻说了一句：\n"……把画还给我就好。"\n\n画被完好归还。',
      en: 'Isabel was silent for a long time.\n\n"...You\'re right. I had my driver take the painting through the back door. The gallery owner helped disable the cameras."\n\nShe looked out the window.\n\n"The painting truly was beautiful. I just...went about it the wrong way."\n\nIsaya stood at the door, saying nothing. Finally, she whispered:\n"...Just return my painting."\n\nThe painting was returned intact.',
    },
    verdict: { zh: '真相大白', en: 'Truth Revealed' },
    tag: { zh: '🎯 最佳结局', en: '🎯 Best Ending' },
  },
  {
    suspect: 'gallery_owner',
    label: { zh: '指控画廊老板', en: 'Accuse the Gallery Owner' },
    reactor: 'jenny',
    reactExpr: 'surprised',
    text: {
      zh: 'Jenny 愣住了。\n\n"画廊老板？可他……"\n\n调查显示老板确实负债累累，但他只是帮凶——是 Isabel 指使他关掉监控的。\n\n没有直接指控 Isabel，她逃脱了责任。画被追回，但真正的主谋只受到了轻微处罚。\n\nIsaya 叹了口气："……至少画回来了。"',
      en: 'Jenny froze.\n\n"The gallery owner? But he..."\n\nInvestigation revealed he was deeply in debt, but he was only an accomplice — Isabel instructed him to disable the cameras.\n\nWithout directly accusing Isabel, she escaped responsibility. The painting was recovered, but the mastermind received only a minor penalty.\n\nIsaya sighed: "...At least the painting is back."',
    },
    verdict: { zh: '部分真相', en: 'Partial Truth' },
    tag: { zh: '⚖️ 不完整的正义', en: '⚖️ Incomplete Justice' },
  },
  {
    suspect: 'algram',
    label: { zh: '指控 Algram', en: 'Accuse Algram' },
    reactor: 'algram',
    reactExpr: 'angry',
    text: {
      zh: '"什么！？"\n\nAlgram 猛地站了起来。\n\n"我——我没有！你到底在说什么！"\n\nIsaya 跑过来拉住了他的手臂。"他不会做这种事。"\n\n后来真相浮出水面：画是 Isabel 拿走的。但 Algram 再也不愿意和你说话了。\n\n一个无辜的人受到了伤害。',
      en: '"What!?"\n\nAlgram jumped to his feet.\n\n"I — I didn\'t! What are you even talking about!"\n\nIsaya ran over and grabbed his arm. "He would never do something like that."\n\nThe truth eventually surfaced: Isabel took the painting. But Algram never spoke to you again.\n\nAn innocent person was hurt.',
    },
    verdict: { zh: '冤枉好人', en: 'Wrong Accusation' },
    tag: { zh: '💔 错误结局', en: '💔 Wrong Ending' },
  },
  {
    suspect: 'jenny',
    label: { zh: '指控 Jenny', en: 'Accuse Jenny' },
    reactor: 'jenny',
    reactExpr: 'sad',
    text: {
      zh: 'Jenny 的眼眶红了。\n\n"我……我怎么可能？我为了这个展览忙了半年……"\n\n她摘下眼镜，擦了擦眼泪。\n\n"你知道吗，我甚至为了保护 Isaya 的画，拒绝了画廊老板的私下交易提议。"\n\n后来真相证明她是清白的。但她再也没有策划过展览。\n\n信任一旦碎了，就很难修复。',
      en: 'Jenny\'s eyes turned red.\n\n"I...how could I? I worked on this exhibition for six months..."\n\nShe took off her glasses and wiped her tears.\n\n"You know, I even refused the gallery owner\'s private deal to protect Isaya\'s painting."\n\nThe truth later proved her innocent. But she never curated another exhibition.\n\nOnce trust is broken, it\'s hard to repair.',
    },
    verdict: { zh: '冤枉好人', en: 'Wrong Accusation' },
    tag: { zh: '💔 错误结局', en: '💔 Wrong Ending' },
  },
  {
    suspect: 'isaya',
    label: { zh: '没有人偷画——是 Isaya 自己藏的', en: 'Nobody stole it — Isaya hid it herself' },
    reactor: 'isaya',
    reactExpr: 'surprised',
    text: {
      zh: 'Isaya 整个人僵住了。\n\n"……你怎么知道的。"\n\n所有人都惊呆了。\n\n"我不想让它被卖掉。Isabel 的出价让我觉得恶心。画廊老板也在暗中帮她。\n我趁所有人都在忙的时候，把它带走了。"\n\n她低下头。"对不起。我只是不想失去它。"\n\nJenny 沉默片刻，然后上前抱住了她。\n"下次……告诉我就好。"',
      en: 'Isaya froze completely.\n\n"...How did you know."\n\nEveryone was stunned.\n\n"I didn\'t want it to be sold. Isabel\'s offer disgusted me. The gallery owner was secretly helping her too.\nI took it while everyone was busy."\n\nShe lowered her head. "I\'m sorry. I just didn\'t want to lose it."\n\nJenny was silent for a moment, then stepped forward and hugged her.\n"Next time...just tell me."',
    },
    verdict: { zh: '隐藏的真相', en: 'Hidden Truth' },
    tag: { zh: '🌙 隐藏结局', en: '🌙 Secret Ending' },
  },
];
