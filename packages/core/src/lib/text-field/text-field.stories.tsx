import { Story, Meta } from '@storybook/react';
import TextField from "./text-field";

import {ITextFieldProps} from "./text-field.props.interface";

export default {
  component: TextField,
  title: 'Textfield',
} as Meta;

const Template: Story<ITextFieldProps> = (args) => <TextField {...args} />;

const defaultProps = {
  label: 'Textfield',
  placeholder: 'Placeholder',
  value: '',
  style: 'default',
  onChange: () => {},
};

export const Primary = Template.bind({});
// @ts-ignore
Primary.args = {
  ...defaultProps
};

export const Password = Template.bind({});
Password.args = {
  ...defaultProps,
  label: 'Password',
  placeholder: 'Enter password',
  style: 'default',
  type: 'password',
};

export const Simple = Template.bind({});
Simple.args = {
  ...defaultProps,
  label: 'text',
  placeholder: 'Enter password',
  type: 'text',
  style: 'minimal'
};
