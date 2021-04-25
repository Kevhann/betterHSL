import * as React from 'react';

import { RoutePreview } from '../components/routes/RoutePreview';
import { route } from './assets/route';
import { addDecorator } from '@storybook/react';

type Props = React.ComponentProps<typeof RoutePreview>;
type DecoratorFunction = Parameters<typeof addDecorator>[0];

export type StoryMetadata = {
  component: React.ReactNode;
  title: string;
  decorators?: DecoratorFunction[];
};

export default {
  title: 'Route/RoutePreview',
  component: RoutePreview,
  decorators: [
    story => <div style={{ margin: '3em', maxWidth: '300px', width: '300px' }}>{story()}</div>
  ]
} as StoryMetadata;

const Template = (args: Props) => <RoutePreview {...args} />;

export const Primary = () => <Template route={route} />;
