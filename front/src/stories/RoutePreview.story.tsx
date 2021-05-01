import * as React from 'react';

import { RoutePreview } from '../components/routes/RoutePreview';
import { route } from './assets/route';
import { addDecorator } from '@storybook/react';
import styled from 'styled-components';

type Props = React.ComponentProps<typeof RoutePreview>;
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

const Wrapper: React.FunctionComponent = props => <Container>{props.children}</Container>;

export default {
  title: 'Route/RoutePreview',
  component: RoutePreview,
  decorators: []
} as StoryMetadata;

const Template = (args: Props) => (
  <Container>
    <RoutePreview {...args} />;
  </Container>
);

export const Primary = () => <Template route={route} />;
