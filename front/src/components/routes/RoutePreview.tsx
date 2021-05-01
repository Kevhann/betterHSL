import * as React from 'react';
import { formatTime } from '../../functions/formatter';
import { Route } from '../../types/route';
import { LegPreview } from './LegPreview';

export const RoutePreview = ({ route }: { route: Route }) => {
  const arrival = formatTime(route.legs[route.legs.length - 1].endTime);
  const departure = formatTime(route.legs[0].startTime);
  const legAmount = route.legs.length;

  // let vehiclelegs = 0;
  // route.legs.forEach(leg => {
  //   if (leg.mode !== 'WALK') vehiclelegs++;
  // });

  // const maxwidth = 42 / vehiclelegs + 'ch';

  return (
    <span className="routePreviewContainer">
      <span>{departure}</span>
      {route.legs.map(leg => {
        return (
          <span>{leg.mode === 'WALK' && legAmount !== 1 ? null : <LegPreview leg={leg} />}</span>
        );
      })}
      <span>{arrival}</span>
    </span>
  );
};
