import type { FC, PropsWithChildren, ReactNode } from 'react';
import { MenuItemData } from '../ui/PageMenuItem';
import React from 'react';
import { PageMenuItem } from '../ui/PageMenuItem';
import styles from './PageStandard.module.css';

export interface PageStandardProps extends PropsWithChildren {
  menu?: MenuItemData[];
  sidebars?: ReactNode[];
}

export const PageStandard: FC<PageStandardProps> = ({ menu, children }) => {
  return (
    <div className={styles.root}>
      {
        menu && menu.length !== 0
          ? (
            <ul className={styles.menu}>
              {menu.map((item) => <PageMenuItem key={item.id} data={item} />)}
            </ul>
          )
          : null
      }
      <div className={styles.content}>
        <div className={styles.body}>{children}</div>
      </div>
      <div className={styles.footer}>Footer content will be here!</div>
    </div>
  )
};
