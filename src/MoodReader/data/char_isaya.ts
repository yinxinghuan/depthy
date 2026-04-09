import type { CharacterData } from '../types';

import bg from '../img/isaya/bg.png';
import neutral_00_back_hair from '../img/isaya/00_back_hair.png';
import neutral_03_topwear from '../img/isaya/03_topwear.png';
import neutral_01_neck from '../img/isaya/01_neck.png';
import neutral_06_face from '../img/isaya/06_face.png';
import neutral_05_ears_r from '../img/isaya/05_ears-r.png';
import neutral_04_ears_l from '../img/isaya/04_ears-l.png';
import neutral_09_eyewhite_r from '../img/isaya/09_eyewhite-r.png';
import neutral_10_eyewhite_l from '../img/isaya/10_eyewhite-l.png';
import neutral_12_irides_r from '../img/isaya/12_irides-r.png';
import neutral_15_irides_l from '../img/isaya/15_irides-l.png';
import neutral_11_eyelash_r from '../img/isaya/11_eyelash-r.png';
import neutral_13_eyelash_l from '../img/isaya/13_eyelash-l.png';
import neutral_14_eyebrow_r from '../img/isaya/14_eyebrow-r.png';
import neutral_16_eyebrow_l from '../img/isaya/16_eyebrow-l.png';
import neutral_07_nose from '../img/isaya/07_nose.png';
import neutral_08_mouth from '../img/isaya/08_mouth.png';
import neutral_17_front_hair from '../img/isaya/17_front_hair.png';
import neutral_02_headwear from '../img/isaya/02_headwear.png';
import happy_00_back_hair from '../img/isaya/expr_happy/00_back_hair.png';
import happy_02_topwear from '../img/isaya/expr_happy/02_topwear.png';
import happy_01_neck from '../img/isaya/expr_happy/01_neck.png';
import happy_03_face from '../img/isaya/expr_happy/03_face.png';
import happy_05_ears_r from '../img/isaya/expr_happy/05_ears-r.png';
import happy_06_ears_l from '../img/isaya/expr_happy/06_ears-l.png';
import happy_09_eyelash_r from '../img/isaya/expr_happy/09_eyelash-r.png';
import happy_10_eyelash_l from '../img/isaya/expr_happy/10_eyelash-l.png';
import happy_11_eyebrow_r from '../img/isaya/expr_happy/11_eyebrow-r.png';
import happy_12_eyebrow_l from '../img/isaya/expr_happy/12_eyebrow-l.png';
import happy_08_nose from '../img/isaya/expr_happy/08_nose.png';
import happy_07_mouth from '../img/isaya/expr_happy/07_mouth.png';
import happy_13_front_hair from '../img/isaya/expr_happy/13_front_hair.png';
import happy_04_headwear from '../img/isaya/expr_happy/04_headwear.png';
import sad_00_back_hair from '../img/isaya/expr_sad/00_back_hair.png';
import sad_02_topwear from '../img/isaya/expr_sad/02_topwear.png';
import sad_01_neck from '../img/isaya/expr_sad/01_neck.png';
import sad_06_face from '../img/isaya/expr_sad/06_face.png';
import sad_04_ears_r from '../img/isaya/expr_sad/04_ears-r.png';
import sad_03_ears_l from '../img/isaya/expr_sad/03_ears-l.png';
import sad_11_eyewhite_r from '../img/isaya/expr_sad/11_eyewhite-r.png';
import sad_12_eyewhite_l from '../img/isaya/expr_sad/12_eyewhite-l.png';
import sad_10_irides_r from '../img/isaya/expr_sad/10_irides-r.png';
import sad_14_irides_l from '../img/isaya/expr_sad/14_irides-l.png';
import sad_09_eyelash_r from '../img/isaya/expr_sad/09_eyelash-r.png';
import sad_13_eyelash_l from '../img/isaya/expr_sad/13_eyelash-l.png';
import sad_15_eyebrow_r from '../img/isaya/expr_sad/15_eyebrow-r.png';
import sad_16_eyebrow_l from '../img/isaya/expr_sad/16_eyebrow-l.png';
import sad_08_nose from '../img/isaya/expr_sad/08_nose.png';
import sad_07_mouth from '../img/isaya/expr_sad/07_mouth.png';
import sad_17_front_hair from '../img/isaya/expr_sad/17_front_hair.png';
import sad_05_headwear from '../img/isaya/expr_sad/05_headwear.png';
import surprised_00_back_hair from '../img/isaya/expr_surprised/00_back_hair.png';
import surprised_02_topwear from '../img/isaya/expr_surprised/02_topwear.png';
import surprised_01_neck from '../img/isaya/expr_surprised/01_neck.png';
import surprised_06_face from '../img/isaya/expr_surprised/06_face.png';
import surprised_03_ears_r from '../img/isaya/expr_surprised/03_ears-r.png';
import surprised_04_ears_l from '../img/isaya/expr_surprised/04_ears-l.png';
import surprised_09_eyewhite_r from '../img/isaya/expr_surprised/09_eyewhite-r.png';
import surprised_10_eyewhite_l from '../img/isaya/expr_surprised/10_eyewhite-l.png';
import surprised_13_irides_r from '../img/isaya/expr_surprised/13_irides-r.png';
import surprised_12_irides_l from '../img/isaya/expr_surprised/12_irides-l.png';
import surprised_14_eyelash_r from '../img/isaya/expr_surprised/14_eyelash-r.png';
import surprised_11_eyelash_l from '../img/isaya/expr_surprised/11_eyelash-l.png';
import surprised_15_eyebrow_r from '../img/isaya/expr_surprised/15_eyebrow-r.png';
import surprised_16_eyebrow_l from '../img/isaya/expr_surprised/16_eyebrow-l.png';
import surprised_07_nose from '../img/isaya/expr_surprised/07_nose.png';
import surprised_08_mouth from '../img/isaya/expr_surprised/08_mouth.png';
import surprised_17_front_hair from '../img/isaya/expr_surprised/17_front_hair.png';
import surprised_05_headwear from '../img/isaya/expr_surprised/05_headwear.png';
import angry_00_back_hair from '../img/isaya/expr_angry/00_back_hair.png';
import angry_02_topwear from '../img/isaya/expr_angry/02_topwear.png';
import angry_01_neck from '../img/isaya/expr_angry/01_neck.png';
import angry_05_face from '../img/isaya/expr_angry/05_face.png';
import angry_04_ears_r from '../img/isaya/expr_angry/04_ears-r.png';
import angry_03_ears_l from '../img/isaya/expr_angry/03_ears-l.png';
import angry_09_eyewhite_r from '../img/isaya/expr_angry/09_eyewhite-r.png';
import angry_10_eyewhite_l from '../img/isaya/expr_angry/10_eyewhite-l.png';
import angry_11_irides_r from '../img/isaya/expr_angry/11_irides-r.png';
import angry_14_irides_l from '../img/isaya/expr_angry/14_irides-l.png';
import angry_12_eyelash_r from '../img/isaya/expr_angry/12_eyelash-r.png';
import angry_13_eyelash_l from '../img/isaya/expr_angry/13_eyelash-l.png';
import angry_15_eyebrow_r from '../img/isaya/expr_angry/15_eyebrow-r.png';
import angry_16_eyebrow_l from '../img/isaya/expr_angry/16_eyebrow-l.png';
import angry_07_nose from '../img/isaya/expr_angry/07_nose.png';
import angry_06_mouth from '../img/isaya/expr_angry/06_mouth.png';
import angry_17_front_hair from '../img/isaya/expr_angry/17_front_hair.png';
import angry_08_headwear from '../img/isaya/expr_angry/08_headwear.png';

const data: CharacterData = {
  name: 'isaya',
  displayName: 'Isaya',
  canvasSize: 1280,
  bgSrc: bg,
  expressions: {
    neutral: [
      [neutral_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
      [neutral_03_topwear, 0, 0, 1280, 1280, '', ''],
      [neutral_01_neck, 0, 0, 1280, 1280, '', ''],
      [neutral_06_face, 0, 0, 1280, 1280, '', ''],
      [neutral_05_ears_r, 413, 514, 88, 141, '', ''],
      [neutral_04_ears_l, 781, 510, 91, 142, '', ''],
      [neutral_09_eyewhite_r, 480, 532, 103, 42, '', 'eyewhite-r'],
      [neutral_10_eyewhite_l, 701, 528, 105, 42, '', 'eyewhite-l'],
      [neutral_12_irides_r, 507, 532, 66, 42, '', 'irides-r'],
      [neutral_15_irides_l, 720, 528, 66, 42, '', 'irides-l'],
      [neutral_11_eyelash_r, 467, 513, 123, 65, '', 'eyelash-r'],
      [neutral_13_eyelash_l, 694, 511, 128, 62, '', 'eyelash-l'],
      [neutral_14_eyebrow_r, 467, 477, 128, 16, '', 'eyebrow-r'],
      [neutral_16_eyebrow_l, 681, 475, 138, 30, '', 'eyebrow-l'],
      [neutral_07_nose, 0, 0, 1280, 1280, '', 'nose'],
      [neutral_08_mouth, 0, 0, 1280, 1280, '', 'mouth'],
      [neutral_17_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
      [neutral_02_headwear, 0, 0, 1280, 1280, 'mr-headwear', ''],
    ],
    happy: [
      [happy_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
      [happy_02_topwear, 0, 0, 1280, 1280, '', ''],
      [happy_01_neck, 0, 0, 1280, 1280, '', ''],
      [happy_03_face, 0, 0, 1280, 1280, '', ''],
      [happy_05_ears_r, 393, 538, 100, 136, '', ''],
      [happy_06_ears_l, 796, 452, 96, 155, '', ''],
      [happy_09_eyelash_r, 457, 513, 120, 62, '', 'eyelash-r'],
      [happy_10_eyelash_l, 671, 469, 125, 48, '', 'eyelash-l'],
      [happy_11_eyebrow_r, 446, 452, 115, 51, '', 'eyebrow-r'],
      [happy_12_eyebrow_l, 650, 411, 123, 27, '', 'eyebrow-l'],
      [happy_08_nose, 0, 0, 1280, 1280, '', 'nose'],
      [happy_07_mouth, 0, 0, 1280, 1280, '', 'mouth'],
      [happy_13_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
      [happy_04_headwear, 0, 0, 1280, 1280, 'mr-headwear', ''],
    ],
    sad: [
      [sad_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
      [sad_02_topwear, 0, 0, 1280, 1280, '', ''],
      [sad_01_neck, 0, 0, 1280, 1280, '', ''],
      [sad_06_face, 0, 0, 1280, 1280, '', ''],
      [sad_04_ears_r, 415, 513, 78, 129, '', ''],
      [sad_03_ears_l, 798, 513, 74, 129, '', ''],
      [sad_11_eyewhite_r, 486, 536, 101, 41, '', 'eyewhite-r'],
      [sad_12_eyewhite_l, 702, 535, 100, 40, '', 'eyewhite-l'],
      [sad_10_irides_r, 507, 538, 67, 32, '', 'irides-r'],
      [sad_14_irides_l, 715, 536, 66, 33, '', 'irides-l'],
      [sad_09_eyelash_r, 468, 515, 126, 68, '', 'eyelash-r'],
      [sad_13_eyelash_l, 694, 513, 120, 70, '', 'eyelash-l'],
      [sad_15_eyebrow_r, 478, 467, 130, 29, '', 'eyebrow-r'],
      [sad_16_eyebrow_l, 674, 467, 136, 28, '', 'eyebrow-l'],
      [sad_08_nose, 0, 0, 1280, 1280, '', 'nose'],
      [sad_07_mouth, 0, 0, 1280, 1280, '', 'mouth'],
      [sad_17_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
      [sad_05_headwear, 0, 0, 1280, 1280, 'mr-headwear', ''],
    ],
    surprised: [
      [surprised_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
      [surprised_02_topwear, 0, 0, 1280, 1280, '', ''],
      [surprised_01_neck, 0, 0, 1280, 1280, '', ''],
      [surprised_06_face, 0, 0, 1280, 1280, '', ''],
      [surprised_03_ears_r, 398, 513, 102, 139, '', ''],
      [surprised_04_ears_l, 795, 478, 98, 143, '', ''],
      [surprised_09_eyewhite_r, 480, 469, 103, 79, '', 'eyewhite-r'],
      [surprised_10_eyewhite_l, 693, 458, 106, 78, '', 'eyewhite-l'],
      [surprised_13_irides_r, 507, 477, 60, 64, '', 'irides-r'],
      [surprised_12_irides_l, 711, 466, 59, 64, '', 'irides-l'],
      [surprised_14_eyelash_r, 458, 450, 127, 103, '', 'eyelash-r'],
      [surprised_11_eyelash_l, 687, 441, 130, 101, '', 'eyelash-l'],
      [surprised_15_eyebrow_r, 457, 412, 150, 40, '', 'eyebrow-r'],
      [surprised_16_eyebrow_l, 654, 409, 154, 27, '', 'eyebrow-l'],
      [surprised_07_nose, 0, 0, 1280, 1280, '', 'nose'],
      [surprised_08_mouth, 0, 0, 1280, 1280, '', 'mouth'],
      [surprised_17_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
      [surprised_05_headwear, 0, 0, 1280, 1280, 'mr-headwear', ''],
    ],
    angry: [
      [angry_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
      [angry_02_topwear, 0, 0, 1280, 1280, '', ''],
      [angry_01_neck, 0, 0, 1280, 1280, '', ''],
      [angry_05_face, 0, 0, 1280, 1280, '', ''],
      [angry_04_ears_r, 400, 518, 102, 147, '', ''],
      [angry_03_ears_l, 787, 519, 98, 146, '', ''],
      [angry_09_eyewhite_r, 485, 536, 104, 38, '', 'eyewhite-r'],
      [angry_10_eyewhite_l, 702, 536, 104, 39, '', 'eyewhite-l'],
      [angry_11_irides_r, 513, 533, 62, 42, '', 'irides-r'],
      [angry_14_irides_l, 717, 533, 62, 42, '', 'irides-l'],
      [angry_12_eyelash_r, 461, 518, 144, 68, '', 'eyelash-r'],
      [angry_13_eyelash_l, 687, 519, 139, 67, '', 'eyelash-l'],
      [angry_15_eyebrow_r, 478, 482, 153, 69, '', 'eyebrow-r'],
      [angry_16_eyebrow_l, 668, 483, 147, 68, '', 'eyebrow-l'],
      [angry_07_nose, 0, 0, 1280, 1280, '', 'nose'],
      [angry_06_mouth, 0, 0, 1280, 1280, '', 'mouth'],
      [angry_17_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
      [angry_08_headwear, 0, 0, 1280, 1280, 'mr-headwear', ''],
    ],
  },
};

export default data;
