import type { CharacterData } from '../types';

import bg from '../img/isaya/bg.png';
import l_00_back_hair from '../img/isaya/00_back_hair.png';
import l_03_topwear from '../img/isaya/03_topwear.png';
import l_01_neck from '../img/isaya/01_neck.png';
import l_06_face from '../img/isaya/06_face.png';
import l_05_ears_r from '../img/isaya/05_ears-r.png';
import l_04_ears_l from '../img/isaya/04_ears-l.png';
import l_09_eyewhite_r from '../img/isaya/09_eyewhite-r.png';
import l_10_eyewhite_l from '../img/isaya/10_eyewhite-l.png';
import l_12_irides_r from '../img/isaya/12_irides-r.png';
import l_15_irides_l from '../img/isaya/15_irides-l.png';
import l_11_eyelash_r from '../img/isaya/11_eyelash-r.png';
import l_13_eyelash_l from '../img/isaya/13_eyelash-l.png';
import l_14_eyebrow_r from '../img/isaya/14_eyebrow-r.png';
import l_16_eyebrow_l from '../img/isaya/16_eyebrow-l.png';
import l_07_nose from '../img/isaya/07_nose.png';
import l_08_mouth from '../img/isaya/08_mouth.png';
import l_17_front_hair from '../img/isaya/17_front_hair.png';
import l_02_headwear from '../img/isaya/02_headwear.png';

const data: CharacterData = {
  name: 'isaya',
  displayName: 'Isaya',
  canvasSize: 1280,
  layers: [
  [bg, 0, 0, 1280, 1280, 'mr-bg', ''],
  [l_00_back_hair, 0, 0, 1280, 1280, 'mr-back-hair', ''],
  [l_03_topwear, 0, 0, 1280, 1280, '', ''],
  [l_01_neck, 0, 0, 1280, 1280, '', ''],
  [l_06_face, 0, 0, 1280, 1280, '', ''],
  [l_05_ears_r, 413, 514, 88, 141, '', ''],
  [l_04_ears_l, 781, 510, 91, 142, '', ''],
  [l_09_eyewhite_r, 480, 532, 103, 42, '', 'eyewhite-r'],
  [l_10_eyewhite_l, 701, 528, 105, 42, '', 'eyewhite-l'],
  [l_12_irides_r, 507, 532, 66, 42, '', 'irides-r'],
  [l_15_irides_l, 720, 528, 66, 42, '', 'irides-l'],
  [l_11_eyelash_r, 467, 513, 123, 65, '', 'eyelash-r'],
  [l_13_eyelash_l, 694, 511, 128, 62, '', 'eyelash-l'],
  [l_14_eyebrow_r, 467, 477, 128, 16, '', 'eyebrow-r'],
  [l_16_eyebrow_l, 681, 475, 138, 30, '', 'eyebrow-l'],
  [l_07_nose, 0, 0, 1280, 1280, '', 'nose'],
  [l_08_mouth, 0, 0, 1280, 1280, '', 'mouth'],
  [l_17_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
  [l_02_headwear, 0, 0, 1280, 1280, 'mr-headwear', ''],
  ],
};

export default data;
