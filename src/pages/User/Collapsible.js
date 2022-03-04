import { useRef, useState } from "react";
import {
  StyledCollapsible,
  StyledCollapsibleContent,
  StyledParentContent,
  StyledToggle,
} from "./styles";

export default function Collapsible({ label, children, state }) {
  const [isOpen, setIsOpen] = useState(state);

  const parentRef = useRef();

  let height;
  if (parentRef.current) height = parentRef.current.scrollHeight;

  return (
    <StyledCollapsible>
      <StyledToggle onClick={() => setIsOpen(!isOpen)} state={isOpen}>
        {label}
      </StyledToggle>
      <StyledParentContent state={isOpen} ref={parentRef} height={height}>
        <StyledCollapsibleContent>{children}</StyledCollapsibleContent>
      </StyledParentContent>
    </StyledCollapsible>
  );
}
