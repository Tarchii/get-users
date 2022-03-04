import { StyledTitle } from "./styles";

export function Title({ children, type, underline }) {
  return (
    <StyledTitle type={type} underline={underline}>
      {children}
    </StyledTitle>
  );
}
