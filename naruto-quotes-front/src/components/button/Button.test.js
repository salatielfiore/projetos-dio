import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('render component button', () => {
    render(<Button>Test</Button>)

    const buttonEl = screen.getByText('Test');

    expect(buttonEl).toBeInTheDocument();

})