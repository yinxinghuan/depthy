import type { CharacterData } from '../types';
import isaya from './char_isaya';
import jenny from './char_jenny';
import algram from './char_algram';
import isabel from './char_isabel';

export const CHARACTERS: CharacterData[] = [isaya, jenny, algram, isabel];

export const CHARACTER_NAMES = ['isaya', 'jenny', 'algram', 'isabel'] as const;

export function loadCharacter(name: string): CharacterData {
  return CHARACTERS.find(c => c.name === name)!;
}
