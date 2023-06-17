import { render, screen } from '@testing-library/react';
import Box from './Box';

describe('<Box />', () => {
    it('should render Box component', () => {
        render(<Box />);
        expect(screen.getByRole('box')).toBeInTheDocument();
    });
});
