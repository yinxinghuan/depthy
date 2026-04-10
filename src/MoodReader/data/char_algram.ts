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
  canvasSize: 640,
  bgSrc: bg,
  expressions: {
    neutral: [
      [neutral_00_topwear, 0, 0, 640, 640, '', ''],
      [neutral_01_neck, 0, 0, 640, 640, '', ''],
      [neutral_04_face, 0, 0, 640, 640, '', ''],
      [neutral_03_ears_r, 190, 258, 46, 78, '', ''],
      [neutral_02_ears_l, 404, 251, 42, 78, '', ''],
      [neutral_07_eyewhite_r, 240, 250, 50, 26, '', 'eyewhite-r'],
      [neutral_08_eyewhite_l, 347, 246, 49, 26, '', 'eyewhite-l'],
      [neutral_10_irides_r, 256, 250, 26, 26, '', 'irides-r'],
      [neutral_12_irides_l, 355, 246, 26, 26, '', 'irides-l'],
      [neutral_09_eyelash_r, 235, 237, 58, 38, '', 'eyelash-r'],
      [neutral_11_eyelash_l, 342, 233, 60, 36, '', 'eyelash-l'],
      [neutral_14_eyebrow_r, 228, 224, 73, 15, '', 'eyebrow-r'],
      [neutral_13_eyebrow_l, 334, 219, 72, 18, '', 'eyebrow-l'],
      [neutral_06_nose, 0, 0, 640, 640, '', 'nose'],
      [neutral_05_mouth, 0, 0, 640, 640, '', 'mouth'],
      [neutral_15_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
    ],
    happy: [
      [happy_01_topwear, 0, 0, 640, 640, '', ''],
      [happy_02_neck, 0, 0, 640, 640, '', ''],
      [happy_17_handwear_r, 60, 414, 173, 190, 'mr-handwear', ''],
      [happy_07_face, 0, 0, 640, 640, '', ''],
      [happy_06_ears_r, 190, 258, 46, 78, '', ''],
      [happy_05_ears_l, 404, 252, 42, 77, '', ''],
      [happy_10_eyewhite_r, 241, 243, 49, 40, '', 'eyewhite-r'],
      [happy_11_eyewhite_l, 346, 238, 48, 38, '', 'eyewhite-l'],
      [happy_12_irides_r, 256, 251, 27, 31, '', 'irides-r'],
      [happy_13_irides_l, 354, 247, 26, 30, '', 'irides-l'],
      [happy_03_eyelash_r, 280, 504, 17, 102, '', 'eyelash-r'],
      [happy_04_eyelash_l, 344, 504, 17, 100, '', 'eyelash-l'],
      [happy_16_eyebrow_r, 228, 210, 72, 26, '', 'eyebrow-r'],
      [happy_14_eyebrow_l, 333, 204, 72, 24, '', 'eyebrow-l'],
      [happy_09_nose, 0, 0, 640, 640, '', 'nose'],
      [happy_08_mouth, 0, 0, 640, 640, '', 'mouth'],
      [happy_15_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
    ],
    sad: [
      [sad_01_topwear, 0, 0, 640, 640, '', ''],
      [sad_03_neck, 0, 0, 640, 640, '', ''],
      [sad_00_handwear_r, 35, 428, 75, 176, 'mr-handwear', ''],
      [sad_02_handwear_l, 34, 117, 220, 304, 'mr-handwear', ''],
      [sad_06_face, 0, 0, 640, 640, '', ''],
      [sad_04_ears_r, 190, 266, 48, 78, '', ''],
      [sad_05_ears_l, 406, 251, 39, 80, '', ''],
      [sad_09_eyewhite_r, 246, 264, 46, 22, '', 'eyewhite-r'],
      [sad_10_eyewhite_l, 350, 255, 48, 20, '', 'eyewhite-l'],
      [sad_12_irides_r, 264, 262, 25, 21, '', 'irides-r'],
      [sad_14_irides_l, 359, 254, 26, 20, '', 'irides-l'],
      [sad_11_eyelash_r, 240, 250, 56, 32, '', 'eyelash-r'],
      [sad_13_eyelash_l, 346, 246, 57, 24, '', 'eyelash-l'],
      [sad_17_eyebrow_r, 234, 223, 69, 34, '', 'eyebrow-r'],
      [sad_16_eyebrow_l, 332, 220, 74, 22, '', 'eyebrow-l'],
      [sad_08_nose, 0, 0, 640, 640, '', 'nose'],
      [sad_07_mouth, 0, 0, 640, 640, '', 'mouth'],
      [sad_15_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
    ],
    surprised: [
      [surprised_00_topwear, 0, 0, 640, 640, '', ''],
      [surprised_01_neck, 0, 0, 640, 640, '', ''],
      [surprised_04_face, 0, 0, 640, 640, '', ''],
      [surprised_02_ears_r, 192, 268, 45, 80, '', ''],
      [surprised_03_ears_l, 406, 254, 40, 82, '', ''],
      [surprised_07_eyewhite_r, 243, 256, 50, 39, '', 'eyewhite-r'],
      [surprised_08_eyewhite_l, 346, 251, 50, 39, '', 'eyewhite-l'],
      [surprised_10_irides_r, 259, 268, 26, 27, '', 'irides-r'],
      [surprised_12_irides_l, 354, 262, 25, 27, '', 'irides-l'],
      [surprised_09_eyelash_r, 238, 244, 56, 52, '', 'eyelash-r'],
      [surprised_11_eyelash_l, 342, 241, 58, 40, '', 'eyelash-l'],
      [surprised_15_eyebrow_r, 230, 218, 72, 38, '', 'eyebrow-r'],
      [surprised_13_eyebrow_l, 330, 216, 77, 30, '', 'eyebrow-l'],
      [surprised_06_nose, 0, 0, 640, 640, '', 'nose'],
      [surprised_05_mouth, 0, 0, 640, 640, '', 'mouth'],
      [surprised_14_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
    ],
    angry: [
      [angry_01_topwear, 0, 0, 640, 640, '', ''],
      [angry_02_neck, 0, 0, 640, 640, '', ''],
      [angry_03_handwear_r, 50, 454, 182, 152, 'mr-handwear', ''],
      [angry_06_face, 0, 0, 640, 640, '', ''],
      [angry_04_ears_r, 190, 258, 46, 78, '', ''],
      [angry_05_ears_l, 404, 251, 42, 78, '', ''],
      [angry_09_eyewhite_r, 242, 258, 50, 26, '', 'eyewhite-r'],
      [angry_10_eyewhite_l, 346, 254, 48, 27, '', 'eyewhite-l'],
      [angry_11_irides_r, 258, 259, 25, 22, '', 'irides-r'],
      [angry_12_irides_l, 354, 256, 25, 22, '', 'irides-l'],
      [angry_14_eyelash_r, 235, 252, 62, 32, '', 'eyelash-r'],
      [angry_13_eyelash_l, 342, 249, 60, 33, '', 'eyelash-l'],
      [angry_16_eyebrow_r, 231, 234, 80, 42, '', 'eyebrow-r'],
      [angry_15_eyebrow_l, 329, 232, 77, 42, '', 'eyebrow-l'],
      [angry_07_nose, 0, 0, 640, 640, '', 'nose'],
      [angry_08_mouth, 0, 0, 640, 640, '', 'mouth'],
      [angry_17_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
    ],
  },
};

export default data;
