import styled from "styled-components";

const propsDisabled = `
transition: all 0.3s ease 0s;
border: 1px solid #999999;
background-color: #cccccc;
color: #666666;
cursor: default;
`;

const propsNotDisabled = `
transition: all 0.3s ease 0s;
box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
background: #374955;
color: white;
border: 2px solid black;
cursor: pointer;
outline: none;
padding: 4px 12px;
:hover {
background-color: #7cbfe5;
box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
color: #374955;
transform: translateY(-3px);
`;

export const Button = styled.button`
  width: 140px;  
  height: 45px;  
  border-radius: 45px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  font-size: 11px;
  margin: 1em;
  
  ${(props) => (props.isDisabled ? propsDisabled : propsNotDisabled)};
  }
`;
