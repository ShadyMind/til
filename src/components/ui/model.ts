export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

export type Gap = 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64;

export interface ThemeValue extends Omit<PropertyDefinition, 'name'> {
  description: string
}

export type ThemeValesMap = Record<`--${string}`, ThemeValue>;
