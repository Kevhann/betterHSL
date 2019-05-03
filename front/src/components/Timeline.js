import React from "react"
import { Icon } from "semantic-ui-react"

import "./timeline.css"

export const Timeline = ({ children }) => (
  <div className="timelineContainer">
    <ul className="timeline">{children}</ul>
  </div>
)

export const Event = ({ from, information, time, children }) => (
  <li className="timelineEvent">
    <label className="timelineIcon" />
    <div className="timelineBody">
      <span className="timelineTime">{time}</span>
      <span classname="timelineFrom">{from}</span>
      <div />
      <Icon name="add to cart" />
      <span>{information}</span>
    </div>
  </li>
)
