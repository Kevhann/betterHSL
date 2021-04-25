import * as React from 'react';
import { LegPill } from '../components/routes/LegPill';
import { route } from './assets/route';
import { addDecorator } from '@storybook/react';

type Props = React.ComponentProps<typeof LegPill>;
type DecoratorFunction = Parameters<typeof addDecorator>[0];

export type StoryMetadata = {
  component: React.ReactNode;
  title: string;
  decorators?: DecoratorFunction[];
};

export default {
  title: 'Route/LegPill',
  component: LegPill,
  decorators: [
    story => <div style={{ margin: '3em', maxWidth: '300px', width: '300px' }}>{story()}</div>
  ]
} as StoryMetadata;

const Template = (args: Props) => <LegPill {...args} />;

export const Primary = () => <Template leg={route.legs[0]} />;
