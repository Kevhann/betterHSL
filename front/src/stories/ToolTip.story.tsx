import * as React from 'react';

import { ToolTip } from '../components/ui/ToolTip';
import { route } from './assets/route';
import { addDecorator } from '@storybook/react';
import styled from 'styled-components';

type Props = React.ComponentProps<typeof ToolTip>;
type DecoratorFunction = Parameters<typeof addDecorator>[0];

export type StoryMetadata = {
  component: React.ReactNode;
  title: string;
  decorators?: DecoratorFunction[];
};

const Container = styled.div`
  margin: 150px;
  max-width: 300px;
  width: 300px;
`;

export default {
  title: 'UI/ToolTip',
  component: ToolTip,
  decorators: []
} as StoryMetadata;

const Template = (args: Props) => (
  <Container>
    <ToolTip {...args} />;
  </Container>
);

// export const Primary = () => <Template toolTip={} />;
