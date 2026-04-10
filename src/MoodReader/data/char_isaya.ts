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
  canvasSize: 640,
  bgSrc: bg,
  expressions: {
    neutral: [
      [neutral_00_back_hair, 0, 0, 640, 640, 'mr-back-hair', ''],
      [neutral_03_topwear, 0, 0, 640, 640, '', ''],
      [neutral_01_neck, 0, 0, 640, 640, '', ''],
      [neutral_06_face, 0, 0, 640, 640, '', ''],
      [neutral_05_ears_r, 206, 257, 44, 70, '', ''],
      [neutral_04_ears_l, 390, 255, 46, 71, '', ''],
      [neutral_09_eyewhite_r, 240, 266, 52, 21, '', 'eyewhite-r'],
      [neutral_10_eyewhite_l, 350, 264, 52, 21, '', 'eyewhite-l'],
      [neutral_12_irides_r, 254, 266, 33, 21, '', 'irides-r'],
      [neutral_15_irides_l, 360, 264, 33, 21, '', 'irides-l'],
      [neutral_11_eyelash_r, 234, 256, 62, 32, '', 'eyelash-r'],
      [neutral_13_eyelash_l, 347, 256, 64, 31, '', 'eyelash-l'],
      [neutral_14_eyebrow_r, 234, 238, 64, 8, '', 'eyebrow-r'],
      [neutral_16_eyebrow_l, 340, 238, 69, 15, '', 'eyebrow-l'],
      [neutral_07_nose, 0, 0, 640, 640, '', 'nose'],
      [neutral_08_mouth, 0, 0, 640, 640, '', 'mouth'],
      [neutral_17_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
      [neutral_02_headwear, 0, 0, 640, 640, 'mr-headwear', ''],
    ],
    happy: [
      [happy_00_back_hair, 0, 0, 640, 640, 'mr-back-hair', ''],
      [happy_02_topwear, 0, 0, 640, 640, '', ''],
      [happy_01_neck, 0, 0, 640, 640, '', ''],
      [happy_03_face, 0, 0, 640, 640, '', ''],
      [happy_05_ears_r, 196, 269, 50, 68, '', ''],
      [happy_06_ears_l, 398, 226, 48, 78, '', ''],
      [happy_09_eyelash_r, 228, 256, 60, 31, '', 'eyelash-r'],
      [happy_10_eyelash_l, 336, 234, 62, 24, '', 'eyelash-l'],
      [happy_11_eyebrow_r, 223, 226, 58, 26, '', 'eyebrow-r'],
      [happy_12_eyebrow_l, 325, 206, 62, 14, '', 'eyebrow-l'],
      [happy_08_nose, 0, 0, 640, 640, '', 'nose'],
      [happy_07_mouth, 0, 0, 640, 640, '', 'mouth'],
      [happy_13_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
      [happy_04_headwear, 0, 0, 640, 640, 'mr-headwear', ''],
    ],
    sad: [
      [sad_00_back_hair, 0, 0, 640, 640, 'mr-back-hair', ''],
      [sad_02_topwear, 0, 0, 640, 640, '', ''],
      [sad_01_neck, 0, 0, 640, 640, '', ''],
      [sad_06_face, 0, 0, 640, 640, '', ''],
      [sad_04_ears_r, 208, 256, 39, 64, '', ''],
      [sad_03_ears_l, 399, 256, 37, 64, '', ''],
      [sad_11_eyewhite_r, 243, 268, 50, 20, '', 'eyewhite-r'],
      [sad_12_eyewhite_l, 351, 268, 50, 20, '', 'eyewhite-l'],
      [sad_10_irides_r, 254, 269, 34, 16, '', 'irides-r'],
      [sad_14_irides_l, 358, 268, 33, 16, '', 'irides-l'],
      [sad_09_eyelash_r, 234, 258, 63, 34, '', 'eyelash-r'],
      [sad_13_eyelash_l, 347, 256, 60, 35, '', 'eyelash-l'],
      [sad_15_eyebrow_r, 239, 234, 65, 14, '', 'eyebrow-r'],
      [sad_16_eyebrow_l, 337, 234, 68, 14, '', 'eyebrow-l'],
      [sad_08_nose, 0, 0, 640, 640, '', 'nose'],
      [sad_07_mouth, 0, 0, 640, 640, '', 'mouth'],
      [sad_17_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
      [sad_05_headwear, 0, 0, 640, 640, 'mr-headwear', ''],
    ],
    surprised: [
      [surprised_00_back_hair, 0, 0, 640, 640, 'mr-back-hair', ''],
      [surprised_02_topwear, 0, 0, 640, 640, '', ''],
      [surprised_01_neck, 0, 0, 640, 640, '', ''],
      [surprised_06_face, 0, 0, 640, 640, '', ''],
      [surprised_03_ears_r, 199, 256, 51, 70, '', ''],
      [surprised_04_ears_l, 398, 239, 49, 72, '', ''],
      [surprised_09_eyewhite_r, 240, 234, 52, 40, '', 'eyewhite-r'],
      [surprised_10_eyewhite_l, 346, 229, 53, 39, '', 'eyewhite-l'],
      [surprised_13_irides_r, 254, 238, 30, 32, '', 'irides-r'],
      [surprised_12_irides_l, 356, 233, 30, 32, '', 'irides-l'],
      [surprised_14_eyelash_r, 229, 225, 64, 52, '', 'eyelash-r'],
      [surprised_11_eyelash_l, 344, 220, 65, 50, '', 'eyelash-l'],
      [surprised_15_eyebrow_r, 228, 206, 75, 20, '', 'eyebrow-r'],
      [surprised_16_eyebrow_l, 327, 204, 77, 14, '', 'eyebrow-l'],
      [surprised_07_nose, 0, 0, 640, 640, '', 'nose'],
      [surprised_08_mouth, 0, 0, 640, 640, '', 'mouth'],
      [surprised_17_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
      [surprised_05_headwear, 0, 0, 640, 640, 'mr-headwear', ''],
    ],
    angry: [
      [angry_00_back_hair, 0, 0, 640, 640, 'mr-back-hair', ''],
      [angry_02_topwear, 0, 0, 640, 640, '', ''],
      [angry_01_neck, 0, 0, 640, 640, '', ''],
      [angry_05_face, 0, 0, 640, 640, '', ''],
      [angry_04_ears_r, 200, 259, 51, 74, '', ''],
      [angry_03_ears_l, 394, 260, 49, 73, '', ''],
      [angry_09_eyewhite_r, 242, 268, 52, 19, '', 'eyewhite-r'],
      [angry_10_eyewhite_l, 351, 268, 52, 20, '', 'eyewhite-l'],
      [angry_11_irides_r, 256, 266, 31, 21, '', 'irides-r'],
      [angry_14_irides_l, 358, 266, 31, 21, '', 'irides-l'],
      [angry_12_eyelash_r, 230, 259, 72, 34, '', 'eyelash-r'],
      [angry_13_eyelash_l, 344, 260, 70, 34, '', 'eyelash-l'],
      [angry_15_eyebrow_r, 239, 241, 76, 34, '', 'eyebrow-r'],
      [angry_16_eyebrow_l, 334, 242, 74, 34, '', 'eyebrow-l'],
      [angry_07_nose, 0, 0, 640, 640, '', 'nose'],
      [angry_06_mouth, 0, 0, 640, 640, '', 'mouth'],
      [angry_17_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
      [angry_08_headwear, 0, 0, 640, 640, 'mr-headwear', ''],
    ],
  },
};

export default data;
