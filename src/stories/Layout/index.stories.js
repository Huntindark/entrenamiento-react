import React from "react";
import Layout from "../../component/Layout";
// import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Layout",
  component: Layout,
  // decorators: [
  //   (Story) => (
  //     <MemoryRouter>
  //       <Story />
  //     </MemoryRouter>
  //   ),
  // ], //Wrapping the story inside the router
};

const Template = (args) => <Layout {...args} />;

export const Example = Template.bind({});
