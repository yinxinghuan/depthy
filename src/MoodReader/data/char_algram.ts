import type { CharacterData } from '../types';

import bg from '../img/algram/bg.png';
import l_00_topwear from '../img/algram/00_topwear.png';
import l_01_neck from '../img/algram/01_neck.png';
import l_04_face from '../img/algram/04_face.png';
import l_03_ears_r from '../img/algram/03_ears-r.png';
import l_02_ears_l from '../img/algram/02_ears-l.png';
import l_07_eyewhite_r from '../img/algram/07_eyewhite-r.png';
import l_08_eyewhite_l from '../img/algram/08_eyewhite-l.png';
import l_10_irides_r from '../img/algram/10_irides-r.png';
import l_12_irides_l from '../img/algram/12_irides-l.png';
import l_09_eyelash_r from '../img/algram/09_eyelash-r.png';
import l_11_eyelash_l from '../img/algram/11_eyelash-l.png';
import l_14_eyebrow_r from '../img/algram/14_eyebrow-r.png';
import l_13_eyebrow_l from '../img/algram/13_eyebrow-l.png';
import l_06_nose from '../img/algram/06_nose.png';
import l_05_mouth from '../img/algram/05_mouth.png';
import l_15_front_hair from '../img/algram/15_front_hair.png';

const data: CharacterData = {
  name: 'algram',
  displayName: 'Algram',
  canvasSize: 1280,
  layers: [
  [bg, 0, 0, 1280, 1280, 'mr-bg', ''],
  [l_00_topwear, 0, 0, 1280, 1280, '', ''],
  [l_01_neck, 0, 0, 1280, 1280, '', ''],
  [l_04_face, 0, 0, 1280, 1280, '', ''],
  [l_03_ears_r, 381, 517, 93, 155, '', ''],
  [l_02_ears_l, 807, 502, 85, 155, '', ''],
  [l_07_eyewhite_r, 479, 499, 101, 52, '', 'eyewhite-r'],
  [l_08_eyewhite_l, 694, 491, 98, 52, '', 'eyewhite-l'],
  [l_10_irides_r, 512, 500, 51, 51, '', 'irides-r'],
  [l_12_irides_l, 710, 491, 52, 53, '', 'irides-l'],
  [l_09_eyelash_r, 470, 474, 116, 76, '', 'eyelash-r'],
  [l_11_eyelash_l, 684, 466, 119, 71, '', 'eyelash-l'],
  [l_14_eyebrow_r, 455, 449, 146, 30, '', 'eyebrow-r'],
  [l_13_eyebrow_l, 667, 438, 145, 36, '', 'eyebrow-l'],
  [l_06_nose, 0, 0, 1280, 1280, '', 'nose'],
  [l_05_mouth, 0, 0, 1280, 1280, '', 'mouth'],
  [l_15_front_hair, 0, 0, 1280, 1280, 'mr-front-hair', ''],
  ],
};

export default data;
