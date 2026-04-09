import type { CharacterData } from '../types';

export const CHARACTER_NAMES = ['isaya', 'jenny', 'algram', 'isabel'] as const;

const loaders: Record<string, () => Promise<{ default: CharacterData }>> = {
  isaya: () => import('./char_isaya'),
  jenny: () => import('./char_jenny'),
  algram: () => import('./char_algram'),
  isabel: () => import('./char_isabel'),
};

export async function loadCharacter(name: string): Promise<CharacterData> {
  const mod = await loaders[name]();
  return mod.default;
}
