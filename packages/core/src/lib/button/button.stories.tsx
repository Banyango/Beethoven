import React, {useState} from "react";
import { Story, Meta } from '@storybook/react';
import { Button } from './button';
import {IButtonProps} from "./button.props.interface";

export default {
  component: Button,
  title: 'Button',
  label: 'Button',
  disabled: 'boolean',
  type: 'string',
  iconClassname: 'string',
} as Meta;

const Template: Story<IButtonProps> = (args) => {
  const [count, setCount] = useState(0);
  return <>
    <Button {...args} onClick={()=> setCount(count+1)}/>
    <br/>
    <br/>
    <br/>
    <span>Clicked this many times {count}</span>
  </>
}


export const Primary = Template.bind({});
Primary.args = {
  title:'Button',
  label:'Click Me',
  type:'default'
};

export const Disabled = Template.bind({});
Disabled.args = {
  title:'Button',
  label:'Click Me',
  disabled:true,
  type:'default'
};

export const Simple = Template.bind({});
Simple.args = {
  title:'Button',
  label:'Click Me',
  disabled:false,
  type:'simple'
};

export const Icon = Template.bind({});
Icon.args = {
  title:'Button',
  label:'Click Me',
  disabled:false,
  type:'default',
  iconClassname:'bi-wallet'
};
