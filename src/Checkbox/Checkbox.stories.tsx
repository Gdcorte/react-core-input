import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CheckboxInput } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/InputGroup",
  component: CheckboxInput,
  // More on argTypes: https://storybook.js.org/docs/react/C
  argTypes: {},
} as ComponentMeta<typeof CheckboxInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckboxInput> = (args) => (
  <CheckboxInput {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Checkbox = Template.bind({});
Checkbox.args = {
  label: "Checkbox Testing",
  defaultChecked: true,
  changeCallback: (event: boolean) => {
    console.log(event);
  },
};
