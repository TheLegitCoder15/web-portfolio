import { ReactNode } from "react";
import "../../styles/_button.scss";

type buttonProps = {
  text: string;
  onClickHandle?: () => void;
  icon?: ReactNode;
};

function Button({ text, onClickHandle, icon }: buttonProps) {
  return (
    <button className="btn" onClick={onClickHandle}>
      {text}
      {icon && <>{icon}</>}
    </button>
  );
}

export default Button;
