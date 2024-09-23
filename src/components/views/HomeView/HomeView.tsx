import type { FC } from 'react';
import React from 'react';
import { H } from 'components/ui/H';
import { P } from 'components/ui/P';
import { PageStandard } from 'components/PageStandard';

export const HomeView: FC = () => {
  return (
    <PageStandard>
      <H level={1}>Title</H>
      <P>Subtitle</P>
    </PageStandard>
  )
};
