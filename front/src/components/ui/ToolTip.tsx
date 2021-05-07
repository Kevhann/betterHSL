import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../types/route';

type PlacementOption = 'above' | 'below' | 'left' | 'right';
type Placement = { placement: PlacementOption };

const toolTipPlacement = (placement: PlacementOption) => {
  const css: Record<PlacementOption, string> = {
    below: `top: calc(100% + 16px);
    left: 50%;
    margin-left: -60px;`,
    above: `bottom: calc(100% + 16px);
    left: 50%;
    margin-left: -60px;`,
    left: `right: calc(100% + 16px);
    top: 50%;
    margin-top: -23px;`,
    right: `left: calc(100% + 16px);
    top: 50%;
    margin-top: -23px;`
  };

  return css[placement];
};
const toolTipCaretPlacement = (placement: PlacementOption) => {
  const css: Record<PlacementOption, string> = {
    below: `bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-color: transparent transparent black transparent;`,
    above: `top: 100%;
    left: 50%;
    margin-left: -5px;
    border-color: black transparent transparent transparent;`,
    left: `left: 100%;
    top: 50%;
    margin-top: -5px;
    border-color: transparent transparent transparent black;`,
    right: `right: 100%;
    top: 50%;
    margin-top: -5px;
    border-color: transparent black transparent transparent;`
  };

  return css[placement];
};

const Text = styled.span`
  // common stuff
  visibility: hidden;
  width: 120px;
  background-color: #000;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  transition-delay: 0s;
  opacity: 0%;
  // position
  ${(props: Placement) => toolTipPlacement(props.placement)}

  :after {
    ${(props: Placement) => toolTipCaretPlacement(props.placement)}
    content: '';
    position: absolute;
    border-width: 5px;
    border-style: solid;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  :hover span {
    transition: opacity, 1s;
    visibility: visible;
    opacity: 100%;
  }
`;

const Container = styled.div`
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
`;

type Props = {
  toolTip: () => React.ReactElement;
  direction?: PlacementOption;
  backgroundColor?: Colors;
  textColor?: Colors;
};
export const ToolTip: React.FunctionComponent<Props> = ({
  children,
  toolTip,
  direction = 'above'
}: React.PropsWithChildren<Props>) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
      <Text placement={direction}>{toolTip()}</Text>
    </Wrapper>
  );
};
