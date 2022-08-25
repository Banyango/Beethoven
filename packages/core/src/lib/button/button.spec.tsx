import { render } from '@testing-library/react';

import Button from './button';


describe('Button', () => {
  it('should render icon when iconClassname is defined.', () => {
    const props = {
      label: 'Button',
      onClick: jest.fn(),
      iconClassname: 'icon-classname',
    }

    const component = render(<Button {...props} type="default"/>);

    const icon = component.getAllByTestId('icon');

    expect(icon.length).toBe(1);
  });

  it('should not render icon when iconClassname is not defined.', () => {
    const props = {
      label: 'Button',
      onClick: jest.fn(),
    }

    const component = render(<Button {...props} type="default"/>);

    const icon = component.queryByTestId('icon');

    expect(icon).toBeNull()
  });
});
