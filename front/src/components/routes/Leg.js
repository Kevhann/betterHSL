import React from "react";
import { formatDistance, formatTime } from "../../functions/formatter";
import { Icon } from "semantic-ui-react";

const Leg = ({ leg }) => {
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
            {leg.trip.route.shortName} {leg.trip.tripHeadsign}
          </div>
        )}
        <div>Distance: {distance}</div>
        <div>Departure: {startTime}</div>
        <div>To: {leg.to.name}</div>
      </div>
    </div>
  );
};
export default Leg;
