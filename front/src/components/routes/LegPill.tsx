import * as React from 'react';
import { formatDistance, formatTime } from '../../functions/formatter';
import { Leg } from '../../types/route';
import styled from 'styled-components';

type Props = { leg: Leg };
type PillProps = {
  color: string;
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

  return <Pill color="green">Hello </Pill>;
};
