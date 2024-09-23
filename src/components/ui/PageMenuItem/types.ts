import { ReactNode } from "react";
import { LinkProps } from 'react-router-dom';

export interface MenuItemData extends Pick<LinkProps, 'to' | 'reloadDocument'> {
  id: string;
  display: ReactNode;
}
