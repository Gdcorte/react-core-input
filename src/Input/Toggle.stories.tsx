import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { ToggleInput } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: ToggleInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: { control: "boolean" },
    validInput: { control: "boolean" },
  },
} as ComponentMeta<typeof ToggleInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToggleInput> = (args) => {
  const [inputValue, setinputValue] = useState("");

  return (
    <div style={{ paddingTop: "60px" }}>
      <ToggleInput
        {...args}
        useValue={inputValue}
        onValueChange={setinputValue}
        useValidator={() => {
          return Math.random() > 0.5;
        }}
      />
    </div>
  );
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Toggle = Template.bind({});
Toggle.args = {
  disabled: false,
  toggle: {
    first: "ml",
    second: "g",
  },
};
