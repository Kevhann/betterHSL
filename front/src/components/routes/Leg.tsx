import * as React from 'react';
import { formatDistance, formatTime } from '../../functions/formatter';
import { Icon } from 'semantic-ui-react';
import { Leg as LegType } from '../../types/route';

type Props = { leg: LegType };

export const Leg = (props: Props) => {
  const { leg } = props;
  const startTime = formatTime(leg.startTime);
  const distance = formatDistance(leg.distance);

  if (true)
    return (
      <li className="timelineEvent">
        {/* <label className="timelineIcon" /> */}
        {/* <div className="timelineBody"> */}
        <span className="timelineTime">{startTime}</span>
        <span className="timelineSpacer" />

        <span className="timelineFrom">{leg.from.name}</span>

        <Icon name="blind" />
        <span className="timelineInfo">{distance}</span>
        {/* </div> */}
      </li>
    );

  return (
    <div>
      <p />
      <div>
        <b>{leg.from.name}</b>
        <div>Mode: {leg.mode}</div>
        {leg.trip && (
          <div>
            {leg.trip?.route.shortName} {leg.trip?.tripHeadsign}
          </div>
        )}
        <div>Distance: {distance}</div>
        <div>Departure: {startTime}</div>
        <div>To: {leg.to.name}</div>
      </div>
    </div>
  );
};
