import React from "react";

import RoutePreview from "../components/routes/RoutePreview";
import { route } from "./assets/route";

export default {
  title: "Route/RoutePreview",
  component: RoutePreview,
  decorators: [
    (Story) => (
      <div
        classname="accordion ui fluid styled"
        style={{ margin: "3em", width: "300px" }}
      >
        <Story />
      </div>
    ),
    (Story) => (
      <div classname="title">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <RoutePreview {...args} />;

export const Primary = Template.bind({});
Primary.args = { route };
