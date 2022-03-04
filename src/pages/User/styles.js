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
`;

export const Container = styled.div`
  padding: 35px;
  color: #374955;
  letter-spacing: 2.5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 100vw;
  max-height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  overflow-y: auto;
`;

export const StyledCollapsible = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const StyledToggle = styled.button`
  background-color: #374955;
  border: unset;
  cursor: pointer;
  font: unset;
  padding: 0.5rem;
  border-radius: 10px;
  color: white;
  margin-bottom: 0.5rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  :hover {
    background-color: black;
    transition: background-color 0.5s, box-shadow 0.5s;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledCollapsibleContent = styled.div`
  border: solid 3px #383838;
  border-radius: 15px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;

  background-color: #7aa8c9;
`;

export const StyledParentContent = styled.div`
  ${(props) =>
    props.state
      ? "height: " + props.height + "px; transition: height ease 1s; "
      : "height: 0px; transition: height ease 0.5s;"};
  overflow: hidden;
`;

export const ImgUser = styled.img`
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
`;

export const CircularImgUser = styled(ImgUser)`
  width: 150px;
  height: 150px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin-left: 5px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CounterWrapper = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  border: 2px solid black;
  background-color: #7cbfe5;
  border-radius: 45px;
  box-shadow: 0 13px 13px black;
  cursor: default;
  position: fixed;
  left: 370px;
  top: 240px;
`;

export const NumbersCounter = styled.div`
  padding-left: 5px;
  font-weight: bolder;
  font-size: 30px;
  margin: 5px;
  cursor: default;
`;

export const ManWrapper = styled.div`
  svg {
    width: 1300px;
    height: 1300px;
    position: absolute;
    right: -580px;
  }
`;

export const WomanWrapper = styled.div`
  svg {
    width: 1300px;
    height: 1300px;
    position: absolute;
    left: -580px;
    top: 250px;
    transform: scaleX(-1);
  }
`;

export const P = styled.p`
  cursor: default;

  &:hover {
    transition: text-shadow, color 0.5s;
    color: #222d34;
    text-shadow: 2px 2px rgba(14, 70, 51, 0.4);
  }
`;

export const Ul = styled.ul`
  list-style: none;
  ${(props) => (props.flex ? "display: flex;" : null)}
`;

export const LoaderWrapper = styled.div`
  margin: auto auto auto auto;
`;
