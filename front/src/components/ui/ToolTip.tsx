import * as React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  position: absolute;
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  :hover span {
    visibility: visible;
  }
`;

type Props = {
  toolTip: string;
};

export const ToolTip: React.FunctionComponent<Props> = ({ children, toolTip }) => {
  return (
    <Wrapper>
      {children}
      <Text>{toolTip}</Text>
    </Wrapper>
  );
};
