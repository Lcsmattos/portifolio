import { Fade } from "react-awesome-reveal";
import {
  SpecialityBox,
  SpecialityContainer,
  SpecialityContent,
} from "./styles";
import { useTranslation } from "react-i18next";

export function Speciality() {
  const { t } = useTranslation();
  return (
    <SpecialityContainer id="speciality">
      <Fade duration={2000} direction="up">
        <h2>
          {t("minhas")}
          <span> {t("especialidades")}</span>
        </h2>
      </Fade>

      <SpecialityContent>
        <Fade duration={2000} direction="up" cascade damping={0.2}>
          <SpecialityBox>
            <i className="bi bi-window-fullscreen"></i>
            <h3>Web</h3>

            <p>{t("web_texto")}</p>
          </SpecialityBox>

          <SpecialityBox>
            <i className="bi bi-phone"></i>
            <h3>Mobile</h3>

            <p>{t("mobile_texto")}</p>
          </SpecialityBox>

          <SpecialityBox>
            <i className="bi bi-diagram-3"></i>
            <h3>Back-end</h3>

            <p>{t("back_texto")}</p>
          </SpecialityBox>
        </Fade>
      </SpecialityContent>
    </SpecialityContainer>
  );
}
