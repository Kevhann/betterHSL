import * as React from 'react';
import { formatDuration, formatTime } from '../../functions/formatter';
import { Route } from '../../types/route';
import { LegPreview } from './LegPreview';
import styled from 'styled-components';

const RoutePreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TimeInfoBox = styled.div`
  padding: 8px;
`;

const Duration = styled.span`
  float: right;
`;

export const RoutePreview = ({ route }: { route: Route }) => {
  const arrival = route.legs[route.legs.length - 1].endTime;
  const departure = route.legs[0].startTime;

  const duration = route.duration;

  const durationFormatted = formatDuration(duration);

  const arrivalFormatted = formatTime(arrival);
  const departureFormatted = formatTime(departure);

  // const legAmount = route.legs.length;

  const total = route.legs.reduce((sum, leg) => sum + (leg.endTime - leg.startTime), 0);

  return (
    <>
      <TimeInfoBox>
        {departureFormatted} - {arrivalFormatted}
        <Duration>{durationFormatted}</Duration>
      </TimeInfoBox>
      <RoutePreviewContainer>
        {route.legs.map((leg, i) => {
          return (
            <LegPreview leg={leg} widthPercentage={((leg.endTime - leg.startTime) / total) * 100} />
          );
        })}
      </RoutePreviewContainer>
    </>
  );
};
