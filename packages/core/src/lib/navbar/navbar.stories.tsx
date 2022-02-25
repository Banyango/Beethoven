import { Story, Meta } from '@storybook/react';
import { Navbar } from './navbar';
import {NavbarLink} from "./navbar-link/navbar-link";

export default {
  component: Navbar,
  title: 'Navbar',
  name: 'Beethoven',
  icon: 'bi-house',
  url: '#'
} as Meta;

const Template: Story = args => {
  return <Navbar {...args}>
    <NavbarLink text="About" url="#"/>
    <NavbarLink text="FAW" url="#"/>
  </Navbar>;
};

export const Primary = Template.bind({});
Primary.args = {
  name: 'Beethoven',
  icon: 'bi-house',
  url: '#'
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  name: 'Beethoven',
  icon: 'bi-house',
  url: '#',
  collapsed: true
};
