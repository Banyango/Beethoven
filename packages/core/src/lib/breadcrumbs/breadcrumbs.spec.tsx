import { render } from '@testing-library/react';

import Breadcrumbs from './breadcrumbs';

describe('Breadcrumbs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Breadcrumbs crumbs={undefined}/>);
    expect(baseElement).toBeTruthy();
  });
});
