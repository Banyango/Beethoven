import { render } from '@testing-library/react';

import Progress from './progress';

describe('Progress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Progress percentage={50}/>);
    expect(baseElement).toBeTruthy();
  });
});
