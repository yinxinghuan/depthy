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
import happy_09_eyelash_r from '../img/isabel/expr_happy/09_eyelash-r.png';
import happy_10_eyelash_l from '../img/isabel/expr_happy/10_eyelash-l.png';
import happy_11_eyebrow_r from '../img/isabel/expr_happy/11_eyebrow-r.png';
import happy_12_eyebrow_l from '../img/isabel/expr_happy/12_eyebrow-l.png';
import happy_08_nose from '../img/isabel/expr_happy/08_nose.png';
import happy_07_mouth from '../img/isabel/expr_happy/07_mouth.png';
import happy_13_front_hair from '../img/isabel/expr_happy/13_front_hair.png';
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
import sad_19_handwear_r from '../img/isabel/expr_sad/19_handwear-r.png';
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
import surprised_19_handwear_r from '../img/isabel/expr_surprised/19_handwear-r.png';
import surprised_04_front_hair from '../img/isabel/expr_surprised/04_front_hair.png';
import angry_01_back_hair from '../img/isabel/expr_angry/01_back_hair.png';
import angry_03_topwear from '../img/isabel/expr_angry/03_topwear.png';
import angry_02_neck from '../img/isabel/expr_angry/02_neck.png';
import angry_08_face from '../img/isabel/expr_angry/08_face.png';
import angry_06_ears_r from '../img/isabel/expr_angry/06_ears-r.png';
import angry_07_ears_l from '../img/isabel/expr_angry/07_ears-l.png';
import angry_04_earwear from '../img/isabel/expr_angry/04_earwear.png';
import angry_11_eyewhite_r from '../img/isabel/expr_angry/11_eyewhite-r.png';
import angry_12_eyewhite_l from '../img/isabel/expr_angry/12_eyewhite-l.png';
import angry_14_irides_r from '../img/isabel/expr_angry/14_irides-r.png';
import angry_13_irides_l from '../img/isabel/expr_angry/13_irides-l.png';
import angry_17_eyelash_r from '../img/isabel/expr_angry/17_eyelash-r.png';
import angry_15_eyelash_l from '../img/isabel/expr_angry/15_eyelash-l.png';
import angry_18_eyebrow_r from '../img/isabel/expr_angry/18_eyebrow-r.png';
import angry_16_eyebrow_l from '../img/isabel/expr_angry/16_eyebrow-l.png';
import angry_10_nose from '../img/isabel/expr_angry/10_nose.png';
import angry_09_mouth from '../img/isabel/expr_angry/09_mouth.png';
import angry_05_handwear_r from '../img/isabel/expr_angry/05_handwear-r.png';
import angry_19_front_hair from '../img/isabel/expr_angry/19_front_hair.png';

const data: CharacterData = {
  name: 'isabel',
  displayName: 'Isabel',
  canvasSize: 640,
  bgSrc: bg,
  expressions: {
    neutral: [
      [neutral_00_back_hair, 0, 0, 640, 640, 'mr-back-hair', ''],
      [neutral_01_topwear, 0, 0, 640, 640, '', ''],
      [neutral_02_neck, 0, 0, 640, 640, '', ''],
      [neutral_06_face, 230, 101, 164, 213, '', ''],
      [neutral_04_ears_r, 226, 202, 32, 56, '', ''],
      [neutral_05_ears_l, 382, 186, 29, 60, '', ''],
      [neutral_03_earwear, 236, 236, 166, 52, '', ''],
      [neutral_10_eyewhite_r, 255, 198, 38, 18, '', 'eyewhite-r'],
      [neutral_11_eyewhite_l, 334, 190, 40, 20, '', 'eyewhite-l'],
      [neutral_12_irides_r, 265, 198, 22, 18, '', 'irides-r'],
      [neutral_13_irides_l, 344, 190, 22, 18, '', 'irides-l'],
      [neutral_14_eyelash_r, 243, 192, 52, 24, '', 'eyelash-r'],
      [neutral_09_eyelash_l, 332, 185, 51, 24, '', 'eyelash-l'],
      [neutral_16_eyebrow_r, 241, 176, 55, 14, '', 'eyebrow-r'],
      [neutral_15_eyebrow_l, 324, 169, 59, 16, '', 'eyebrow-l'],
      [neutral_08_nose, 302, 216, 25, 38, '', 'nose'],
      [neutral_07_mouth, 292, 262, 52, 24, '', 'mouth'],
      [neutral_17_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
    ],
    happy: [
      [happy_00_back_hair, 0, 0, 640, 640, 'mr-back-hair', ''],
      [happy_02_topwear, 0, 0, 640, 640, '', ''],
      [happy_01_neck, 0, 0, 640, 640, '', ''],
      [happy_06_face, 231, 105, 164, 209, '', ''],
      [happy_04_ears_r, 226, 205, 32, 53, '', ''],
      [happy_05_ears_l, 382, 187, 30, 60, '', ''],
      [happy_03_earwear, 235, 235, 167, 52, '', ''],
      [happy_09_eyelash_r, 252, 204, 45, 16, '', 'eyelash-r'],
      [happy_10_eyelash_l, 330, 196, 46, 17, '', 'eyelash-l'],
      [happy_11_eyebrow_r, 241, 176, 55, 14, '', 'eyebrow-r'],
      [happy_12_eyebrow_l, 324, 169, 60, 16, '', 'eyebrow-l'],
      [happy_08_nose, 304, 228, 24, 26, '', 'nose'],
      [happy_07_mouth, 288, 260, 61, 25, '', 'mouth'],
      [happy_13_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
    ],
    sad: [
      [sad_01_back_hair, 0, 0, 640, 640, 'mr-back-hair', ''],
      [sad_03_topwear, 0, 0, 640, 640, '', ''],
      [sad_02_neck, 0, 0, 640, 640, '', ''],
      [sad_05_face, 206, 122, 202, 257, '', ''],
      [sad_06_ears_r, 206, 246, 35, 69, '', ''],
      [sad_07_ears_l, 391, 231, 39, 68, '', ''],
      [sad_04_earwear, 388, 284, 29, 54, '', ''],
      [sad_12_eyewhite_r, 223, 242, 38, 22, '', 'eyewhite-r'],
      [sad_13_eyewhite_l, 306, 234, 47, 22, '', 'eyewhite-l'],
      [sad_10_irides_r, 225, 242, 22, 20, '', 'irides-r'],
      [sad_14_irides_l, 310, 236, 24, 20, '', 'irides-l'],
      [sad_09_eyelash_r, 210, 231, 52, 36, '', 'eyelash-r'],
      [sad_15_eyelash_l, 300, 226, 64, 34, '', 'eyelash-l'],
      [sad_17_eyebrow_r, 208, 204, 50, 27, '', 'eyebrow-r'],
      [sad_18_eyebrow_l, 281, 204, 78, 18, '', 'eyebrow-l'],
      [sad_11_nose, 260, 261, 31, 48, '', 'nose'],
      [sad_08_mouth, 262, 320, 55, 27, '', 'mouth'],
      [sad_19_handwear_r, 180, 256, 124, 348, 'mr-handwear', ''],
      [sad_16_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
    ],
    surprised: [
      [surprised_01_back_hair, 0, 0, 640, 640, 'mr-back-hair', ''],
      [surprised_02_topwear, 0, 0, 640, 640, '', ''],
      [surprised_03_neck, 0, 0, 640, 640, '', ''],
      [surprised_08_face, 212, 106, 208, 285, '', ''],
      [surprised_06_ears_r, 200, 243, 38, 73, '', ''],
      [surprised_07_ears_l, 404, 232, 37, 75, '', ''],
      [surprised_05_earwear, 214, 292, 216, 64, '', ''],
      [surprised_12_eyewhite_r, 242, 230, 48, 30, '', 'eyewhite-r'],
      [surprised_13_eyewhite_l, 345, 226, 49, 32, '', 'eyewhite-l'],
      [surprised_16_irides_r, 256, 234, 25, 28, '', 'irides-r'],
      [surprised_14_irides_l, 354, 229, 26, 27, '', 'irides-l'],
      [surprised_15_eyelash_r, 226, 222, 68, 44, '', 'eyelash-r'],
      [surprised_11_eyelash_l, 342, 217, 67, 42, '', 'eyelash-l'],
      [surprised_17_eyebrow_r, 227, 191, 72, 37, '', 'eyebrow-r'],
      [surprised_18_eyebrow_l, 330, 188, 76, 28, '', 'eyebrow-l'],
      [surprised_09_nose, 302, 262, 37, 45, '', 'nose'],
      [surprised_10_mouth, 291, 318, 60, 28, '', 'mouth'],
      [surprised_19_handwear_r, 286, 320, 184, 286, 'mr-handwear', ''],
      [surprised_04_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
    ],
    angry: [
      [angry_01_back_hair, 0, 0, 640, 640, 'mr-back-hair', ''],
      [angry_03_topwear, 0, 0, 640, 640, '', ''],
      [angry_02_neck, 0, 0, 640, 640, '', ''],
      [angry_08_face, 230, 100, 164, 216, '', ''],
      [angry_06_ears_r, 225, 201, 32, 57, '', ''],
      [angry_07_ears_l, 382, 186, 30, 60, '', ''],
      [angry_04_earwear, 235, 235, 167, 52, '', ''],
      [angry_11_eyewhite_r, 255, 202, 38, 15, '', 'eyewhite-r'],
      [angry_12_eyewhite_l, 334, 196, 42, 16, '', 'eyewhite-l'],
      [angry_14_irides_r, 265, 200, 22, 15, '', 'irides-r'],
      [angry_13_irides_l, 344, 195, 21, 16, '', 'irides-l'],
      [angry_17_eyelash_r, 244, 196, 53, 23, '', 'eyelash-r'],
      [angry_15_eyelash_l, 330, 191, 52, 22, '', 'eyelash-l'],
      [angry_18_eyebrow_r, 245, 184, 58, 24, '', 'eyebrow-r'],
      [angry_16_eyebrow_l, 324, 178, 58, 28, '', 'eyebrow-l'],
      [angry_10_nose, 303, 214, 28, 52, '', 'nose'],
      [angry_09_mouth, 294, 268, 50, 22, '', 'mouth'],
      [angry_05_handwear_r, 417, 542, 115, 63, 'mr-handwear', ''],
      [angry_19_front_hair, 0, 0, 640, 640, 'mr-front-hair', ''],
    ],
  },
};

export default data;
