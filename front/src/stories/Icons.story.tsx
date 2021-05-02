import * as React from 'react';
import { Bus, Rail, Subway, Walk } from '../components/ui/Icons';

import { addDecorator } from '@storybook/react';

type DecoratorFunction = Parameters<typeof addDecorator>[0];

export type StoryMetadata = {
  component: React.ReactNode;
  title: string;
  decorators?: DecoratorFunction[];
};

export default {
  title: 'UI/Icons',
  component: Bus,
  decorators: [
    story => <div style={{ margin: '3em', maxWidth: '300px', width: '300px' }}>{story()}</div>
  ]
} as StoryMetadata;

export const All = () => (
  <div>
    <ul>
      <li>
        <Walk />
      </li>
      <li>
        <Bus />
      </li>
      <li>
        <Rail />
      </li>
      <li>
        <Subway />
      </li>
    </ul>
  </div>
);
