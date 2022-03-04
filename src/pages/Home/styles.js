import styled from "styled-components";

export const Background = styled.div`
  background-image: linear-gradient(
    to right top,
    #7cbfe5,
    #7bbbe6,
    #7bb7e7,
    #7db3e8,
    #80aee8,
    #79b4ee,
    #72b9f3,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 16px;
  color: #374955;
  letter-spacing: 2.5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ManWrapper = styled.svg`
  
    width: 500px;
    height: 500px;
    position: absolute;
    right: 0px;
    bottom: -30px;
  
  @media  (max-width: 350px) {
      width: 400px;
      height: 400px;
  }
  @media  (max-width: 200px) {
      width: 300px;
      height: 300px;
  }
  @media  (max-width: 100px) {
      width: 200px;
      height: 200px;
  }
  @media  (max-width: 50px) {
      width: 100px;
      height: 100px;
  }
  @media screen and (max-width: 25px) {
      width: 50px;
      height: 50px;
`;

export const WomanWrapper = styled.svg`
  width: 500px;
  height: 500px;
  position: absolute;
  left: -30px;
  top: -100px;
  transform: rotate(90deg);
`;

export const InsideButton = styled.div`
  display: flex;
`;

export const Icon = styled.img`
  height: 25px;
  width: 25px;
`;
