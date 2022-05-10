import React from "react";
import StyledLink from "../../component/Styles/StyledLink";

export default {
  title: "Components/Links/Styled",
  component: StyledLink,
};

const Template = (args) => <StyledLink {...args} />;

export const Example = Template.bind({});
// Example.args = {
//   to: "/some/url",
// };
