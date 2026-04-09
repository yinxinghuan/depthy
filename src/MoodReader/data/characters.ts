import type { CharacterData } from '../types';

// ── Isaya ──
import isaya_bg from '../img/isaya/bg.png';
import isaya_00_back_hair from '../img/isaya/00_back_hair.png';
import isaya_03_topwear from '../img/isaya/03_topwear.png';
import isaya_01_neck from '../img/isaya/01_neck.png';
import isaya_06_face from '../img/isaya/06_face.png';
import isaya_05_ears_r from '../img/isaya/05_ears-r.png';
import isaya_04_ears_l from '../img/isaya/04_ears-l.png';
import isaya_09_eyewhite_r from '../img/isaya/09_eyewhite-r.png';
import isaya_10_eyewhite_l from '../img/isaya/10_eyewhite-l.png';
import isaya_12_irides_r from '../img/isaya/12_irides-r.png';
import isaya_15_irides_l from '../img/isaya/15_irides-l.png';
import isaya_11_eyelash_r from '../img/isaya/11_eyelash-r.png';
import isaya_13_eyelash_l from '../img/isaya/13_eyelash-l.png';
import isaya_14_eyebrow_r from '../img/isaya/14_eyebrow-r.png';
import isaya_16_eyebrow_l from '../img/isaya/16_eyebrow-l.png';
import isaya_07_nose from '../img/isaya/07_nose.png';
import isaya_08_mouth from '../img/isaya/08_mouth.png';
import isaya_17_front_hair from '../img/isaya/17_front_hair.png';
import isaya_02_headwear from '../img/isaya/02_headwear.png';

const ISAYA_LAYERS: CharacterData['layers'] = [
  [isaya_bg, 0, 0, 1280, 1280, 'mr-bg', ''],
  [isaya_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
  [isaya_03_topwear, 0, 0, 1280, 1280, '', ''],
  [isaya_01_neck, 0, 0, 1280, 1280, '', ''],
  [isaya_06_face, 0, 0, 1280, 1280, '', ''],
  [isaya_05_ears_r, 413, 514, 88, 141, '', ''],
  [isaya_04_ears_l, 781, 510, 91, 142, '', ''],
  [isaya_09_eyewhite_r, 480, 532, 103, 42, '', 'eyewhite-r'],
  [isaya_10_eyewhite_l, 701, 528, 105, 42, '', 'eyewhite-l'],
  [isaya_12_irides_r, 507, 532, 66, 42, '', 'irides-r'],
  [isaya_15_irides_l, 720, 528, 66, 42, '', 'irides-l'],
  [isaya_11_eyelash_r, 467, 513, 123, 65, '', 'eyelash-r'],
  [isaya_13_eyelash_l, 694, 511, 128, 62, '', 'eyelash-l'],
  [isaya_14_eyebrow_r, 467, 477, 128, 16, '', 'eyebrow-r'],
  [isaya_16_eyebrow_l, 681, 475, 138, 30, '', 'eyebrow-l'],
  [isaya_07_nose, 0, 0, 1280, 1280, '', 'nose'],
  [isaya_08_mouth, 0, 0, 1280, 1280, '', 'mouth'],
  [isaya_17_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
  [isaya_02_headwear, 0, 0, 1280, 1280, 'mr-headwear', ''],
];

// ── Jenny ──
import jenny_bg from '../img/jenny/bg.png';
import jenny_00_back_hair from '../img/jenny/00_back_hair.png';
import jenny_01_topwear from '../img/jenny/01_topwear.png';
import jenny_02_neck from '../img/jenny/02_neck.png';
import jenny_05_face from '../img/jenny/05_face.png';
import jenny_04_ears_r from '../img/jenny/04_ears-r.png';
import jenny_03_ears_l from '../img/jenny/03_ears-l.png';
import jenny_08_eyewhite_r from '../img/jenny/08_eyewhite-r.png';
import jenny_09_eyewhite_l from '../img/jenny/09_eyewhite-l.png';
import jenny_10_irides_r from '../img/jenny/10_irides-r.png';
import jenny_13_irides_l from '../img/jenny/13_irides-l.png';
import jenny_11_eyelash_r from '../img/jenny/11_eyelash-r.png';
import jenny_15_eyelash_l from '../img/jenny/15_eyelash-l.png';
import jenny_12_eyebrow_r from '../img/jenny/12_eyebrow-r.png';
import jenny_14_eyebrow_l from '../img/jenny/14_eyebrow-l.png';
import jenny_06_nose from '../img/jenny/06_nose.png';
import jenny_07_mouth from '../img/jenny/07_mouth.png';
import jenny_16_front_hair from '../img/jenny/16_front_hair.png';
import jenny_17_eyewear from '../img/jenny/17_eyewear.png';

const JENNY_LAYERS: CharacterData['layers'] = [
  [jenny_bg, 0, 0, 1280, 1280, 'mr-bg', ''],
  [jenny_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
  [jenny_01_topwear, 0, 0, 1280, 1280, '', ''],
  [jenny_02_neck, 0, 0, 1280, 1280, '', ''],
  [jenny_05_face, 0, 0, 1280, 1280, '', ''],
  [jenny_04_ears_r, 353, 506, 105, 161, '', ''],
  [jenny_03_ears_l, 829, 506, 107, 160, '', ''],
  [jenny_08_eyewhite_r, 454, 481, 122, 76, '', 'eyewhite-r'],
  [jenny_09_eyewhite_l, 708, 481, 119, 76, '', 'eyewhite-l'],
  [jenny_10_irides_r, 484, 482, 76, 76, '', 'irides-r'],
  [jenny_13_irides_l, 724, 482, 76, 76, '', 'irides-l'],
  [jenny_11_eyelash_r, 428, 463, 156, 87, '', 'eyelash-r'],
  [jenny_15_eyelash_l, 698, 463, 158, 86, '', 'eyelash-l'],
  [jenny_12_eyebrow_r, 443, 413, 150, 33, '', 'eyebrow-r'],
  [jenny_14_eyebrow_l, 689, 412, 155, 34, '', 'eyebrow-l'],
  [jenny_06_nose, 0, 0, 1280, 1280, '', 'nose'],
  [jenny_07_mouth, 0, 0, 1280, 1280, '', 'mouth'],
  [jenny_16_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
  [jenny_17_eyewear, 0, 0, 1280, 1280, 'mr-eyewear', ''],
];

// ── Algram ──
import algram_bg from '../img/algram/bg.png';
import algram_00_topwear from '../img/algram/00_topwear.png';
import algram_01_neck from '../img/algram/01_neck.png';
import algram_04_face from '../img/algram/04_face.png';
import algram_03_ears_r from '../img/algram/03_ears-r.png';
import algram_02_ears_l from '../img/algram/02_ears-l.png';
import algram_07_eyewhite_r from '../img/algram/07_eyewhite-r.png';
import algram_08_eyewhite_l from '../img/algram/08_eyewhite-l.png';
import algram_10_irides_r from '../img/algram/10_irides-r.png';
import algram_12_irides_l from '../img/algram/12_irides-l.png';
import algram_09_eyelash_r from '../img/algram/09_eyelash-r.png';
import algram_11_eyelash_l from '../img/algram/11_eyelash-l.png';
import algram_14_eyebrow_r from '../img/algram/14_eyebrow-r.png';
import algram_13_eyebrow_l from '../img/algram/13_eyebrow-l.png';
import algram_06_nose from '../img/algram/06_nose.png';
import algram_05_mouth from '../img/algram/05_mouth.png';
import algram_15_front_hair from '../img/algram/15_front_hair.png';

const ALGRAM_LAYERS: CharacterData['layers'] = [
  [algram_bg, 0, 0, 1280, 1280, 'mr-bg', ''],
  [algram_00_topwear, 0, 0, 1280, 1280, '', ''],
  [algram_01_neck, 0, 0, 1280, 1280, '', ''],
  [algram_04_face, 0, 0, 1280, 1280, '', ''],
  [algram_03_ears_r, 381, 517, 93, 155, '', ''],
  [algram_02_ears_l, 807, 502, 85, 155, '', ''],
  [algram_07_eyewhite_r, 479, 499, 101, 52, '', 'eyewhite-r'],
  [algram_08_eyewhite_l, 694, 491, 98, 52, '', 'eyewhite-l'],
  [algram_10_irides_r, 512, 500, 51, 51, '', 'irides-r'],
  [algram_12_irides_l, 710, 491, 52, 53, '', 'irides-l'],
  [algram_09_eyelash_r, 470, 474, 116, 76, '', 'eyelash-r'],
  [algram_11_eyelash_l, 684, 466, 119, 71, '', 'eyelash-l'],
  [algram_14_eyebrow_r, 455, 449, 146, 30, '', 'eyebrow-r'],
  [algram_13_eyebrow_l, 667, 438, 145, 36, '', 'eyebrow-l'],
  [algram_06_nose, 0, 0, 1280, 1280, '', 'nose'],
  [algram_05_mouth, 0, 0, 1280, 1280, '', 'mouth'],
  [algram_15_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
];

// ── Isabel ──
import isabel_bg from '../img/isabel/bg.png';
import isabel_00_back_hair from '../img/isabel/00_back_hair.png';
import isabel_01_topwear from '../img/isabel/01_topwear.png';
import isabel_02_neck from '../img/isabel/02_neck.png';
import isabel_06_face from '../img/isabel/06_face.png';
import isabel_04_ears_r from '../img/isabel/04_ears-r.png';
import isabel_05_ears_l from '../img/isabel/05_ears-l.png';
import isabel_03_earwear from '../img/isabel/03_earwear.png';
import isabel_10_eyewhite_r from '../img/isabel/10_eyewhite-r.png';
import isabel_11_eyewhite_l from '../img/isabel/11_eyewhite-l.png';
import isabel_12_irides_r from '../img/isabel/12_irides-r.png';
import isabel_13_irides_l from '../img/isabel/13_irides-l.png';
import isabel_14_eyelash_r from '../img/isabel/14_eyelash-r.png';
import isabel_09_eyelash_l from '../img/isabel/09_eyelash-l.png';
import isabel_16_eyebrow_r from '../img/isabel/16_eyebrow-r.png';
import isabel_15_eyebrow_l from '../img/isabel/15_eyebrow-l.png';
import isabel_08_nose from '../img/isabel/08_nose.png';
import isabel_07_mouth from '../img/isabel/07_mouth.png';
import isabel_17_front_hair from '../img/isabel/17_front_hair.png';

const ISABEL_LAYERS: CharacterData['layers'] = [
  [isabel_bg, 0, 0, 1280, 1280, 'mr-bg', ''],
  [isabel_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
  [isabel_01_topwear, 0, 0, 1280, 1280, '', ''],
  [isabel_02_neck, 0, 0, 1280, 1280, '', ''],
  [isabel_06_face, 461, 202, 329, 426, '', ''],
  [isabel_04_ears_r, 452, 404, 64, 112, '', ''],
  [isabel_05_ears_l, 765, 373, 58, 120, '', ''],
  [isabel_03_earwear, 471, 471, 333, 104, '', ''],
  [isabel_10_eyewhite_r, 510, 395, 76, 37, '', 'eyewhite-r'],
  [isabel_11_eyewhite_l, 667, 380, 81, 39, '', 'eyewhite-l'],
  [isabel_12_irides_r, 530, 395, 45, 35, '', 'irides-r'],
  [isabel_13_irides_l, 687, 380, 43, 37, '', 'irides-l'],
  [isabel_14_eyelash_r, 486, 385, 105, 49, '', 'eyelash-r'],
  [isabel_09_eyelash_l, 663, 370, 102, 49, '', 'eyelash-l'],
  [isabel_16_eyebrow_r, 482, 353, 110, 27, '', 'eyebrow-r'],
  [isabel_15_eyebrow_l, 649, 338, 118, 32, '', 'eyebrow-l'],
  [isabel_08_nose, 604, 432, 50, 76, '', 'nose'],
  [isabel_07_mouth, 585, 523, 105, 48, '', 'mouth'],
  [isabel_17_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
];

export const CHARACTERS: CharacterData[] = [
  { name: 'isaya', displayName: 'Isaya', layers: ISAYA_LAYERS, canvasSize: 1280 },
  { name: 'jenny', displayName: 'Jenny', layers: JENNY_LAYERS, canvasSize: 1280 },
  { name: 'algram', displayName: 'Algram', layers: ALGRAM_LAYERS, canvasSize: 1280 },
  { name: 'isabel', displayName: 'Isabel', layers: ISABEL_LAYERS, canvasSize: 1280 },
];
