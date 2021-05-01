import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../types/route';

type PlacementOption = 'above' | 'below' | 'left' | 'right';
const toolTipPlacement = (placement: PlacementOption) => {
  const css: Record<PlacementOption, string> = {
    below: `top: 150%;
    left: 50%;
    margin-left: -60px;`,
    above: `bottom: 150%;
    left: 50%;
    margin-left: -60px;`,
    left: `top: 150%;
    left: 50%;
    margin-left: -60px;`,
    right: `top: 150%;
    left: 50%;
    margin-left: -60px;`
  };

  return css[placement];
};
const toolTipCaretPlacement = (placement: PlacementOption) => {
  const css: Record<PlacementOption, string> = {
    below: `top: 150%;
    left: 50%;
    margin-left: -60px;`,
    above: `top: 150%;
    left: 50%;
    margin-left: -60px;`,
    left: `top: 150%;
    left: 50%;
    margin-left: -60px;`,
    right: `top: 150%;
    left: 50%;
    margin-left: -60px;`
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
  top: 150%;
  left: 50%;
  margin-left: -60px;
  :after {
    top: 100%;
    left: 50%;
    margin-left: -5px;
    content: '';
    position: absolute;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  :hover span {
    transition: opacity, 1s;
    visibility: visible;
    opacity: 100%;
  }
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
}) => {
  return (
    <Wrapper>
      {children}
      <Text>{toolTip()}</Text>
    </Wrapper>
  );
};
