import React from "react";
// import Search from "../../../../../component/Layout/Content/Search/index.js";
import Search from "../../../../component/Layout/Content/Search/index";

export default {
  title: "Components/Search/Default",
  component: Search,
};

const Template = (args) => <Search {...args} />;

export const Example = Template.bind({});

// Example.args = {
//   Search: "",
// };
