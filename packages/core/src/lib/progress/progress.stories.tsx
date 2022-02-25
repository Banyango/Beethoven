import {useEffect, useState} from "react";
import { Progress } from './progress';
import { Story, Meta } from '@storybook/react';

export default {
  component: Progress,
  title: 'Progress',
} as Meta;

const Template: Story = (args) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (value < 100) {
        setValue(value + 10);
      } else {
        setValue(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [value]);

  return <Progress percentage={value}/>;
}

export const Primary = Template.bind({});
