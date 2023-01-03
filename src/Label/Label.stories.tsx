import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SimpleInput } from "../Input";
import { SimpleLabel as Label } from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Label",
  component: Label,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    bold: { control: "boolean", defaultValue: false },
  },
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = (args) => {
  return (
    <Label {...args}>
      <SimpleInput useValue={"test"} onValueChange={() => {}} />
    </Label>
  );
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const LabelSimple = Template.bind({});
LabelSimple.args = {
  label: "Input Label",
  orientation: "column",
};
