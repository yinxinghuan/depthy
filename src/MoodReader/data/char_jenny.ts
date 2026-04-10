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
  canvasSize: 640,
  bgSrc: bg,
  expressions: {
    neutral: [
      [neutral_00_back_hair, 0, 0, 640, 640, 'mr-back-hair', ''],
      [neutral_01_topwear, 0, 0, 640, 640, '', ''],
      [neutral_02_neck, 0, 0, 640, 640, '', ''],
      [neutral_05_face, 0, 0, 640, 640, '', ''],
      [neutral_04_ears_r, 176, 253, 52, 80, '', ''],
      [neutral_03_ears_l, 414, 253, 54, 80, '', ''],
      [neutral_08_eyewhite_r, 227, 240, 61, 38, '', 'eyewhite-r'],
      [neutral_09_eyewhite_l, 354, 240, 60, 38, '', 'eyewhite-l'],
      [neutral_10_irides_r, 242, 241, 38, 38, '', 'irides-r'],
      [neutral_13_irides_l, 362, 241, 38, 38, '', 'irides-l'],
      [neutral_11_eyelash_r, 214, 232, 78, 44, '', 'eyelash-r'],
      [neutral_15_eyelash_l, 349, 232, 79, 43, '', 'eyelash-l'],
      [neutral_12_eyebrow_r, 222, 206, 75, 16, '', 'eyebrow-r'],
      [neutral_14_eyebrow_l, 344, 206, 78, 17, '', 'eyebrow-l'],
      [neutral_06_nose, 0, 0, 640, 640, '', 'nose'],
      [neutral_07_mouth, 0, 0, 640, 640, '', 'mouth'],
      [neutral_16_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
      [neutral_17_eyewear, 0, 0, 640, 640, 'mr-eyewear', ''],
    ],
    happy: [
      [happy_00_back_hair, 0, 0, 640, 640, 'mr-back-hair', ''],
      [happy_01_topwear, 0, 0, 640, 640, '', ''],
      [happy_02_neck, 0, 0, 640, 640, '', ''],
      [happy_05_face, 200, 106, 244, 316, '', ''],
      [happy_04_ears_r, 182, 252, 46, 81, '', ''],
      [happy_03_ears_l, 416, 252, 48, 80, '', ''],
      [happy_08_eyewhite_r, 228, 242, 60, 36, '', 'eyewhite-r'],
      [happy_09_eyewhite_l, 354, 241, 60, 36, '', 'eyewhite-l'],
      [happy_10_irides_r, 242, 240, 40, 38, '', 'irides-r'],
      [happy_14_irides_l, 362, 240, 38, 40, '', 'irides-l'],
      [happy_11_eyelash_r, 213, 232, 80, 49, '', 'eyelash-r'],
      [happy_12_eyelash_l, 348, 232, 80, 50, '', 'eyelash-l'],
      [happy_13_eyebrow_r, 218, 206, 78, 17, '', 'eyebrow-r'],
      [happy_15_eyebrow_l, 344, 206, 78, 17, '', 'eyebrow-l'],
      [happy_07_nose, 304, 284, 37, 46, '', 'nose'],
      [happy_06_mouth, 268, 335, 108, 50, '', 'mouth'],
      [happy_16_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
      [happy_17_eyewear, 192, 219, 256, 95, 'mr-eyewear', ''],
    ],
    sad: [
      [sad_00_back_hair, 0, 0, 640, 640, 'mr-back-hair', ''],
      [sad_01_topwear, 62, 411, 578, 229, '', ''],
      [sad_02_neck, 0, 0, 640, 640, '', ''],
      [sad_05_face, 0, 0, 640, 640, '', ''],
      [sad_04_ears_r, 182, 255, 46, 79, '', ''],
      [sad_03_ears_l, 414, 255, 48, 79, '', ''],
      [sad_08_eyewhite_r, 229, 270, 62, 26, '', 'eyewhite-r'],
      [sad_09_eyewhite_l, 354, 270, 60, 26, '', 'eyewhite-l'],
      [sad_10_irides_r, 246, 270, 38, 24, '', 'irides-r'],
      [sad_11_irides_l, 361, 270, 38, 24, '', 'irides-l'],
      [sad_12_eyelash_r, 216, 262, 78, 27, '', 'eyelash-r'],
      [sad_13_eyelash_l, 350, 262, 77, 26, '', 'eyelash-l'],
      [sad_15_eyebrow_r, 221, 226, 84, 22, '', 'eyebrow-r'],
      [sad_14_eyebrow_l, 340, 228, 83, 18, '', 'eyebrow-l'],
      [sad_06_nose, 0, 0, 640, 640, '', 'nose'],
      [sad_07_mouth, 0, 0, 640, 640, '', 'mouth'],
      [sad_16_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
      [sad_17_eyewear, 0, 0, 640, 640, 'mr-eyewear', ''],
    ],
    surprised: [
      [surprised_00_back_hair, 0, 0, 640, 640, 'mr-back-hair', ''],
      [surprised_02_topwear, 0, 0, 640, 640, '', ''],
      [surprised_01_neck, 0, 0, 640, 640, '', ''],
      [surprised_05_face, 0, 0, 640, 640, '', ''],
      [surprised_04_ears_r, 176, 254, 52, 80, '', ''],
      [surprised_03_ears_l, 414, 253, 54, 80, '', ''],
      [surprised_08_eyewhite_r, 228, 236, 60, 45, '', 'eyewhite-r'],
      [surprised_09_eyewhite_l, 354, 237, 60, 46, '', 'eyewhite-l'],
      [surprised_10_irides_r, 243, 242, 36, 41, '', 'irides-r'],
      [surprised_13_irides_l, 362, 242, 36, 41, '', 'irides-l'],
      [surprised_11_eyelash_r, 214, 226, 79, 60, '', 'eyelash-r'],
      [surprised_12_eyelash_l, 352, 226, 76, 62, '', 'eyelash-l'],
      [surprised_14_eyebrow_r, 226, 182, 70, 42, '', 'eyebrow-r'],
      [surprised_15_eyebrow_l, 348, 180, 71, 42, '', 'eyebrow-l'],
      [surprised_07_nose, 0, 0, 640, 640, '', 'nose'],
      [surprised_06_mouth, 300, 0, 340, 640, '', 'mouth'],
      [surprised_16_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
      [surprised_17_eyewear, 0, 0, 640, 640, 'mr-eyewear', ''],
    ],
    angry: [
      [angry_00_back_hair, 0, 0, 640, 640, 'mr-back-hair', ''],
      [angry_01_topwear, 0, 0, 640, 640, '', ''],
      [angry_02_neck, 0, 0, 640, 640, '', ''],
      [angry_05_face, 0, 0, 640, 640, '', ''],
      [angry_04_ears_r, 176, 251, 50, 82, '', ''],
      [angry_03_ears_l, 418, 252, 50, 81, '', ''],
      [angry_08_eyewhite_r, 227, 242, 61, 36, '', 'eyewhite-r'],
      [angry_09_eyewhite_l, 354, 243, 60, 35, '', 'eyewhite-l'],
      [angry_10_irides_r, 242, 242, 38, 38, '', 'irides-r'],
      [angry_13_irides_l, 362, 242, 38, 38, '', 'irides-l'],
      [angry_11_eyelash_r, 214, 232, 78, 50, '', 'eyelash-r'],
      [angry_14_eyelash_l, 349, 232, 79, 50, '', 'eyelash-l'],
      [angry_12_eyebrow_r, 230, 212, 71, 23, '', 'eyebrow-r'],
      [angry_15_eyebrow_l, 346, 210, 66, 22, '', 'eyebrow-l'],
      [angry_07_nose, 0, 0, 640, 640, '', 'nose'],
      [angry_06_mouth, 292, 0, 348, 640, '', 'mouth'],
      [angry_16_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
      [angry_17_eyewear, 0, 0, 640, 640, 'mr-eyewear', ''],
    ],
  },
};

export default data;
