import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
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
          <a href="docs/CV-Lucas Mattos-2024-pt.pdf" target="_blank">
            <Button> {t("portugues")}</Button>
          </a>
          <a href="docs/CV-Lucas Mattos-2024-eng.pdf" target="_blank">
            <Button> {t("ingles")}</Button>
          </a>
        </ButtonContainer>
      </FadeButton>
    </DownloadCVContainer>
  );
}
