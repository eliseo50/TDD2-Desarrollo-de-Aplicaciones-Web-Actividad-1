import Button from "react-bootstrap/Button";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

function CustomButton({
  text,
  onClick,
  className,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      onClick={onClick}
      size="lg"
      variant="secondary"
      className={`custom-btn ${className}`}
      {...props}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
