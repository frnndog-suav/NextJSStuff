import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from './CustomButton';

const testFunction = jest.fn();

describe('<CustomButton />', () => {
    it('should render button with text "Clique aqui"', () => {
        render(<CustomButton buttonText="Clique aqui" action={testFunction} />);

        const customButton = screen.getByText(/Clique aqui/i);
        expect(customButton).toBeInTheDocument();
    });

    it('should trigger function from input once', () => {
        render(<CustomButton buttonText="Clique aqui" action={testFunction} />);
        const customButton = screen.getByRole('custom-button');
        fireEvent.click(customButton);
        expect(testFunction).toBeCalledTimes(1);
    });
});
