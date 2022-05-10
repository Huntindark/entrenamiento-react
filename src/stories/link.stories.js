import React from "react";
import { Link } from "react-router-dom";

export default {
  title: "Components/Links/Default",
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Example = Template.bind({});
// Example.args = {
//   to: "/some/url",
// };
