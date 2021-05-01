import * as React from 'react';
import { formatDistance, formatTime } from '../../functions/formatter';
import { Color, Leg, TransportMode } from '../../types/route';
import styled from 'styled-components';
import { ToolTip } from '../ui/ToolTip';

const colorMap: { [key in TransportMode]: Color } = {
  WALK: 'blue',
  BUS: 'blue',
  RAIL: 'green',
  SUBWAY: 'orange'
};

type Props = { leg: Leg };
type PillProps = {
  color: Color;
};
const Pill = styled.div`
  border-radius: 4px;
  background-color: ${(props: PillProps) => props.color};
  width: fit-content;
  padding: 2px;
`;

export const LegPill = (props: Props) => {
  const { leg } = props;
  const startTime = formatTime(leg.startTime);
  const distance = formatDistance(leg.distance);

  const color = colorMap[leg.mode];

  return (
    <ToolTip toolTip="Howdy">
      <Pill color={color}>Howdy</Pill>
    </ToolTip>
  );
};
