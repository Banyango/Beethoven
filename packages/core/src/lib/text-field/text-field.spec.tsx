import { render } from '@testing-library/react';
import TextField from "./text-field";

describe('Textfield', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextField style="default" />);
    expect(baseElement).toBeTruthy();
  });
});
