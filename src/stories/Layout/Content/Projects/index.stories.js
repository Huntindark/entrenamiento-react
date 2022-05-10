import React from "react";
// import Members from "../../../../../component/Layout/Content/Members/index.js";
import Projects from "../../../../component/Layout/Content/Projects/index";

export default {
  title: "Components/Project/Binder",
  component: Projects,
};

const Template = (args) => <Projects {...args} />;

export const Example = Template.bind({});

// Example.args = {
//   Projects: "",
// };
