import * as React from 'react';
import { formatDistance, formatTime } from '../../functions/formatter';
import styled from 'styled-components';
import { colorMap, Colors, Leg } from '../../types/route';
import { ToolTip } from '../ui/ToolTip';
import { LegIcon } from '../ui/Icons';

type Props = { leg: Leg; widthPercentage: number };

type PillStyleProps = {
  color: Colors;
  widthPercentage: number;
};
const Pill = styled.div`
  border-radius: 4px;
  background-color: ${(props: PillStyleProps) => props.color};
  width: ${(props: PillStyleProps) => props.widthPercentage}%;
  white-space: nowrap;
  padding: 4px 4px;
`;

export const LegPreview = ({ leg, widthPercentage }: Props) => {
  const startTime = formatTime(leg.startTime);
  const distance = formatDistance(leg.distance);

  const color = colorMap[leg.mode];

  const shortName = leg.mode === 'WALK' ? formatDistance(leg.distance) : leg.trip?.route.shortName;

  return (
    <>
      <Pill widthPercentage={widthPercentage} color={color}>
        <ToolTip
          toolTip={() => (
            <>
              Leaves: {startTime}
              <br />
              Distance: {distance}
            </>
          )}
        >
          <LegIcon transportMode={leg.mode} />
          <div>{shortName}</div>
        </ToolTip>
      </Pill>
    </>
  );
};
