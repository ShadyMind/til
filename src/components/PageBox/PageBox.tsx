import type { FC, PropsWithChildren } from 'react';
import React, { useMemo } from 'react';

export const PageBox: FC<PropsWithChildren> = ({ children }) => {
  const slotsContent = useMemo(() => {

  }, [children]);
  return (
    <>
      {slotsContent}
    </>
  );
};
