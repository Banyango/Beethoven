import { Story, Meta } from '@storybook/react';
import { Select } from './select';
import {IOption, ISelectProps} from "./select.props.interface";

export default {
  component: Select,
  title: 'Select',
} as Meta;

const options:Array<IOption> = [{label: 'Option 1', value: '1'}, {label: 'Option 2 really long option', value: '2'}, {label: 'Option 3', value: '3'}];

const Template: Story<ISelectProps> = (args) => <Select {...args} label="select"/>;

const defaultArgs: ISelectProps = {
  label: "select",
  options,
  value: '1',
  onChange: event => console.log('value'),
  disabled: false,
  maxWidth: undefined,
  name: 'select'
}

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaultArgs,
  disabled: true
};

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  ...defaultArgs,
  maxWidth: '100'
};
