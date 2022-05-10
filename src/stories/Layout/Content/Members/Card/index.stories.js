import React from "react";
import Card from "../../../../../component/Layout/Content/Members/card";

export default {
  title: "Components/Member/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Example = Template.bind({});

Example.args = {
  firstName: "Test",
  lastName: "Erino",
  role: "QnA",
};
