import {Meta, Story} from '@storybook/react';

export const Typography: Story = () => {
  return (
    <>
      <h1>Typography</h1>
      <h1>h1. Example Page</h1>
      <h2>h2. Example Page</h2>
      <h3>h3. Example Page</h3>
      <h4>h4. Example Page</h4>
      <h5>h5. Example Page</h5>
      <h6>h6. Example Page</h6>
      <p>p. Example Page</p>
    </>
  )
};

export default {
  component: Typography,
  title: 'Typography',
} as Meta;

