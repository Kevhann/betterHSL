import * as React from 'react';
import { LegPreview } from '../components/routes/LegPreview';
import { route } from './assets/route';
import { addDecorator } from '@storybook/react';

type Props = React.ComponentProps<typeof LegPreview>;
type DecoratorFunction = Parameters<typeof addDecorator>[0];

export type StoryMetadata = {
  component: React.ReactNode;
  title: string;
  decorators?: DecoratorFunction[];
};

export default {
  title: 'Route/LegPreview',
  component: LegPreview,
  decorators: [
    story => <div style={{ margin: '3em', maxWidth: '300px', width: '300px' }}>{story()}</div>
  ]
} as StoryMetadata;

const Template = (args: Props) => <LegPreview {...args} />;

export const Primary = () => <Template leg={route.legs[0]} widthPercentage={50} />;
