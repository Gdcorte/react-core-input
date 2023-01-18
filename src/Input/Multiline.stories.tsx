import { ComponentMeta, ComponentStory } from "@storybook/react";

import { default as MultilineInput } from "./Multiline";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: MultilineInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MultilineInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MultilineInput> = (args) => (
  <MultilineInput {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Multiline = Template.bind({});
Multiline.args = {};
