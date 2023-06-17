import { render, screen } from '@testing-library/react';
import CustomTest from './CustomText';

describe('<CustomTest />', () => {
    it('should render heading', () => {
        render(<CustomTest />);
        expect(screen.getByRole('heading', { name: /teste/i })).toBeInTheDocument();
    });
});
