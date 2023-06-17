interface CustomButtonProps {
    buttonText: string;
    action: () => void;
}

const CustomButton = ({ buttonText, action }: CustomButtonProps) => (
    <button role="custom-button" onClick={action}>
        {buttonText}
    </button>
);

export default CustomButton;
