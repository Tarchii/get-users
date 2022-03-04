import { CounterWrapper, NumbersCounter } from "./styles";
import { Title } from "../../components/Title";
import AnimatedNumber from "react-animated-numbers";

export default function Counter(props) {
  return (
    <CounterWrapper>
      <Title type="subtitle">Contador: </Title>
      <NumbersCounter>
        <AnimatedNumber
          animateToNumber={props.contador}
          configs={[{ mass: 0.3, tension: 100, friction: 5 }]}
        ></AnimatedNumber>
      </NumbersCounter>
    </CounterWrapper>
  );
}
