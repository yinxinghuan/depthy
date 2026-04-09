import type { CharacterData } from '../types';

import bg from '../img/algram/bg.png';
import neutral_00_topwear from '../img/algram/00_topwear.png';
import neutral_01_neck from '../img/algram/01_neck.png';
import neutral_04_face from '../img/algram/04_face.png';
import neutral_03_ears_r from '../img/algram/03_ears-r.png';
import neutral_02_ears_l from '../img/algram/02_ears-l.png';
import neutral_07_eyewhite_r from '../img/algram/07_eyewhite-r.png';
import neutral_08_eyewhite_l from '../img/algram/08_eyewhite-l.png';
import neutral_10_irides_r from '../img/algram/10_irides-r.png';
import neutral_12_irides_l from '../img/algram/12_irides-l.png';
import neutral_09_eyelash_r from '../img/algram/09_eyelash-r.png';
import neutral_11_eyelash_l from '../img/algram/11_eyelash-l.png';
import neutral_14_eyebrow_r from '../img/algram/14_eyebrow-r.png';
import neutral_13_eyebrow_l from '../img/algram/13_eyebrow-l.png';
import neutral_06_nose from '../img/algram/06_nose.png';
import neutral_05_mouth from '../img/algram/05_mouth.png';
import neutral_15_front_hair from '../img/algram/15_front_hair.png';
import happy_01_topwear from '../img/algram/expr_happy/01_topwear.png';
import happy_02_neck from '../img/algram/expr_happy/02_neck.png';
import happy_17_handwear_r from '../img/algram/expr_happy/17_handwear-r.png';
import happy_00_handwear_l from '../img/algram/expr_happy/00_handwear-l.png';
import happy_07_face from '../img/algram/expr_happy/07_face.png';
import happy_06_ears_r from '../img/algram/expr_happy/06_ears-r.png';
import happy_05_ears_l from '../img/algram/expr_happy/05_ears-l.png';
import happy_10_eyewhite_r from '../img/algram/expr_happy/10_eyewhite-r.png';
import happy_11_eyewhite_l from '../img/algram/expr_happy/11_eyewhite-l.png';
import happy_12_irides_r from '../img/algram/expr_happy/12_irides-r.png';
import happy_13_irides_l from '../img/algram/expr_happy/13_irides-l.png';
import happy_03_eyelash_r from '../img/algram/expr_happy/03_eyelash-r.png';
import happy_04_eyelash_l from '../img/algram/expr_happy/04_eyelash-l.png';
import happy_16_eyebrow_r from '../img/algram/expr_happy/16_eyebrow-r.png';
import happy_14_eyebrow_l from '../img/algram/expr_happy/14_eyebrow-l.png';
import happy_09_nose from '../img/algram/expr_happy/09_nose.png';
import happy_08_mouth from '../img/algram/expr_happy/08_mouth.png';
import happy_15_front_hair from '../img/algram/expr_happy/15_front_hair.png';
import sad_01_topwear from '../img/algram/expr_sad/01_topwear.png';
import sad_03_neck from '../img/algram/expr_sad/03_neck.png';
import sad_00_handwear_r from '../img/algram/expr_sad/00_handwear-r.png';
import sad_02_handwear_l from '../img/algram/expr_sad/02_handwear-l.png';
import sad_06_face from '../img/algram/expr_sad/06_face.png';
import sad_04_ears_r from '../img/algram/expr_sad/04_ears-r.png';
import sad_05_ears_l from '../img/algram/expr_sad/05_ears-l.png';
import sad_09_eyewhite_r from '../img/algram/expr_sad/09_eyewhite-r.png';
import sad_10_eyewhite_l from '../img/algram/expr_sad/10_eyewhite-l.png';
import sad_12_irides_r from '../img/algram/expr_sad/12_irides-r.png';
import sad_14_irides_l from '../img/algram/expr_sad/14_irides-l.png';
import sad_11_eyelash_r from '../img/algram/expr_sad/11_eyelash-r.png';
import sad_13_eyelash_l from '../img/algram/expr_sad/13_eyelash-l.png';
import sad_17_eyebrow_r from '../img/algram/expr_sad/17_eyebrow-r.png';
import sad_16_eyebrow_l from '../img/algram/expr_sad/16_eyebrow-l.png';
import sad_08_nose from '../img/algram/expr_sad/08_nose.png';
import sad_07_mouth from '../img/algram/expr_sad/07_mouth.png';
import sad_15_front_hair from '../img/algram/expr_sad/15_front_hair.png';
import surprised_00_topwear from '../img/algram/expr_surprised/00_topwear.png';
import surprised_01_neck from '../img/algram/expr_surprised/01_neck.png';
import surprised_04_face from '../img/algram/expr_surprised/04_face.png';
import surprised_02_ears_r from '../img/algram/expr_surprised/02_ears-r.png';
import surprised_03_ears_l from '../img/algram/expr_surprised/03_ears-l.png';
import surprised_07_eyewhite_r from '../img/algram/expr_surprised/07_eyewhite-r.png';
import surprised_08_eyewhite_l from '../img/algram/expr_surprised/08_eyewhite-l.png';
import surprised_10_irides_r from '../img/algram/expr_surprised/10_irides-r.png';
import surprised_12_irides_l from '../img/algram/expr_surprised/12_irides-l.png';
import surprised_09_eyelash_r from '../img/algram/expr_surprised/09_eyelash-r.png';
import surprised_11_eyelash_l from '../img/algram/expr_surprised/11_eyelash-l.png';
import surprised_15_eyebrow_r from '../img/algram/expr_surprised/15_eyebrow-r.png';
import surprised_13_eyebrow_l from '../img/algram/expr_surprised/13_eyebrow-l.png';
import surprised_06_nose from '../img/algram/expr_surprised/06_nose.png';
import surprised_05_mouth from '../img/algram/expr_surprised/05_mouth.png';
import surprised_14_front_hair from '../img/algram/expr_surprised/14_front_hair.png';
import angry_01_topwear from '../img/algram/expr_angry/01_topwear.png';
import angry_02_neck from '../img/algram/expr_angry/02_neck.png';
import angry_03_handwear_r from '../img/algram/expr_angry/03_handwear-r.png';
import angry_00_handwear_l from '../img/algram/expr_angry/00_handwear-l.png';
import angry_06_face from '../img/algram/expr_angry/06_face.png';
import angry_04_ears_r from '../img/algram/expr_angry/04_ears-r.png';
import angry_05_ears_l from '../img/algram/expr_angry/05_ears-l.png';
import angry_09_eyewhite_r from '../img/algram/expr_angry/09_eyewhite-r.png';
import angry_10_eyewhite_l from '../img/algram/expr_angry/10_eyewhite-l.png';
import angry_11_irides_r from '../img/algram/expr_angry/11_irides-r.png';
import angry_12_irides_l from '../img/algram/expr_angry/12_irides-l.png';
import angry_14_eyelash_r from '../img/algram/expr_angry/14_eyelash-r.png';
import angry_13_eyelash_l from '../img/algram/expr_angry/13_eyelash-l.png';
import angry_16_eyebrow_r from '../img/algram/expr_angry/16_eyebrow-r.png';
import angry_15_eyebrow_l from '../img/algram/expr_angry/15_eyebrow-l.png';
import angry_07_nose from '../img/algram/expr_angry/07_nose.png';
import angry_08_mouth from '../img/algram/expr_angry/08_mouth.png';
import angry_17_front_hair from '../img/algram/expr_angry/17_front_hair.png';

const data: CharacterData = {
  name: 'algram',
  displayName: 'Algram',
  canvasSize: 1280,
  bgSrc: bg,
  expressions: {
    neutral: [
      [neutral_00_topwear, 0, 0, 1280, 1280, '', ''],
      [neutral_01_neck, 0, 0, 1280, 1280, '', ''],
      [neutral_04_face, 0, 0, 1280, 1280, '', ''],
      [neutral_03_ears_r, 381, 517, 93, 155, '', ''],
      [neutral_02_ears_l, 807, 502, 85, 155, '', ''],
      [neutral_07_eyewhite_r, 479, 499, 101, 52, '', 'eyewhite-r'],
      [neutral_08_eyewhite_l, 694, 491, 98, 52, '', 'eyewhite-l'],
      [neutral_10_irides_r, 512, 500, 51, 51, '', 'irides-r'],
      [neutral_12_irides_l, 710, 491, 52, 53, '', 'irides-l'],
      [neutral_09_eyelash_r, 470, 474, 116, 76, '', 'eyelash-r'],
      [neutral_11_eyelash_l, 684, 466, 119, 71, '', 'eyelash-l'],
      [neutral_14_eyebrow_r, 455, 449, 146, 30, '', 'eyebrow-r'],
      [neutral_13_eyebrow_l, 667, 438, 145, 36, '', 'eyebrow-l'],
      [neutral_06_nose, 0, 0, 1280, 1280, '', 'nose'],
      [neutral_05_mouth, 0, 0, 1280, 1280, '', 'mouth'],
      [neutral_15_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
    ],
    happy: [
      [happy_01_topwear, 0, 0, 1280, 1280, '', ''],
      [happy_02_neck, 0, 0, 1280, 1280, '', ''],
      [happy_17_handwear_r, 121, 829, 346, 381, 'mr-handwear', ''],
      [happy_00_handwear_l, 1267, 1265, 5, 6, 'mr-handwear', ''],
      [happy_07_face, 0, 0, 1280, 1280, '', ''],
      [happy_06_ears_r, 381, 517, 92, 155, '', ''],
      [happy_05_ears_l, 807, 503, 85, 154, '', ''],
      [happy_10_eyewhite_r, 482, 486, 98, 79, '', 'eyewhite-r'],
      [happy_11_eyewhite_l, 691, 477, 97, 77, '', 'eyewhite-l'],
      [happy_12_irides_r, 512, 502, 54, 62, '', 'irides-r'],
      [happy_13_irides_l, 708, 494, 53, 61, '', 'irides-l'],
      [happy_03_eyelash_r, 560, 1007, 34, 203, '', 'eyelash-r'],
      [happy_04_eyelash_l, 689, 1009, 34, 201, '', 'eyelash-l'],
      [happy_16_eyebrow_r, 455, 421, 144, 53, '', 'eyebrow-r'],
      [happy_14_eyebrow_l, 666, 407, 144, 48, '', 'eyebrow-l'],
      [happy_09_nose, 0, 0, 1280, 1280, '', 'nose'],
      [happy_08_mouth, 0, 0, 1280, 1280, '', 'mouth'],
      [happy_15_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
    ],
    sad: [
      [sad_01_topwear, 0, 0, 1280, 1280, '', ''],
      [sad_03_neck, 0, 0, 1280, 1280, '', ''],
      [sad_00_handwear_r, 70, 857, 150, 353, 'mr-handwear', ''],
      [sad_02_handwear_l, 69, 234, 439, 609, 'mr-handwear', ''],
      [sad_06_face, 0, 0, 1280, 1280, '', ''],
      [sad_04_ears_r, 379, 531, 97, 156, '', ''],
      [sad_05_ears_l, 813, 502, 78, 159, '', ''],
      [sad_09_eyewhite_r, 493, 527, 93, 43, '', 'eyewhite-r'],
      [sad_10_eyewhite_l, 699, 510, 95, 39, '', 'eyewhite-l'],
      [sad_12_irides_r, 527, 524, 50, 42, '', 'irides-r'],
      [sad_14_irides_l, 718, 509, 51, 39, '', 'irides-l'],
      [sad_11_eyelash_r, 480, 501, 111, 64, '', 'eyelash-r'],
      [sad_13_eyelash_l, 692, 493, 114, 47, '', 'eyelash-l'],
      [sad_17_eyebrow_r, 468, 446, 138, 69, '', 'eyebrow-r'],
      [sad_16_eyebrow_l, 663, 440, 148, 43, '', 'eyebrow-l'],
      [sad_08_nose, 0, 0, 1280, 1280, '', 'nose'],
      [sad_07_mouth, 0, 0, 1280, 1280, '', 'mouth'],
      [sad_15_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
    ],
    surprised: [
      [surprised_00_topwear, 0, 0, 1280, 1280, '', ''],
      [surprised_01_neck, 0, 0, 1280, 1280, '', ''],
      [surprised_04_face, 0, 0, 1280, 1280, '', ''],
      [surprised_02_ears_r, 383, 536, 90, 159, '', ''],
      [surprised_03_ears_l, 812, 507, 80, 165, '', ''],
      [surprised_07_eyewhite_r, 486, 512, 99, 78, '', 'eyewhite-r'],
      [surprised_08_eyewhite_l, 692, 502, 99, 78, '', 'eyewhite-l'],
      [surprised_10_irides_r, 518, 535, 51, 54, '', 'irides-r'],
      [surprised_12_irides_l, 708, 525, 50, 54, '', 'irides-l'],
      [surprised_09_eyelash_r, 475, 488, 112, 105, '', 'eyelash-r'],
      [surprised_11_eyelash_l, 685, 482, 117, 79, '', 'eyelash-l'],
      [surprised_15_eyebrow_r, 459, 436, 144, 77, '', 'eyebrow-r'],
      [surprised_13_eyebrow_l, 659, 433, 154, 59, '', 'eyebrow-l'],
      [surprised_06_nose, 0, 0, 1280, 1280, '', 'nose'],
      [surprised_05_mouth, 0, 0, 1280, 1280, '', 'mouth'],
      [surprised_14_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
    ],
    angry: [
      [angry_01_topwear, 0, 0, 1280, 1280, '', ''],
      [angry_02_neck, 0, 0, 1280, 1280, '', ''],
      [angry_03_handwear_r, 99, 907, 365, 303, 'mr-handwear', ''],
      [angry_00_handwear_l, 1267, 1265, 5, 6, 'mr-handwear', ''],
      [angry_06_face, 0, 0, 1280, 1280, '', ''],
      [angry_04_ears_r, 381, 517, 91, 156, '', ''],
      [angry_05_ears_l, 809, 502, 83, 155, '', ''],
      [angry_09_eyewhite_r, 484, 517, 100, 51, '', 'eyewhite-r'],
      [angry_10_eyewhite_l, 692, 508, 96, 54, '', 'eyewhite-l'],
      [angry_11_irides_r, 515, 518, 50, 45, '', 'irides-r'],
      [angry_12_irides_l, 709, 513, 50, 45, '', 'irides-l'],
      [angry_14_eyelash_r, 470, 505, 123, 65, '', 'eyelash-r'],
      [angry_13_eyelash_l, 684, 498, 119, 66, '', 'eyelash-l'],
      [angry_16_eyebrow_r, 462, 468, 160, 83, '', 'eyebrow-r'],
      [angry_15_eyebrow_l, 658, 465, 154, 85, '', 'eyebrow-l'],
      [angry_07_nose, 0, 0, 1280, 1280, '', 'nose'],
      [angry_08_mouth, 0, 0, 1280, 1280, '', 'mouth'],
      [angry_17_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
    ],
  },
};

export default data;
