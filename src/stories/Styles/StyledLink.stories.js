import React from "react";
import StyledLink from "../../component/Generic/Link";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Links/Styled",
  component: StyledLink,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ], //Wrapping the story inside the router
};

const Template = (args) => <StyledLink {...args}>Link</StyledLink>;

export const Example = Template.bind({});
Example.args = {
  to: "/some/url",
};
