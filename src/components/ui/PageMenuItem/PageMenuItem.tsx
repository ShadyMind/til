import type { FC } from 'react';
import React from 'react';
import { MenuItemData } from './types';
import { Link } from 'react-router-dom';
import styles from './PageMenuItem.module.css';

export interface PageMenuItemProps {
  data: MenuItemData;
}

export const PageMenuItem: FC<PageMenuItemProps> = ({ data }) => {
  return (
    <li className={styles.root}>
      <Link to={data.to} reloadDocument={data.reloadDocument} id={data.id}>{data.display}</Link>
    </li>
  );
};
