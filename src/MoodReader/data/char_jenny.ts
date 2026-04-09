import type { CharacterData } from '../types';

import bg from '../img/jenny/bg.png';
import neutral_00_back_hair from '../img/jenny/00_back_hair.png';
import neutral_01_topwear from '../img/jenny/01_topwear.png';
import neutral_02_neck from '../img/jenny/02_neck.png';
import neutral_05_face from '../img/jenny/05_face.png';
import neutral_04_ears_r from '../img/jenny/04_ears-r.png';
import neutral_03_ears_l from '../img/jenny/03_ears-l.png';
import neutral_08_eyewhite_r from '../img/jenny/08_eyewhite-r.png';
import neutral_09_eyewhite_l from '../img/jenny/09_eyewhite-l.png';
import neutral_10_irides_r from '../img/jenny/10_irides-r.png';
import neutral_13_irides_l from '../img/jenny/13_irides-l.png';
import neutral_11_eyelash_r from '../img/jenny/11_eyelash-r.png';
import neutral_15_eyelash_l from '../img/jenny/15_eyelash-l.png';
import neutral_12_eyebrow_r from '../img/jenny/12_eyebrow-r.png';
import neutral_14_eyebrow_l from '../img/jenny/14_eyebrow-l.png';
import neutral_06_nose from '../img/jenny/06_nose.png';
import neutral_07_mouth from '../img/jenny/07_mouth.png';
import neutral_16_front_hair from '../img/jenny/16_front_hair.png';
import neutral_17_eyewear from '../img/jenny/17_eyewear.png';
import happy_00_back_hair from '../img/jenny/expr_happy/00_back_hair.png';
import happy_01_topwear from '../img/jenny/expr_happy/01_topwear.png';
import happy_02_neck from '../img/jenny/expr_happy/02_neck.png';
import happy_05_face from '../img/jenny/expr_happy/05_face.png';
import happy_04_ears_r from '../img/jenny/expr_happy/04_ears-r.png';
import happy_03_ears_l from '../img/jenny/expr_happy/03_ears-l.png';
import happy_08_eyewhite_r from '../img/jenny/expr_happy/08_eyewhite-r.png';
import happy_09_eyewhite_l from '../img/jenny/expr_happy/09_eyewhite-l.png';
import happy_10_irides_r from '../img/jenny/expr_happy/10_irides-r.png';
import happy_14_irides_l from '../img/jenny/expr_happy/14_irides-l.png';
import happy_11_eyelash_r from '../img/jenny/expr_happy/11_eyelash-r.png';
import happy_12_eyelash_l from '../img/jenny/expr_happy/12_eyelash-l.png';
import happy_13_eyebrow_r from '../img/jenny/expr_happy/13_eyebrow-r.png';
import happy_15_eyebrow_l from '../img/jenny/expr_happy/15_eyebrow-l.png';
import happy_07_nose from '../img/jenny/expr_happy/07_nose.png';
import happy_06_mouth from '../img/jenny/expr_happy/06_mouth.png';
import happy_16_front_hair from '../img/jenny/expr_happy/16_front_hair.png';
import happy_17_eyewear from '../img/jenny/expr_happy/17_eyewear.png';
import sad_00_back_hair from '../img/jenny/expr_sad/00_back_hair.png';
import sad_01_topwear from '../img/jenny/expr_sad/01_topwear.png';
import sad_02_neck from '../img/jenny/expr_sad/02_neck.png';
import sad_05_face from '../img/jenny/expr_sad/05_face.png';
import sad_04_ears_r from '../img/jenny/expr_sad/04_ears-r.png';
import sad_03_ears_l from '../img/jenny/expr_sad/03_ears-l.png';
import sad_08_eyewhite_r from '../img/jenny/expr_sad/08_eyewhite-r.png';
import sad_09_eyewhite_l from '../img/jenny/expr_sad/09_eyewhite-l.png';
import sad_10_irides_r from '../img/jenny/expr_sad/10_irides-r.png';
import sad_11_irides_l from '../img/jenny/expr_sad/11_irides-l.png';
import sad_12_eyelash_r from '../img/jenny/expr_sad/12_eyelash-r.png';
import sad_13_eyelash_l from '../img/jenny/expr_sad/13_eyelash-l.png';
import sad_15_eyebrow_r from '../img/jenny/expr_sad/15_eyebrow-r.png';
import sad_14_eyebrow_l from '../img/jenny/expr_sad/14_eyebrow-l.png';
import sad_06_nose from '../img/jenny/expr_sad/06_nose.png';
import sad_07_mouth from '../img/jenny/expr_sad/07_mouth.png';
import sad_16_front_hair from '../img/jenny/expr_sad/16_front_hair.png';
import sad_17_eyewear from '../img/jenny/expr_sad/17_eyewear.png';
import surprised_00_back_hair from '../img/jenny/expr_surprised/00_back_hair.png';
import surprised_02_topwear from '../img/jenny/expr_surprised/02_topwear.png';
import surprised_01_neck from '../img/jenny/expr_surprised/01_neck.png';
import surprised_05_face from '../img/jenny/expr_surprised/05_face.png';
import surprised_04_ears_r from '../img/jenny/expr_surprised/04_ears-r.png';
import surprised_03_ears_l from '../img/jenny/expr_surprised/03_ears-l.png';
import surprised_08_eyewhite_r from '../img/jenny/expr_surprised/08_eyewhite-r.png';
import surprised_09_eyewhite_l from '../img/jenny/expr_surprised/09_eyewhite-l.png';
import surprised_10_irides_r from '../img/jenny/expr_surprised/10_irides-r.png';
import surprised_13_irides_l from '../img/jenny/expr_surprised/13_irides-l.png';
import surprised_11_eyelash_r from '../img/jenny/expr_surprised/11_eyelash-r.png';
import surprised_12_eyelash_l from '../img/jenny/expr_surprised/12_eyelash-l.png';
import surprised_14_eyebrow_r from '../img/jenny/expr_surprised/14_eyebrow-r.png';
import surprised_15_eyebrow_l from '../img/jenny/expr_surprised/15_eyebrow-l.png';
import surprised_07_nose from '../img/jenny/expr_surprised/07_nose.png';
import surprised_06_mouth from '../img/jenny/expr_surprised/06_mouth.png';
import surprised_16_front_hair from '../img/jenny/expr_surprised/16_front_hair.png';
import surprised_17_eyewear from '../img/jenny/expr_surprised/17_eyewear.png';
import angry_00_back_hair from '../img/jenny/expr_angry/00_back_hair.png';
import angry_01_topwear from '../img/jenny/expr_angry/01_topwear.png';
import angry_02_neck from '../img/jenny/expr_angry/02_neck.png';
import angry_05_face from '../img/jenny/expr_angry/05_face.png';
import angry_04_ears_r from '../img/jenny/expr_angry/04_ears-r.png';
import angry_03_ears_l from '../img/jenny/expr_angry/03_ears-l.png';
import angry_08_eyewhite_r from '../img/jenny/expr_angry/08_eyewhite-r.png';
import angry_09_eyewhite_l from '../img/jenny/expr_angry/09_eyewhite-l.png';
import angry_10_irides_r from '../img/jenny/expr_angry/10_irides-r.png';
import angry_13_irides_l from '../img/jenny/expr_angry/13_irides-l.png';
import angry_11_eyelash_r from '../img/jenny/expr_angry/11_eyelash-r.png';
import angry_14_eyelash_l from '../img/jenny/expr_angry/14_eyelash-l.png';
import angry_12_eyebrow_r from '../img/jenny/expr_angry/12_eyebrow-r.png';
import angry_15_eyebrow_l from '../img/jenny/expr_angry/15_eyebrow-l.png';
import angry_07_nose from '../img/jenny/expr_angry/07_nose.png';
import angry_06_mouth from '../img/jenny/expr_angry/06_mouth.png';
import angry_16_front_hair from '../img/jenny/expr_angry/16_front_hair.png';
import angry_17_eyewear from '../img/jenny/expr_angry/17_eyewear.png';

const data: CharacterData = {
  name: 'jenny',
  displayName: 'Jenny',
  canvasSize: 1280,
  bgSrc: bg,
  expressions: {
    neutral: [
      [neutral_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
      [neutral_01_topwear, 0, 0, 1280, 1280, '', ''],
      [neutral_02_neck, 0, 0, 1280, 1280, '', ''],
      [neutral_05_face, 0, 0, 1280, 1280, '', ''],
      [neutral_04_ears_r, 353, 506, 105, 161, '', ''],
      [neutral_03_ears_l, 829, 506, 107, 160, '', ''],
      [neutral_08_eyewhite_r, 454, 481, 122, 76, '', 'eyewhite-r'],
      [neutral_09_eyewhite_l, 708, 481, 119, 76, '', 'eyewhite-l'],
      [neutral_10_irides_r, 484, 482, 76, 76, '', 'irides-r'],
      [neutral_13_irides_l, 724, 482, 76, 76, '', 'irides-l'],
      [neutral_11_eyelash_r, 428, 463, 156, 87, '', 'eyelash-r'],
      [neutral_15_eyelash_l, 698, 463, 158, 86, '', 'eyelash-l'],
      [neutral_12_eyebrow_r, 443, 413, 150, 33, '', 'eyebrow-r'],
      [neutral_14_eyebrow_l, 689, 412, 155, 34, '', 'eyebrow-l'],
      [neutral_06_nose, 0, 0, 1280, 1280, '', 'nose'],
      [neutral_07_mouth, 0, 0, 1280, 1280, '', 'mouth'],
      [neutral_16_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
      [neutral_17_eyewear, 0, 0, 1280, 1280, 'mr-eyewear', ''],
    ],
    happy: [
      [happy_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
      [happy_01_topwear, 0, 0, 1280, 1280, '', ''],
      [happy_02_neck, 0, 0, 1280, 1280, '', ''],
      [happy_05_face, 399, 213, 488, 632, '', ''],
      [happy_04_ears_r, 363, 504, 92, 162, '', ''],
      [happy_03_ears_l, 831, 504, 95, 160, '', ''],
      [happy_08_eyewhite_r, 455, 483, 121, 73, '', 'eyewhite-r'],
      [happy_09_eyewhite_l, 707, 482, 121, 73, '', 'eyewhite-l'],
      [happy_10_irides_r, 483, 481, 79, 77, '', 'irides-r'],
      [happy_14_irides_l, 724, 479, 77, 79, '', 'irides-l'],
      [happy_11_eyelash_r, 426, 464, 159, 98, '', 'eyelash-r'],
      [happy_12_eyelash_l, 695, 463, 161, 99, '', 'eyelash-l'],
      [happy_13_eyebrow_r, 437, 412, 157, 34, '', 'eyebrow-r'],
      [happy_15_eyebrow_l, 689, 411, 157, 34, '', 'eyebrow-l'],
      [happy_07_nose, 609, 569, 74, 91, '', 'nose'],
      [happy_06_mouth, 536, 670, 217, 100, '', 'mouth'],
      [happy_16_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
      [happy_17_eyewear, 385, 438, 513, 190, 'mr-eyewear', ''],
    ],
    sad: [
      [sad_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
      [sad_01_topwear, 123, 822, 1157, 458, '', ''],
      [sad_02_neck, 0, 0, 1280, 1280, '', ''],
      [sad_05_face, 0, 0, 1280, 1280, '', ''],
      [sad_04_ears_r, 365, 510, 92, 158, '', ''],
      [sad_03_ears_l, 828, 510, 95, 158, '', ''],
      [sad_08_eyewhite_r, 458, 540, 123, 51, '', 'eyewhite-r'],
      [sad_09_eyewhite_l, 709, 539, 120, 51, '', 'eyewhite-l'],
      [sad_10_irides_r, 492, 541, 75, 49, '', 'irides-r'],
      [sad_11_irides_l, 722, 541, 75, 49, '', 'irides-l'],
      [sad_12_eyelash_r, 433, 525, 155, 54, '', 'eyelash-r'],
      [sad_13_eyelash_l, 700, 524, 154, 51, '', 'eyelash-l'],
      [sad_15_eyebrow_r, 442, 451, 168, 43, '', 'eyebrow-r'],
      [sad_14_eyebrow_l, 679, 456, 166, 37, '', 'eyebrow-l'],
      [sad_06_nose, 0, 0, 1280, 1280, '', 'nose'],
      [sad_07_mouth, 0, 0, 1280, 1280, '', 'mouth'],
      [sad_16_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
      [sad_17_eyewear, 0, 0, 1280, 1280, 'mr-eyewear', ''],
    ],
    surprised: [
      [surprised_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
      [surprised_02_topwear, 0, 0, 1280, 1280, '', ''],
      [surprised_01_neck, 0, 0, 1280, 1280, '', ''],
      [surprised_05_face, 0, 0, 1280, 1280, '', ''],
      [surprised_04_ears_r, 353, 507, 105, 160, '', ''],
      [surprised_03_ears_l, 828, 506, 108, 160, '', ''],
      [surprised_08_eyewhite_r, 456, 473, 121, 90, '', 'eyewhite-r'],
      [surprised_09_eyewhite_l, 707, 474, 119, 91, '', 'eyewhite-l'],
      [surprised_10_irides_r, 486, 483, 73, 82, '', 'irides-r'],
      [surprised_13_irides_l, 725, 483, 72, 82, '', 'irides-l'],
      [surprised_11_eyelash_r, 427, 453, 158, 119, '', 'eyelash-r'],
      [surprised_12_eyelash_l, 703, 451, 153, 124, '', 'eyelash-l'],
      [surprised_14_eyebrow_r, 453, 363, 140, 85, '', 'eyebrow-r'],
      [surprised_15_eyebrow_l, 695, 361, 142, 85, '', 'eyebrow-l'],
      [surprised_07_nose, 0, 0, 1280, 1280, '', 'nose'],
      [surprised_06_mouth, 599, 0, 681, 1280, '', 'mouth'],
      [surprised_16_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
      [surprised_17_eyewear, 0, 0, 1280, 1280, 'mr-eyewear', ''],
    ],
    angry: [
      [angry_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
      [angry_01_topwear, 0, 0, 1280, 1280, '', ''],
      [angry_02_neck, 0, 0, 1280, 1280, '', ''],
      [angry_05_face, 0, 0, 1280, 1280, '', ''],
      [angry_04_ears_r, 353, 502, 99, 163, '', ''],
      [angry_03_ears_l, 835, 503, 101, 162, '', ''],
      [angry_08_eyewhite_r, 454, 485, 122, 72, '', 'eyewhite-r'],
      [angry_09_eyewhite_l, 708, 486, 119, 70, '', 'eyewhite-l'],
      [angry_10_irides_r, 484, 483, 76, 76, '', 'irides-r'],
      [angry_13_irides_l, 724, 483, 76, 75, '', 'irides-l'],
      [angry_11_eyelash_r, 428, 463, 157, 100, '', 'eyelash-r'],
      [angry_14_eyelash_l, 698, 463, 158, 100, '', 'eyelash-l'],
      [angry_12_eyebrow_r, 459, 424, 142, 46, '', 'eyebrow-r'],
      [angry_15_eyebrow_l, 691, 421, 132, 45, '', 'eyebrow-l'],
      [angry_07_nose, 0, 0, 1280, 1280, '', 'nose'],
      [angry_06_mouth, 583, 0, 697, 1280, '', 'mouth'],
      [angry_16_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
      [angry_17_eyewear, 0, 0, 1280, 1280, 'mr-eyewear', ''],
    ],
  },
};

export default data;
