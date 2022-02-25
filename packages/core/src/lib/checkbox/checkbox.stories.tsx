import { Story, Meta } from '@storybook/react';
import { Checkbox } from './checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
} as Meta;

const Template: Story = (args) => <Checkbox label={'Primary'} value={''} name={''} checked={false} disabled={false}
                                            onChange={()=>{}} onFocus={()=>{}} onBlur={()=>{}} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
