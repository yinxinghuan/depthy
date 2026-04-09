import type { CharacterData } from '../types';

import bg from '../img/isabel/bg.png';
import l_00_back_hair from '../img/isabel/00_back_hair.png';
import l_01_topwear from '../img/isabel/01_topwear.png';
import l_02_neck from '../img/isabel/02_neck.png';
import l_06_face from '../img/isabel/06_face.png';
import l_04_ears_r from '../img/isabel/04_ears-r.png';
import l_05_ears_l from '../img/isabel/05_ears-l.png';
import l_03_earwear from '../img/isabel/03_earwear.png';
import l_10_eyewhite_r from '../img/isabel/10_eyewhite-r.png';
import l_11_eyewhite_l from '../img/isabel/11_eyewhite-l.png';
import l_12_irides_r from '../img/isabel/12_irides-r.png';
import l_13_irides_l from '../img/isabel/13_irides-l.png';
import l_14_eyelash_r from '../img/isabel/14_eyelash-r.png';
import l_09_eyelash_l from '../img/isabel/09_eyelash-l.png';
import l_16_eyebrow_r from '../img/isabel/16_eyebrow-r.png';
import l_15_eyebrow_l from '../img/isabel/15_eyebrow-l.png';
import l_08_nose from '../img/isabel/08_nose.png';
import l_07_mouth from '../img/isabel/07_mouth.png';
import l_17_front_hair from '../img/isabel/17_front_hair.png';

const data: CharacterData = {
  name: 'isabel',
  displayName: 'Isabel',
  canvasSize: 1280,
  layers: [
  [bg, 0, 0, 1280, 1280, 'mr-bg', ''],
  [l_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
  [l_01_topwear, 0, 0, 1280, 1280, '', ''],
  [l_02_neck, 0, 0, 1280, 1280, '', ''],
  [l_06_face, 461, 202, 329, 426, '', ''],
  [l_04_ears_r, 452, 404, 64, 112, '', ''],
  [l_05_ears_l, 765, 373, 58, 120, '', ''],
  [l_03_earwear, 471, 471, 333, 104, '', ''],
  [l_10_eyewhite_r, 510, 395, 76, 37, '', 'eyewhite-r'],
  [l_11_eyewhite_l, 667, 380, 81, 39, '', 'eyewhite-l'],
  [l_12_irides_r, 530, 395, 45, 35, '', 'irides-r'],
  [l_13_irides_l, 687, 380, 43, 37, '', 'irides-l'],
  [l_14_eyelash_r, 486, 385, 105, 49, '', 'eyelash-r'],
  [l_09_eyelash_l, 663, 370, 102, 49, '', 'eyelash-l'],
  [l_16_eyebrow_r, 482, 353, 110, 27, '', 'eyebrow-r'],
  [l_15_eyebrow_l, 649, 338, 118, 32, '', 'eyebrow-l'],
  [l_08_nose, 604, 432, 50, 76, '', 'nose'],
  [l_07_mouth, 585, 523, 105, 48, '', 'mouth'],
  [l_17_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
  ],
};

export default data;
