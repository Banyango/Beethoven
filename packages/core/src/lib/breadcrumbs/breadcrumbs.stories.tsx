import { Story, Meta } from '@storybook/react';
import { Breadcrumbs} from './breadcrumbs';
import {Breadcrumb, IBreadcrumbsProps} from "./breadcrumb.props.interface";

export default {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
} as Meta;

const Template: Story<IBreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

const bread:Array<Breadcrumb> = [{
  href: '#',
  label: 'Home',
}, {
  href: '#',
  label: 'Jobs',
}];

export const Primary = Template.bind({});
Primary.args = {
  crumbs: bread,
};
