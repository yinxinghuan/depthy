import type { ExpressionName } from '../types';

export interface QuizOption {
  text: { zh: string; en: string };
  reaction: ExpressionName;
  reactionText?: { zh: string; en: string };
}

export interface QuizQuestion {
  askExpr: ExpressionName;
  text: { zh: string; en: string };
  options: QuizOption[];
}

export interface CharacterQuiz {
  intro: { zh: string; en: string };
  role: { zh: string; en: string };
  questions: QuizQuestion[];
  outro: { zh: string; en: string };
  outroExpr: ExpressionName;
}

/*
 * Story: 「谁偷了画？」/ "Who Stole the Painting?"
 *
 * A painting called "蓝色寂静" (Blue Silence) vanishes during
 * a gallery opening. Four people were there that night.
 * Each tells a different story. Find the truth.
 */

export const STORY_INTRO = {
  zh: '画廊开幕夜，一幅名为「蓝色寂静」的画作神秘失踪。\n当晚有四个人在场。\n请分别问话，找出真相。',
  en: 'Opening night at the gallery. A painting called "Blue Silence" has vanished.\nFour people were there.\nInterrogate each one. Find the truth.',
};

export const CHARACTER_QUIZZES: Record<string, CharacterQuiz> = {
  isaya: {
    role: { zh: '画家 · 画作的创作者', en: 'The Artist · Creator of the painting' },
    intro: { zh: '……你要问那幅画的事？', en: '...You want to ask about that painting?' },
    questions: [
      {
        askExpr: 'neutral',
        text: { zh: '那幅画对你意味着什么？', en: 'What did that painting mean to you?' },
        options: [
          { text: { zh: '你一定很心痛吧', en: 'You must be heartbroken' }, reaction: 'sad',
            reactionText: { zh: '……它不只是一幅画。是我用三个月的失眠换来的。', en: '...It wasn\'t just a painting. It cost me three months of sleepless nights.' } },
          { text: { zh: '有人说你自己藏起来了', en: 'Some say you hid it yourself' }, reaction: 'surprised',
            reactionText: { zh: '什么？我为什么要藏自己的画……', en: 'What? Why would I hide my own painting...' } },
          { text: { zh: '这幅画值多少钱？', en: 'How much was it worth?' }, reaction: 'angry',
            reactionText: { zh: '……你跟 Isabel 一样，只关心价格。', en: '...You\'re just like Isabel. Only care about the price.' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: '开幕夜你在哪里？', en: 'Where were you on opening night?' },
        options: [
          { text: { zh: '你一直待在展厅吗', en: 'Were you in the gallery the whole time' }, reaction: 'neutral',
            reactionText: { zh: '大部分时间。人太多了，我中途去天台透气。', en: 'Mostly. Too many people. I went to the rooftop to breathe.' } },
          { text: { zh: '有人看到你去了仓库', en: 'Someone saw you near the storage room' }, reaction: 'surprised',
            reactionText: { zh: '……谁说的？我只是路过。', en: '...Who said that? I just walked by.' } },
          { text: { zh: '你看起来不太喜欢那个场合', en: 'You didn\'t seem to enjoy the event' }, reaction: 'sad',
            reactionText: { zh: '我不擅长应付那种场面。Jenny 一直在帮我挡酒。', en: 'I\'m not good at those scenes. Jenny kept shielding me from people.' } },
        ],
      },
      {
        askExpr: 'sad',
        text: { zh: '你和 Isabel 的关系怎样？', en: 'What\'s your relationship with Isabel?' },
        options: [
          { text: { zh: '她想买你的画？', en: 'She wanted to buy your painting?' }, reaction: 'angry',
            reactionText: { zh: '她出了个离谱的低价。我拒绝了。她当时的表情……', en: 'She offered an absurdly low price. I refused. The look on her face...' } },
          { text: { zh: '你们之前认识吗', en: 'Did you know each other before?' }, reaction: 'neutral',
            reactionText: { zh: '见过几次。她收藏很多画，但我觉得她不懂画。', en: 'Met a few times. She collects many paintings, but I don\'t think she understands art.' } },
          { text: { zh: '她有没有可能偷走了画', en: 'Could she have stolen it?' }, reaction: 'surprised',
            reactionText: { zh: '……我不想这么想。但她那天晚上确实提前离开了。', en: '...I don\'t want to think that. But she did leave early that night.' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: 'Algram 那天在做什么？', en: 'What was Algram doing that night?' },
        options: [
          { text: { zh: '他的演出怎么样', en: 'How was his performance?' }, reaction: 'happy',
            reactionText: { zh: '……还不错。他弹了一首我很喜欢的曲子。', en: '...Not bad. He played a song I really liked.' } },
          { text: { zh: '他跟这件事有关系吗', en: 'Is he connected to this?' }, reaction: 'neutral',
            reactionText: { zh: 'Algram？他不像是会做这种事的人。不过……他那天好像很缺钱。', en: 'Algram? He doesn\'t seem the type. But...he seemed to need money badly that day.' } },
          { text: { zh: '你们关系好吗', en: 'Are you two close?' }, reaction: 'happy',
            reactionText: { zh: '算是吧。他是少数不会让我觉得不自在的人。', en: 'I guess. He\'s one of the few people who doesn\'t make me uncomfortable.' } },
        ],
      },
      {
        askExpr: 'sad',
        text: { zh: '你觉得画在哪里？', en: 'Where do you think the painting is?' },
        options: [
          { text: { zh: '你有什么线索吗', en: 'Do you have any clues?' }, reaction: 'neutral',
            reactionText: { zh: '……那天我在天台的时候，看到楼下停着一辆黑色的车。不知道是谁的。', en: '...When I was on the rooftop, I saw a black car parked below. Don\'t know whose it was.' } },
          { text: { zh: '你是不是知道什么没说', en: 'Are you hiding something?' }, reaction: 'angry',
            reactionText: { zh: '……我只是不想牵连别人。', en: '...I just don\'t want to involve others.' } },
          { text: { zh: '如果找不回来呢', en: 'What if it\'s never found?' }, reaction: 'sad',
            reactionText: { zh: '那就算了吧。也许它本来就不该属于任何人。', en: 'Then let it go. Maybe it was never meant to belong to anyone.' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: '最后一个问题——你信任 Jenny 吗？', en: 'Last question — do you trust Jenny?' },
        options: [
          { text: { zh: '她有嫌疑吗', en: 'Is she a suspect?' }, reaction: 'angry',
            reactionText: { zh: 'Jenny 不会做这种事。她比任何人都在乎这个展览。', en: 'Jenny would never. She cared about this exhibition more than anyone.' } },
          { text: { zh: '她那天有没有异常', en: 'Was she acting strange that night?' }, reaction: 'surprised',
            reactionText: { zh: '……她接了一个很长的电话。回来之后脸色不太好。', en: '...She took a very long phone call. Didn\'t look well when she came back.' } },
          { text: { zh: '你们是好朋友？', en: 'Are you good friends?' }, reaction: 'happy',
            reactionText: { zh: '她是我为数不多愿意相信的人。', en: 'She\'s one of the few people I\'m willing to trust.' } },
        ],
      },
    ],
    outro: { zh: '……问完了？那我走了。\n希望你能找到真相。不过真相……不一定是你想要的。', en: '...Done? Then I\'ll go.\nHope you find the truth. But the truth...might not be what you want.' },
    outroExpr: 'sad',
  },

  jenny: {
    role: { zh: '策展人 · 展览组织者', en: 'The Curator · Exhibition organizer' },
    intro: { zh: '你好！我已经准备好了所有资料。请问吧。', en: 'Hello! I have all the materials ready. Please ask away.' },
    questions: [
      {
        askExpr: 'neutral',
        text: { zh: '展览的安保情况怎么样？', en: 'How was the security at the exhibition?' },
        options: [
          { text: { zh: '监控录像呢？', en: 'What about security cameras?' }, reaction: 'surprised',
            reactionText: { zh: '这是最奇怪的部分——那个时段的监控正好故障了。我已经报告给技术部门了。', en: 'That\'s the strangest part — the cameras malfunctioned during that window. I\'ve reported it to tech.' } },
          { text: { zh: '谁有仓库的钥匙', en: 'Who had the storage room key?' }, reaction: 'neutral',
            reactionText: { zh: '只有我和画廊老板。但那天晚上……我把钥匙放在办公桌上过一段时间。', en: 'Only me and the gallery owner. But that night...I left the key on my desk for a while.' } },
          { text: { zh: '你是不是疏忽了', en: 'Were you negligent?' }, reaction: 'sad',
            reactionText: { zh: '……也许是吧。我那天太忙了，Isaya 又不擅长社交，我一直在帮她。', en: '...Maybe. I was so busy that day, and Isaya isn\'t good with people, so I kept helping her.' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: '那天晚上你接了一个电话？', en: 'You took a phone call that night?' },
        options: [
          { text: { zh: '是谁打来的', en: 'Who called?' }, reaction: 'surprised',
            reactionText: { zh: '……是画廊老板。他说有个买家出了高价，让我考虑私下交易。我拒绝了。', en: '...The gallery owner. He said a buyer offered a high price, wanted a private deal. I refused.' } },
          { text: { zh: '你接电话的时候离开了多久', en: 'How long were you away for the call?' }, reaction: 'neutral',
            reactionText: { zh: '大概十五分钟。回来的时候 Algram 还在演出，一切看起来正常。', en: 'About fifteen minutes. When I came back, Algram was still performing, everything seemed normal.' } },
          { text: { zh: '你在隐瞒什么', en: 'What are you hiding?' }, reaction: 'angry',
            reactionText: { zh: '我没有隐瞒！我只是……不想让 Isaya 知道有人想绕过她直接买画。', en: 'I\'m not hiding anything! I just...didn\'t want Isaya to know someone tried to buy the painting behind her back.' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: '你觉得 Isabel 可疑吗？', en: 'Do you find Isabel suspicious?' },
        options: [
          { text: { zh: '她为什么提前离开', en: 'Why did she leave early?' }, reaction: 'neutral',
            reactionText: { zh: '她说头痛。但我注意到她离开前去了一趟洗手间——而洗手间就在仓库旁边。', en: 'She said she had a headache. But I noticed she went to the restroom before leaving — which is right next to the storage room.' } },
          { text: { zh: '她出价被拒绝后什么反应', en: 'How did she react after her offer was rejected?' }, reaction: 'surprised',
            reactionText: { zh: '她笑了笑说"没关系"。但那种笑……怎么说呢，像是已经有了其他计划。', en: 'She smiled and said "no worries." But that smile...how to put it, like she already had another plan.' } },
          { text: { zh: '你们私下有往来吗', en: 'Are you in contact privately?' }, reaction: 'sad',
            reactionText: { zh: '她之前资助过我的几个展览。所以这件事让我很为难……', en: 'She\'s sponsored several of my exhibitions before. So this puts me in a difficult position...' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: 'Algram 那天有没有异常？', en: 'Was Algram acting unusual that night?' },
        options: [
          { text: { zh: '他的演出有中断吗', en: 'Was his performance interrupted?' }, reaction: 'surprised',
            reactionText: { zh: '……现在你提起来，他中间确实休息了一次，大概十分钟。我当时没在意。', en: '...Now that you mention it, he did take a break midway, about ten minutes. I didn\'t think much of it.' } },
          { text: { zh: '他认识 Isabel 吗', en: 'Does he know Isabel?' }, reaction: 'neutral',
            reactionText: { zh: '这我不确定。但我看到他们那天聊了很久。Algram 通常不跟那种人聊天。', en: 'I\'m not sure. But I saw them talking for a long time that night. Algram doesn\'t usually chat with that type.' } },
          { text: { zh: '他有动机吗', en: 'Does he have a motive?' }, reaction: 'sad',
            reactionText: { zh: '他最近确实缺钱……但我不觉得他会这么做。他跟 Isaya 是朋友。', en: 'He has been short on money lately...but I don\'t think he\'d do this. He and Isaya are friends.' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: '那辆黑色的车你见过吗？', en: 'Have you seen that black car?' },
        options: [
          { text: { zh: '什么黑色的车？', en: 'What black car?' }, reaction: 'surprised',
            reactionText: { zh: '你也知道了？是的，我看到了。那辆车是 Isabel 的司机开的。', en: 'You know about it too? Yes, I saw it. It was Isabel\'s driver.' } },
          { text: { zh: '你见到有人把东西搬上车吗', en: 'Did you see anyone loading something?' }, reaction: 'neutral',
            reactionText: { zh: '没有直接看到。但那辆车停在后门附近，而后门那天晚上没锁。', en: 'Didn\'t see directly. But the car was parked near the back door, which was unlocked that night.' } },
          { text: { zh: '后门是谁开的', en: 'Who opened the back door?' }, reaction: 'angry',
            reactionText: { zh: '应该是锁着的！但那天来帮忙搬器材的人太多了……Algram 的乐队也是从后门进的。', en: 'It should\'ve been locked! But so many people helped move equipment that day...Algram\'s band also came in through the back.' } },
        ],
      },
      {
        askExpr: 'sad',
        text: { zh: '如果是你认识的人做的，你会怎么办？', en: 'If someone you know did it, what would you do?' },
        options: [
          { text: { zh: '你会举报吗', en: 'Would you report them?' }, reaction: 'sad',
            reactionText: { zh: '……我不知道。Isaya 的画很重要，但我不想失去任何朋友。', en: '...I don\'t know. Isaya\'s painting matters, but I don\'t want to lose any friends.' } },
          { text: { zh: '你是不是已经知道了', en: 'Do you already know who did it?' }, reaction: 'surprised',
            reactionText: { zh: '……我只有猜测。没有证据的话，我不能乱说。', en: '...I only have guesses. Without evidence, I can\'t say anything.' } },
          { text: { zh: '你在保护谁？', en: 'Who are you protecting?' }, reaction: 'angry',
            reactionText: { zh: '我没有保护任何人！我只是……不想伤害 Isaya。她已经够受伤了。', en: 'I\'m not protecting anyone! I just...don\'t want to hurt Isaya. She\'s been hurt enough.' } },
        ],
      },
    ],
    outro: { zh: '我说的都是实话。如果你还有疑问……\n也许该去问问 Isabel 那辆车的事。', en: 'Everything I\'ve said is true. If you still have doubts...\nMaybe ask Isabel about that car.' },
    outroExpr: 'neutral',
  },

  algram: {
    role: { zh: '乐手 · 当晚驻场演出', en: 'The Musician · Performing that night' },
    intro: { zh: '嘿，我就知道你会来找我。问吧，我没什么好隐瞒的。', en: 'Hey, I knew you\'d come. Ask away, I\'ve got nothing to hide.' },
    questions: [
      {
        askExpr: 'happy',
        text: { zh: '你那天为什么中途休息了十分钟？', en: 'Why did you take a ten-minute break midway?' },
        options: [
          { text: { zh: '去了哪里', en: 'Where did you go?' }, reaction: 'neutral',
            reactionText: { zh: '后台换了根琴弦。断了一根，总不能用五根弦弹吧。', en: 'Backstage to change a guitar string. One broke, can\'t play with five strings.' } },
          { text: { zh: '有人能证明吗', en: 'Can anyone confirm that?' }, reaction: 'surprised',
            reactionText: { zh: '呃……后台没其他人。但我真的只是在换弦！', en: 'Uh...no one else was backstage. But I was really just changing strings!' } },
          { text: { zh: '你去过仓库附近吗', en: 'Were you near the storage room?' }, reaction: 'angry',
            reactionText: { zh: '后台和仓库是同一层，但我没有进去！你不能因为这个就怀疑我。', en: 'Backstage and storage are on the same floor, but I didn\'t go in! You can\'t suspect me just for that.' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: '你跟 Isabel 那天聊了什么？', en: 'What were you and Isabel talking about?' },
        options: [
          { text: { zh: '你们认识？', en: 'You know each other?' }, reaction: 'neutral',
            reactionText: { zh: '之前不认识。她主动来聊的，说喜欢我的音乐。还说可以资助我出专辑。', en: 'Didn\'t know her before. She came to me, said she liked my music. Even offered to fund my album.' } },
          { text: { zh: '她有没有提到那幅画', en: 'Did she mention the painting?' }, reaction: 'surprised',
            reactionText: { zh: '……她说了句很奇怪的话："有些东西，出价买不到，就得用别的方式得到。"', en: '...She said something strange: "Some things you can\'t buy with money — you need other methods."' } },
          { text: { zh: '她给了你多少钱', en: 'How much did she pay you?' }, reaction: 'angry',
            reactionText: { zh: '什么！？她没给我钱！你在暗示什么？', en: 'What!? She didn\'t pay me! What are you implying?' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: '你最近是不是缺钱？', en: 'Have you been short on money lately?' },
        options: [
          { text: { zh: '别紧张，只是确认', en: 'Relax, just confirming' }, reaction: 'sad',
            reactionText: { zh: '……是，房租拖了两个月了。但我不会为了钱对朋友下手。Isaya 的画我连碰都不会碰。', en: '...Yes, two months behind on rent. But I\'d never betray a friend for money. I wouldn\'t even touch Isaya\'s painting.' } },
          { text: { zh: 'Isabel 的资助你接受了吗', en: 'Did you accept Isabel\'s sponsorship?' }, reaction: 'neutral',
            reactionText: { zh: '还没决定。她让我考虑，我说等展览结束再说。然后画就不见了。', en: 'Haven\'t decided. She told me to think about it, I said after the exhibition. Then the painting disappeared.' } },
          { text: { zh: '那你的动机很明显', en: 'Then your motive is clear' }, reaction: 'angry',
            reactionText: { zh: '你——！Isaya 是我朋友！我宁可饿死也不会偷她的画！', en: 'You—! Isaya is my friend! I\'d rather starve than steal her painting!' } },
        ],
      },
      {
        askExpr: 'sad',
        text: { zh: '后门是你的乐队打开的？', en: 'Your band opened the back door?' },
        options: [
          { text: { zh: '你们搬完器材后锁门了吗', en: 'Did you lock it after moving equipment?' }, reaction: 'surprised',
            reactionText: { zh: '……应该锁了吧？不，等等，我记得我让贝斯手去锁的。他锁了没？我……不确定。', en: '...Should have? No, wait, I asked the bassist to lock it. Did he? I...I\'m not sure.' } },
          { text: { zh: '所以任何人都能从后门进出', en: 'So anyone could go in and out' }, reaction: 'sad',
            reactionText: { zh: '……如果真的没锁的话，那确实。天啊，这是不是我的错……', en: '...If it really wasn\'t locked, then yes. God, was this my fault...' } },
          { text: { zh: '你看到有人用过后门吗', en: 'Did you see anyone use the back door?' }, reaction: 'neutral',
            reactionText: { zh: '演出的时候看不到后门。但休息那十分钟……好像听到后门那边有动静。我以为是工作人员。', en: 'Can\'t see the back door during performance. But during those ten minutes...I think I heard movement near it. Thought it was staff.' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: '你觉得是谁做的？', en: 'Who do you think did it?' },
        options: [
          { text: { zh: '直说', en: 'Just say it' }, reaction: 'neutral',
            reactionText: { zh: '……那辆黑色的车。Isabel 的车。时间对得上。她提前走的时候，画已经不在了吧？', en: '...That black car. Isabel\'s car. The timing matches. When she left early, was the painting already gone?' } },
          { text: { zh: '你怀疑 Isabel？', en: 'You suspect Isabel?' }, reaction: 'sad',
            reactionText: { zh: '我不想怀疑任何人。但她说的那句话一直在我脑子里——"用别的方式得到"。', en: 'I don\'t want to suspect anyone. But what she said keeps echoing — "other methods."' } },
          { text: { zh: '会不会是 Jenny', en: 'Could it be Jenny?' }, reaction: 'angry',
            reactionText: { zh: 'Jenny？不可能。她为这个展览忙了半年。她比 Isaya 还在意那幅画。', en: 'Jenny? Impossible. She worked on this exhibition for six months. She cares about that painting more than Isaya does.' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: '如果画找不回来，你会怎么办？', en: 'What if the painting is never found?' },
        options: [
          { text: { zh: '你会帮 Isaya 吗', en: 'Would you help Isaya?' }, reaction: 'happy',
            reactionText: { zh: '当然。我可以给她写一首歌。用音乐把那幅画唱出来。', en: 'Of course. I could write her a song. Bring that painting to life through music.' } },
          { text: { zh: '你还会接受 Isabel 的资助吗', en: 'Would you still take Isabel\'s offer?' }, reaction: 'neutral',
            reactionText: { zh: '……不会了。不管她有没有做这件事，那笔钱我不会碰。', en: '...No. Whether she did it or not, I won\'t touch that money.' } },
          { text: { zh: '这件事改变了你什么', en: 'How did this change you?' }, reaction: 'sad',
            reactionText: { zh: '让我知道，有些东西比钱重要太多了。', en: 'It taught me that some things matter far more than money.' } },
        ],
      },
    ],
    outro: { zh: '我说的都是实话。你去问 Isabel 吧，\n问问她那辆车那天晚上到底装了什么。', en: 'I\'ve told you everything honestly. Go ask Isabel —\nask what that car was carrying that night.' },
    outroExpr: 'neutral',
  },

  isabel: {
    role: { zh: '收藏家 · 意向买家', en: 'The Collector · Prospective buyer' },
    intro: { zh: '嗯，我就知道你会留到最后才来找我。请坐。', en: 'Hmm, I knew you\'d save me for last. Please, sit.' },
    questions: [
      {
        askExpr: 'neutral',
        text: { zh: '你为什么提前离开了？', en: 'Why did you leave early?' },
        options: [
          { text: { zh: '你说头痛？', en: 'You said you had a headache?' }, reaction: 'happy',
            reactionText: { zh: '是的。那种场合让我疲倦。我不像某些人，需要靠人群来证明自己。', en: 'Yes. Those events tire me. Unlike some people, I don\'t need crowds to validate myself.' } },
          { text: { zh: '你离开前去了洗手间？', en: 'You went to the restroom before leaving?' }, reaction: 'surprised',
            reactionText: { zh: '……你连这个都知道？是的，我去补了个妆。洗手间旁边是仓库？我没注意。', en: '...You even know about that? Yes, I went to fix my makeup. The storage room was next door? I didn\'t notice.' } },
          { text: { zh: '你那辆黑色的车当晚在做什么', en: 'What was your black car doing that night?' }, reaction: 'angry',
            reactionText: { zh: '我的司机在等我。这有什么可疑的？你坐公交车来的吗？', en: 'My driver was waiting for me. What\'s suspicious about that? Did you take the bus here?' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: '你出价被拒绝后，什么感受？', en: 'How did you feel after your offer was rejected?' },
        options: [
          { text: { zh: '你生气了？', en: 'Were you angry?' }, reaction: 'happy',
            reactionText: { zh: '我？从不为钱生气。只是觉得那个画家不懂市场。一幅画而已。', en: 'Me? Never angry about money. I just think the artist doesn\'t understand the market. It\'s just a painting.' } },
          { text: { zh: '你说过"用别的方式得到"', en: 'You said "other methods to obtain it"' }, reaction: 'surprised',
            reactionText: { zh: '……谁告诉你的？Algram？那只是闲聊。我的意思是通过朋友介绍再谈。', en: '...Who told you? Algram? That was just small talk. I meant negotiating through mutual friends.' } },
          { text: { zh: '你有没有联系过画廊老板', en: 'Did you contact the gallery owner?' }, reaction: 'neutral',
            reactionText: { zh: '我认识他。但那天晚上我们没有单独谈过。你可以去问他。', en: 'I know him. But we didn\'t talk privately that night. You can ask him.' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: 'Jenny 说那天有人想私下交易', en: 'Jenny says someone tried a private deal that night' },
        options: [
          { text: { zh: '是你安排的？', en: 'Did you arrange it?' }, reaction: 'angry',
            reactionText: { zh: '我没有安排任何交易。也许是画廊老板自己的主意。别什么都往我身上推。', en: 'I didn\'t arrange any deal. Maybe it was the gallery owner\'s idea. Don\'t pin everything on me.' } },
          { text: { zh: '画廊老板跟你什么关系', en: 'What\'s your relationship with the gallery owner?' }, reaction: 'neutral',
            reactionText: { zh: '生意伙伴。我资助过他几次展览。仅此而已。', en: 'Business partners. I\'ve sponsored a few of his exhibitions. That\'s all.' } },
          { text: { zh: '你通过他施压了？', en: 'Did you pressure through him?' }, reaction: 'surprised',
            reactionText: { zh: '……我只是让他转达了我的诚意。如果一个策展人拒绝我，我还可以找老板。这叫商业策略。', en: '...I just asked him to convey my sincerity. If a curator rejects me, I can go to the owner. That\'s called business strategy.' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: '你的车停在后门附近', en: 'Your car was parked near the back door' },
        options: [
          { text: { zh: '为什么不停前门', en: 'Why not park in front?' }, reaction: 'neutral',
            reactionText: { zh: '前门太挤了。后面更安静。我不喜欢被人围观上车。', en: 'The front was too crowded. Quieter in the back. I don\'t like being watched getting into my car.' } },
          { text: { zh: '有人看到你的司机搬了东西', en: 'Someone saw your driver loading something' }, reaction: 'angry',
            reactionText: { zh: '搬了什么？我的外套和包。你要搜我的车吗？请便。', en: 'Loading what? My coat and bag. Want to search my car? Be my guest.' } },
          { text: { zh: '后门没锁你知道吗', en: 'Did you know the back door was unlocked?' }, reaction: 'surprised',
            reactionText: { zh: '……我怎么会知道这种事？', en: '...How would I know something like that?' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: '说实话，画在你那里吗？', en: 'Honestly, do you have the painting?' },
        options: [
          { text: { zh: '直接回答', en: 'Answer directly' }, reaction: 'angry',
            reactionText: { zh: '不在。你想搜就搜。但我劝你查查那个画廊老板——他最近负债累累。', en: 'No. Search if you want. But I suggest checking the gallery owner — he\'s been deeply in debt.' } },
          { text: { zh: '你不说，我也会查到', en: 'I\'ll find out even if you don\'t say' }, reaction: 'happy',
            reactionText: { zh: '那就查吧。我等着看你的结论。', en: 'Then go ahead. I\'ll wait for your conclusion.' } },
          { text: { zh: '也许你不是主犯，但你参与了', en: 'Maybe you didn\'t steal it, but you were involved' }, reaction: 'surprised',
            reactionText: { zh: '……你倒是比我想象的聪明。', en: '...You\'re smarter than I thought.' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: '最后——你对 Isaya 有什么想说的？', en: 'Last — anything you want to say to Isaya?' },
        options: [
          { text: { zh: '你欠她一个道歉', en: 'You owe her an apology' }, reaction: 'sad',
            reactionText: { zh: '……也许吧。她的画确实很美。我只是……用了错误的方式去追求美的东西。', en: '...Perhaps. Her painting truly was beautiful. I just...pursued beauty in the wrong way.' } },
          { text: { zh: '你还想要那幅画吗', en: 'Do you still want the painting?' }, reaction: 'neutral',
            reactionText: { zh: '不了。有些东西一旦用错误的方式得到，就失去了它的意义。', en: 'No. Some things lose their meaning once obtained the wrong way.' } },
          { text: { zh: '真相到底是什么', en: 'What\'s the real truth?' }, reaction: 'happy',
            reactionText: { zh: '真相？每个人都只看到了一部分。也许把我们四个人的话拼在一起，你就知道了。', en: 'The truth? Everyone only saw a part. Maybe if you piece all four stories together, you\'ll know.' } },
        ],
      },
    ],
    outro: { zh: '有趣的对话。\n不管结论是什么，记住——\n每个人都有自己看到的真相。', en: 'Interesting conversation.\nWhatever your conclusion — remember:\neveryone has their own version of the truth.' },
    outroExpr: 'happy',
  },
};
