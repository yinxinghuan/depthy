import type { CharacterData } from '../types';

import bg from '../img/isabel/bg.png';
import neutral_00_back_hair from '../img/isabel/00_back_hair.png';
import neutral_01_topwear from '../img/isabel/01_topwear.png';
import neutral_02_neck from '../img/isabel/02_neck.png';
import neutral_06_face from '../img/isabel/06_face.png';
import neutral_04_ears_r from '../img/isabel/04_ears-r.png';
import neutral_05_ears_l from '../img/isabel/05_ears-l.png';
import neutral_03_earwear from '../img/isabel/03_earwear.png';
import neutral_10_eyewhite_r from '../img/isabel/10_eyewhite-r.png';
import neutral_11_eyewhite_l from '../img/isabel/11_eyewhite-l.png';
import neutral_12_irides_r from '../img/isabel/12_irides-r.png';
import neutral_13_irides_l from '../img/isabel/13_irides-l.png';
import neutral_14_eyelash_r from '../img/isabel/14_eyelash-r.png';
import neutral_09_eyelash_l from '../img/isabel/09_eyelash-l.png';
import neutral_16_eyebrow_r from '../img/isabel/16_eyebrow-r.png';
import neutral_15_eyebrow_l from '../img/isabel/15_eyebrow-l.png';
import neutral_08_nose from '../img/isabel/08_nose.png';
import neutral_07_mouth from '../img/isabel/07_mouth.png';
import neutral_17_front_hair from '../img/isabel/17_front_hair.png';
import happy_00_back_hair from '../img/isabel/expr_happy/00_back_hair.png';
import happy_02_topwear from '../img/isabel/expr_happy/02_topwear.png';
import happy_01_neck from '../img/isabel/expr_happy/01_neck.png';
import happy_06_face from '../img/isabel/expr_happy/06_face.png';
import happy_04_ears_r from '../img/isabel/expr_happy/04_ears-r.png';
import happy_05_ears_l from '../img/isabel/expr_happy/05_ears-l.png';
import happy_03_earwear from '../img/isabel/expr_happy/03_earwear.png';
import happy_08_eyelash_r from '../img/isabel/expr_happy/08_eyelash-r.png';
import happy_09_eyelash_l from '../img/isabel/expr_happy/09_eyelash-l.png';
import happy_11_eyebrow_r from '../img/isabel/expr_happy/11_eyebrow-r.png';
import happy_13_eyebrow_l from '../img/isabel/expr_happy/13_eyebrow-l.png';
import happy_10_nose from '../img/isabel/expr_happy/10_nose.png';
import happy_07_mouth from '../img/isabel/expr_happy/07_mouth.png';
import happy_12_front_hair from '../img/isabel/expr_happy/12_front_hair.png';
import sad_01_back_hair from '../img/isabel/expr_sad/01_back_hair.png';
import sad_03_topwear from '../img/isabel/expr_sad/03_topwear.png';
import sad_02_neck from '../img/isabel/expr_sad/02_neck.png';
import sad_05_face from '../img/isabel/expr_sad/05_face.png';
import sad_06_ears_r from '../img/isabel/expr_sad/06_ears-r.png';
import sad_07_ears_l from '../img/isabel/expr_sad/07_ears-l.png';
import sad_04_earwear from '../img/isabel/expr_sad/04_earwear.png';
import sad_12_eyewhite_r from '../img/isabel/expr_sad/12_eyewhite-r.png';
import sad_13_eyewhite_l from '../img/isabel/expr_sad/13_eyewhite-l.png';
import sad_10_irides_r from '../img/isabel/expr_sad/10_irides-r.png';
import sad_14_irides_l from '../img/isabel/expr_sad/14_irides-l.png';
import sad_09_eyelash_r from '../img/isabel/expr_sad/09_eyelash-r.png';
import sad_15_eyelash_l from '../img/isabel/expr_sad/15_eyelash-l.png';
import sad_17_eyebrow_r from '../img/isabel/expr_sad/17_eyebrow-r.png';
import sad_18_eyebrow_l from '../img/isabel/expr_sad/18_eyebrow-l.png';
import sad_11_nose from '../img/isabel/expr_sad/11_nose.png';
import sad_08_mouth from '../img/isabel/expr_sad/08_mouth.png';
import sad_16_front_hair from '../img/isabel/expr_sad/16_front_hair.png';
import surprised_01_back_hair from '../img/isabel/expr_surprised/01_back_hair.png';
import surprised_02_topwear from '../img/isabel/expr_surprised/02_topwear.png';
import surprised_03_neck from '../img/isabel/expr_surprised/03_neck.png';
import surprised_08_face from '../img/isabel/expr_surprised/08_face.png';
import surprised_06_ears_r from '../img/isabel/expr_surprised/06_ears-r.png';
import surprised_07_ears_l from '../img/isabel/expr_surprised/07_ears-l.png';
import surprised_05_earwear from '../img/isabel/expr_surprised/05_earwear.png';
import surprised_12_eyewhite_r from '../img/isabel/expr_surprised/12_eyewhite-r.png';
import surprised_13_eyewhite_l from '../img/isabel/expr_surprised/13_eyewhite-l.png';
import surprised_16_irides_r from '../img/isabel/expr_surprised/16_irides-r.png';
import surprised_14_irides_l from '../img/isabel/expr_surprised/14_irides-l.png';
import surprised_15_eyelash_r from '../img/isabel/expr_surprised/15_eyelash-r.png';
import surprised_11_eyelash_l from '../img/isabel/expr_surprised/11_eyelash-l.png';
import surprised_17_eyebrow_r from '../img/isabel/expr_surprised/17_eyebrow-r.png';
import surprised_18_eyebrow_l from '../img/isabel/expr_surprised/18_eyebrow-l.png';
import surprised_09_nose from '../img/isabel/expr_surprised/09_nose.png';
import surprised_10_mouth from '../img/isabel/expr_surprised/10_mouth.png';
import surprised_04_front_hair from '../img/isabel/expr_surprised/04_front_hair.png';
import angry_00_back_hair from '../img/isabel/expr_angry/00_back_hair.png';
import angry_02_topwear from '../img/isabel/expr_angry/02_topwear.png';
import angry_01_neck from '../img/isabel/expr_angry/01_neck.png';
import angry_06_face from '../img/isabel/expr_angry/06_face.png';
import angry_04_ears_r from '../img/isabel/expr_angry/04_ears-r.png';
import angry_05_ears_l from '../img/isabel/expr_angry/05_ears-l.png';
import angry_03_earwear from '../img/isabel/expr_angry/03_earwear.png';
import angry_11_eyewhite_r from '../img/isabel/expr_angry/11_eyewhite-r.png';
import angry_12_eyewhite_l from '../img/isabel/expr_angry/12_eyewhite-l.png';
import angry_13_irides_r from '../img/isabel/expr_angry/13_irides-r.png';
import angry_09_irides_l from '../img/isabel/expr_angry/09_irides-l.png';
import angry_15_eyelash_r from '../img/isabel/expr_angry/15_eyelash-r.png';
import angry_10_eyelash_l from '../img/isabel/expr_angry/10_eyelash-l.png';
import angry_17_eyebrow_r from '../img/isabel/expr_angry/17_eyebrow-r.png';
import angry_14_eyebrow_l from '../img/isabel/expr_angry/14_eyebrow-l.png';
import angry_08_nose from '../img/isabel/expr_angry/08_nose.png';
import angry_07_mouth from '../img/isabel/expr_angry/07_mouth.png';
import angry_16_front_hair from '../img/isabel/expr_angry/16_front_hair.png';

const data: CharacterData = {
  name: 'isabel',
  displayName: 'Isabel',
  canvasSize: 1280,
  bgSrc: bg,
  expressions: {
    neutral: [
      [neutral_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
      [neutral_01_topwear, 0, 0, 1280, 1280, '', ''],
      [neutral_02_neck, 0, 0, 1280, 1280, '', ''],
      [neutral_06_face, 461, 202, 329, 426, '', ''],
      [neutral_04_ears_r, 452, 404, 64, 112, '', ''],
      [neutral_05_ears_l, 765, 373, 58, 120, '', ''],
      [neutral_03_earwear, 471, 471, 333, 104, '', ''],
      [neutral_10_eyewhite_r, 510, 395, 76, 37, '', 'eyewhite-r'],
      [neutral_11_eyewhite_l, 667, 380, 81, 39, '', 'eyewhite-l'],
      [neutral_12_irides_r, 530, 395, 45, 35, '', 'irides-r'],
      [neutral_13_irides_l, 687, 380, 43, 37, '', 'irides-l'],
      [neutral_14_eyelash_r, 486, 385, 105, 49, '', 'eyelash-r'],
      [neutral_09_eyelash_l, 663, 370, 102, 49, '', 'eyelash-l'],
      [neutral_16_eyebrow_r, 482, 353, 110, 27, '', 'eyebrow-r'],
      [neutral_15_eyebrow_l, 649, 338, 118, 32, '', 'eyebrow-l'],
      [neutral_08_nose, 604, 432, 50, 76, '', 'nose'],
      [neutral_07_mouth, 585, 523, 105, 48, '', 'mouth'],
      [neutral_17_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
    ],
    happy: [
      [happy_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
      [happy_02_topwear, 0, 0, 1280, 1280, '', ''],
      [happy_01_neck, 0, 0, 1280, 1280, '', ''],
      [happy_06_face, 462, 209, 327, 420, '', ''],
      [happy_04_ears_r, 453, 410, 62, 107, '', ''],
      [happy_05_ears_l, 764, 374, 59, 120, '', ''],
      [happy_03_earwear, 470, 470, 334, 105, '', ''],
      [happy_08_eyelash_r, 503, 409, 90, 32, '', 'eyelash-r'],
      [happy_09_eyelash_l, 661, 392, 91, 34, '', 'eyelash-l'],
      [happy_11_eyebrow_r, 481, 353, 110, 27, '', 'eyebrow-r'],
      [happy_13_eyebrow_l, 649, 338, 120, 29, '', 'eyebrow-l'],
      [happy_10_nose, 608, 439, 47, 69, '', 'nose'],
      [happy_07_mouth, 576, 519, 124, 52, '', 'mouth'],
      [happy_12_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
    ],
    sad: [
      [sad_01_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
      [sad_03_topwear, 0, 0, 1280, 1280, '', ''],
      [sad_02_neck, 0, 0, 1280, 1280, '', ''],
      [sad_05_face, 411, 244, 405, 514, '', ''],
      [sad_06_ears_r, 411, 492, 70, 138, '', ''],
      [sad_07_ears_l, 782, 462, 78, 135, '', ''],
      [sad_04_earwear, 777, 569, 58, 109, '', ''],
      [sad_12_eyewhite_r, 446, 483, 75, 43, '', 'eyewhite-r'],
      [sad_13_eyewhite_l, 611, 467, 94, 45, '', 'eyewhite-l'],
      [sad_10_irides_r, 450, 485, 43, 40, '', 'irides-r'],
      [sad_14_irides_l, 620, 472, 47, 39, '', 'irides-l'],
      [sad_09_eyelash_r, 419, 462, 103, 73, '', 'eyelash-r'],
      [sad_15_eyelash_l, 600, 451, 129, 67, '', 'eyelash-l'],
      [sad_17_eyebrow_r, 415, 409, 99, 54, '', 'eyebrow-r'],
      [sad_18_eyebrow_l, 562, 407, 157, 35, '', 'eyebrow-l'],
      [sad_11_nose, 521, 522, 62, 95, '', 'nose'],
      [sad_08_mouth, 524, 640, 110, 54, '', 'mouth'],
      [sad_16_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
    ],
    surprised: [
      [surprised_01_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
      [surprised_02_topwear, 0, 0, 1280, 1280, '', ''],
      [surprised_03_neck, 0, 0, 1280, 1280, '', ''],
      [surprised_08_face, 424, 213, 415, 570, '', ''],
      [surprised_06_ears_r, 401, 486, 77, 146, '', ''],
      [surprised_07_ears_l, 809, 463, 74, 150, '', ''],
      [surprised_05_earwear, 429, 584, 431, 128, '', ''],
      [surprised_12_eyewhite_r, 484, 461, 97, 61, '', 'eyewhite-r'],
      [surprised_13_eyewhite_l, 690, 451, 98, 63, '', 'eyewhite-l'],
      [surprised_16_irides_r, 513, 467, 50, 55, '', 'irides-r'],
      [surprised_14_irides_l, 709, 458, 51, 54, '', 'irides-l'],
      [surprised_15_eyelash_r, 453, 443, 136, 89, '', 'eyelash-r'],
      [surprised_11_eyelash_l, 683, 434, 134, 84, '', 'eyelash-l'],
      [surprised_17_eyebrow_r, 454, 382, 144, 74, '', 'eyebrow-r'],
      [surprised_18_eyebrow_l, 660, 376, 151, 55, '', 'eyebrow-l'],
      [surprised_09_nose, 604, 524, 74, 90, '', 'nose'],
      [surprised_10_mouth, 582, 637, 120, 56, '', 'mouth'],
      [surprised_04_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
    ],
    angry: [
      [angry_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
      [angry_02_topwear, 0, 0, 1280, 1280, '', ''],
      [angry_01_neck, 0, 0, 1280, 1280, '', ''],
      [angry_06_face, 421, 241, 424, 559, '', ''],
      [angry_04_ears_r, 398, 482, 77, 153, '', ''],
      [angry_05_ears_l, 813, 465, 73, 150, '', ''],
      [angry_03_earwear, 423, 586, 440, 134, '', ''],
      [angry_11_eyewhite_r, 480, 486, 102, 40, '', 'eyewhite-r'],
      [angry_12_eyewhite_l, 691, 476, 106, 42, '', 'eyewhite-l'],
      [angry_13_irides_r, 510, 483, 56, 40, '', 'irides-r'],
      [angry_09_irides_l, 709, 476, 58, 40, '', 'irides-l'],
      [angry_15_eyelash_r, 452, 470, 141, 65, '', 'eyelash-r'],
      [angry_10_eyelash_l, 680, 462, 138, 63, '', 'eyelash-l'],
      [angry_17_eyebrow_r, 445, 440, 176, 60, '', 'eyebrow-r'],
      [angry_14_eyebrow_l, 659, 432, 170, 60, '', 'eyebrow-l'],
      [angry_08_nose, 602, 552, 68, 95, '', 'nose'],
      [angry_07_mouth, 575, 673, 136, 57, '', 'mouth'],
      [angry_16_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
    ],
  },
};

export default data;
