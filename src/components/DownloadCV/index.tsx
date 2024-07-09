import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import CVportuges from "../../docs/CV_Lucas_Mattos_2024_portugues.pdf";
import CVingles from "../../docs/CV_Lucas_Mattos_2024_ingles.pdf";

import {
  Button,
  ButtonContainer,
  DownloadCVContainer,
  FadeButton,
} from "./styles";

export function DownloadCV() {
  const { t } = useTranslation();
  return (
    <DownloadCVContainer id="download-cv">
      <Fade duration={2000}>
        <h2>
          {t("baixar")} <span>{t("curriculo")}.</span>
        </h2>
      </Fade>
      <FadeButton duration={2000} delay={500}>
        <ButtonContainer>
          <a href={CVportuges} target="_blank">
            <Button> {t("portugues")}</Button>
          </a>
          <a href={CVingles} target="_blank">
            <Button> {t("ingles")}</Button>
          </a>
        </ButtonContainer>
      </FadeButton>
    </DownloadCVContainer>
  );
}
