import React from 'react';
import { formatTime } from '../../functions/formatter';
import LegPrewiev from './LegPreview';

const RoutePreview = ({ route }) => {
  const arrival = formatTime(route.legs[route.legs.length - 1].endTime);
  const departure = formatTime(route.legs[0].startTime);
  const legAmount = route.legs.length;

  let vehiclelegs = 0;
  route.legs.forEach(leg => {
    if (leg.mode !== 'WALK') vehiclelegs++;
  });

  const maxwidth = 42 / vehiclelegs + 'ch';

  return (
    <span className="routePreviewContainer">
      <span>{departure}</span>
      {route.legs.map(leg => {
        if (leg.mode === 'WALK' && legAmount !== 1) {
          return null;
        }
        return (
          <span>
            {leg.mode === 'WALK' && legAmount !== 1 ? null : (
              <LegPrewiev
                classnameProp={`${leg.from.stop.code}${leg.startTime}`}
                leg={leg}
                maxwidth={maxwidth}
              />
            )}
          </span>
        );
      })}
      <span>{arrival}</span>
    </span>
  );
};
export default RoutePreview;
