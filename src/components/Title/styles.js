import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-weight: bold;

  text-decoration: ${(props) => (props.underline ? "underline;" : "none;")};

  ${(props) =>
    props.type === "subtitle" ? "font-size: 20px; " : "font-size: 70px;"};
`;
