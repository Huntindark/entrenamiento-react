import React from "react";
// import Members from "../../../../../component/Layout/Content/Members/index.js";
import Members from "../../../../component/Layout/Content/Members/index";

export default {
  title: "Components/Member/Binder",
  component: Members,
};

const Template = (args) => <Members {...args} />;

export const Example = Template.bind({});

// Example.args = {
//   members: "",
// };
