import { render } from '@testing-library/react';

import TextField from './textfield';

describe('Textfield', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextField />);
    expect(baseElement).toBeTruthy();
  });
});
