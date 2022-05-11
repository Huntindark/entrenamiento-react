import React from "react";
import { Link } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Links/Default",
  component: Link,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ], //Wrapping the story inside the router
};

const Template = (args) => <Link {...args}>Link</Link>;
export const Example = Template.bind({});
Example.args = {
  to: "/some/url",
};
