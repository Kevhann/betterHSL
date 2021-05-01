import * as React from 'react';
import { Leg } from '../components/routes/ExpandedLeg';
import { route } from './assets/route';
import { addDecorator } from '@storybook/react';

type Props = React.ComponentProps<typeof Leg>;
type DecoratorFunction = Parameters<typeof addDecorator>[0];

export type StoryMetadata = {
  component: React.ReactNode;
  title: string;
  decorators?: DecoratorFunction[];
};

export default {
  title: 'Route/Leg',
  component: Leg,
  decorators: [
    story => <div style={{ margin: '3em', maxWidth: '300px', width: '300px' }}>{story()}</div>
  ]
} as StoryMetadata;

const Template = (args: Props) => <Leg {...args} />;

export const Primary = () => <Template leg={route.legs[0]} />;
