import type { CharacterData } from '../types';

import bg from '../img/jenny/bg.png';
import l_00_back_hair from '../img/jenny/00_back_hair.png';
import l_01_topwear from '../img/jenny/01_topwear.png';
import l_02_neck from '../img/jenny/02_neck.png';
import l_05_face from '../img/jenny/05_face.png';
import l_04_ears_r from '../img/jenny/04_ears-r.png';
import l_03_ears_l from '../img/jenny/03_ears-l.png';
import l_08_eyewhite_r from '../img/jenny/08_eyewhite-r.png';
import l_09_eyewhite_l from '../img/jenny/09_eyewhite-l.png';
import l_10_irides_r from '../img/jenny/10_irides-r.png';
import l_13_irides_l from '../img/jenny/13_irides-l.png';
import l_11_eyelash_r from '../img/jenny/11_eyelash-r.png';
import l_15_eyelash_l from '../img/jenny/15_eyelash-l.png';
import l_12_eyebrow_r from '../img/jenny/12_eyebrow-r.png';
import l_14_eyebrow_l from '../img/jenny/14_eyebrow-l.png';
import l_06_nose from '../img/jenny/06_nose.png';
import l_07_mouth from '../img/jenny/07_mouth.png';
import l_16_front_hair from '../img/jenny/16_front_hair.png';
import l_17_eyewear from '../img/jenny/17_eyewear.png';

const data: CharacterData = {
  name: 'jenny',
  displayName: 'Jenny',
  canvasSize: 1280,
  layers: [
  [bg, 0, 0, 1280, 1280, 'mr-bg', ''],
  [l_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
  [l_01_topwear, 0, 0, 1280, 1280, '', ''],
  [l_02_neck, 0, 0, 1280, 1280, '', ''],
  [l_05_face, 0, 0, 1280, 1280, '', ''],
  [l_04_ears_r, 353, 506, 105, 161, '', ''],
  [l_03_ears_l, 829, 506, 107, 160, '', ''],
  [l_08_eyewhite_r, 454, 481, 122, 76, '', 'eyewhite-r'],
  [l_09_eyewhite_l, 708, 481, 119, 76, '', 'eyewhite-l'],
  [l_10_irides_r, 484, 482, 76, 76, '', 'irides-r'],
  [l_13_irides_l, 724, 482, 76, 76, '', 'irides-l'],
  [l_11_eyelash_r, 428, 463, 156, 87, '', 'eyelash-r'],
  [l_15_eyelash_l, 698, 463, 158, 86, '', 'eyelash-l'],
  [l_12_eyebrow_r, 443, 413, 150, 33, '', 'eyebrow-r'],
  [l_14_eyebrow_l, 689, 412, 155, 34, '', 'eyebrow-l'],
  [l_06_nose, 0, 0, 1280, 1280, '', 'nose'],
  [l_07_mouth, 0, 0, 1280, 1280, '', 'mouth'],
  [l_16_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
  [l_17_eyewear, 0, 0, 1280, 1280, 'mr-eyewear', ''],
  ],
};

export default data;
