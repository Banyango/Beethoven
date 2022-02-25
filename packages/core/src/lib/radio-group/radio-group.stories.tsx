import { Story, Meta } from '@storybook/react';
import { RadioGroup } from './radio-group';
import {RadioButton} from "./radio-button/radio-button";

export default {
  component: RadioGroup,
  title: 'RadioGroup',
} as Meta;

const Template: Story = (args) => <RadioGroup label="label" {...args}>
  <RadioButton value="1" label="Option 1" />
  <RadioButton value="2" label="Option 2" />
  <RadioButton value="3" label="Option 3" />
</RadioGroup>;

export const Primary = Template.bind({});
Primary.args = {};
