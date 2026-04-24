import CustomButton from "./CustomButton";
import "./FloatButton.scss";

interface FloatButtonProps {
  text: string;
  position: string;
  callback: () => void;
}

export function FloatButton({ text, position, callback }: FloatButtonProps) {
  return (
    <CustomButton
      text={text}
      onClick={callback}
      className={`float-btn float-btn--${position}`}
    />
  );
}
