import type { FC, PropsWithChildren } from 'react';
import React, { useMemo } from 'react';
import cn from 'classnames';
import * as styles from './P.module.css';

export interface PProps extends PropsWithChildren {
  gap?: number;
  propogation?: 'mixed' | 'padding' | 'margin';
}

const PROPAGATION_ALIAS_MAP: Record<Exclude<PProps['propogation'], undefined>, string> = {
  mixed: 'x',
  padding: 'p',
  margin: 'm'
};

export const P: FC<PProps> = ({ children, propogation = 'margin', gap }) => {
  const className = useMemo(() => cn(
    styles.root,
    styles[`root__${PROPAGATION_ALIAS_MAP[propogation]}_gap_${gap || 0}`]
  ), [propogation, gap]);
  return (
    <p className={className}>{children}</p>
  )
};
