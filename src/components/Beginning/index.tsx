import { Fade } from "react-awesome-reveal";
import TriangleLogo from "../../assets/main_transparent.png";
import {
  BeginningContainer,
  ImageContainer,
  TextContainer,
  Image,
  Button,
} from "./styles";
import { useTranslation } from "react-i18next";

export function Beginning() {
  const { t } = useTranslation();
  return (
    <BeginningContainer id="beginning">
      <Fade duration={2000} direction="up">
        <TextContainer>
          <h1>
            {t("titulo_beginning")}
            <span>.</span>
          </h1>
          <p>
            {t("beginning_paragrafo_1")} {t("beginning_paragrafo_2")}{" "}
            <span>front-end</span> {t("beginning_paragrafo_3")}{" "}
            <span>full-stack</span> {t("beginning_paragrafo_4")}{" "}
            <span>React, React Native, Node, e Typescript</span>.{" "}
            {t("beginning_paragrafo_5")} <span>PJ</span>{" "}
            {t("beginning_paragrafo_6")} <span>CLT</span>,{" "}
            {t("beginning_paragrafo_7")}
          </p>

          <Button>{t("entre_em_contato")}</Button>
        </TextContainer>
      </Fade>
      <Fade duration={2000} direction="up">
        <ImageContainer>
          <Image src={TriangleLogo} />
        </ImageContainer>
      </Fade>
    </BeginningContainer>
  );
}
