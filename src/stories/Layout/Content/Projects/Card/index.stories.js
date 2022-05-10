import React from "react";
import Card from "../../../../../component/Layout/Content/Projects/card";
import imatest from "../../../../../assets/projects/finememe.jpg";

export default {
  title: "Components/Project/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Example = Template.bind({});

Example.args = {
  name: "Proj-test",
  img: imatest,
};
