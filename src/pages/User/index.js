import { useEffect, useState } from "react";
import Counter from "../User/Counter";
import { getUser } from "../../services/axios";
import { Title } from "../../components/Title";
import Button from "../../components/Button";
import {
  Background,
  CircularImgUser,
  Container,
  P,
  StyledButtonContainer,
  Ul,
} from "./styles";
import { ManWrapper, WomanWrapper } from "../User/styles";
import { ReactComponent as Man } from "../../assets/man2.svg";
import { ReactComponent as Woman } from "../../assets/woman2.svg";
import Collapsible from "./Collapsible";
import Loader from "../../components/Loader";

export default function User() {
  const [user, setUser] = useState({});
  const [userAtras, setUserAtras] = useState({});
  const [userAdelante, setUserAdelante] = useState({});
  const [contador, setContador] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const traeUsuario = (func) => {
    setLoading(true);
    getUser().then((res) => {
      func(res.data.results[0]);
      setLoading(false);
    });
  };

  useEffect(() => {
    traeUsuario(setUser);
  }, []);

  const siguiente = () => {
    setUserAtras(user);
    if (isDisabled === false) {
      setContador(contador + 1);
      traeUsuario(setUser);
    } else if (isDisabled === true && contador === 0) {
      setContador(contador + 1);
      traeUsuario(setUser);
      setIsDisabled(false);
    } else if (isDisabled === true && contador !== 0) {
      setUser(userAdelante);
      setIsDisabled(false);
    }
  };

  const anterior = () => {
    setIsDisabled(true);
    setUserAdelante(user);
    setUser(userAtras);
  };

  return (
    <Background>
      <Container>
        <WomanWrapper>
          <Woman />
        </WomanWrapper>
        <ManWrapper>
          <Man />
        </ManWrapper>
        <Title>Generador De Personas</Title>
        <Collapsible label="Informacion Personal" state={true}>
          {loading ? (
            <Loader />
          ) : (
            <Ul flex={true}>
              <li>
                <Title underline="true" type="subtitle">
                  Nombre Completo:
                </Title>
                <P>
                  {user.name?.title} {user.name?.first} {user.name?.last}
                </P>
              </li>
              <li>
                <CircularImgUser src={user.picture?.large} alt={""} />
              </li>
            </Ul>
          )}
        </Collapsible>
        <Collapsible label="Dirección">
          {loading ? (
            <Loader />
          ) : (
            <Ul>
              <li>
                <Title underline="true" type="subtitle">
                  Provincia:
                </Title>
                <P>{user.location?.state}</P>
              </li>
              <li>
                <Title underline="true" type="subtitle">
                  Ciudad:
                </Title>
                <P>{user.location?.city}</P>
              </li>
              <li>
                <Title underline="true" type="subtitle">
                  Calle:
                </Title>
                <P>
                  {user.location?.street?.name} {user.location?.street?.number}
                </P>
              </li>
            </Ul>
          )}
        </Collapsible>
        <Collapsible label="Datos de Contacto">
          {loading ? (
            <Loader />
          ) : (
            <Ul>
              <li>
                <Title underline="true" type="subtitle">
                  Email:{" "}
                </Title>{" "}
                <P>{user.email}</P>
              </li>
              <li>
                <Title underline="true" type="subtitle">
                  Teléfono:
                </Title>
                <P>{user.phone}</P>
              </li>
            </Ul>
          )}
        </Collapsible>
        <StyledButtonContainer>
          <Button to="/">Volver</Button>
          <Button isDisabled={isDisabled} onClick={anterior}>
            Anterior
          </Button>
          <Button onClick={siguiente}>Siguiente</Button>
        </StyledButtonContainer>
        <Counter contador={contador} />
      </Container>
    </Background>
  );
}
