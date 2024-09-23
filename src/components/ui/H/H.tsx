import type { FC, PropsWithChildren } from 'react';
import type { HeadingLevel } from '../model';
import { createElement, useMemo } from 'react';

export type HProps = PropsWithChildren<{
  level: HeadingLevel;
}>;

export const H: FC<HProps> = ({ level, children }) => {
  const limitedLevel = useMemo(() => Math.min(6, Math.max(level, 0)), [level]);
  return createElement(`h${limitedLevel}`, {}, children);
};
