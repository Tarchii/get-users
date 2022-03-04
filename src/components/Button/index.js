import { Button as CustomButton } from "./styles";
import { Link } from "react-router-dom";

export default function Button({ children, to, isDisabled, onClick }) {
  return to ? (
    <Link to={to}>
      <CustomButton>{children}</CustomButton>
    </Link>
  ) : (
    <CustomButton isDisabled={isDisabled} onClick={onClick}>
      {children}
    </CustomButton>
  );
}
