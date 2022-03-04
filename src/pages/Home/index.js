import user from "../../assets/user.png";
import Button from "../../components/Button";
import { Title } from "../../components/Title";
import {
  Background,
  Container,
  Icon,
  InsideButton,
  ManWrapper,
  WomanWrapper,
} from "./styles";
import { ReactComponent as Man } from "../../assets/man.svg";
import { ReactComponent as Woman } from "../../assets/woman.svg";

export default function Home() {
  return (
    <Background>
      <Container>
        <ManWrapper>
          <Man />
        </ManWrapper>
        <WomanWrapper>
          <Woman />
        </WomanWrapper>
        <Title>¡Bienvenido!</Title>
        <Title type="subtitle">
          Haz click en el botón para generar una persona
        </Title>
        <Button to={"/user"}>
          <InsideButton>
            Generar Persona
            <Icon src={user} alt="" />
          </InsideButton>
        </Button>
      </Container>
    </Background>
  );
}
