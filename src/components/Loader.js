import { LoaderWrapper } from "../pages/User/styles";
import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <LoaderWrapper>
      <Oval
        ariaLabel="loading-indicator"
        height={50}
        width={50}
        strokeWidth={1}
        strokeWidthSecondary={1}
        color="black"
        secondaryColor="white"
      />
    </LoaderWrapper>
  );
}
