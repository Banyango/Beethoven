import { Story, Meta } from '@storybook/react';
import { ButtonGroup } from './button-group';
import Button from "../button/button";

export default {
  component: ButtonGroup,
  title: 'ButtonGroup',
} as Meta;

const Template: Story = (args) => {
  return <ButtonGroup {...args}>
    <Button label="123" type="default" onClick={()=> {}}/>
    <Button label="123" type="default" onClick={()=> {}}/>
    <Button label="123" type="default" onClick={()=> {}}/>
  </ButtonGroup>;
}

export const Primary = Template.bind({});
Primary.args = {};
