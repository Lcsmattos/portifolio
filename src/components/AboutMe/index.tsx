import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

import AboutMeImage from "../../assets/Eu.jpeg";
import { AboutMeContainer, TextDiv, Image, Button } from "./styles";

export function AboutMe() {
  const { t } = useTranslation();

  return (
    <AboutMeContainer id="aboutMe">
      <Fade duration={2000} direction="left">
        <Image src={AboutMeImage} />
      </Fade>
      <Fade duration={2000} direction="right">
        <TextDiv>
          <h2>
            {t("titulo_about_me")} <span>Lucas Mattos.</span>
          </h2>

          <p>{t("about_paragrafo_1")}</p>
          <p>{t("about_paragrafo_2")}</p>
          <p>{t("about_paragrafo_3")}</p>

          <div>
            <a href="https://github.com/Lcsmattos" target="_blank">
              <Button>
                <i className="bi bi-github"></i>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/lcsmattos/" target="_blank">
              <Button>
                <i className="bi bi-linkedin"></i>
              </Button>
            </a>
            <a
              href="https://wa.me/5512997343377?text=Olá,%20Vim%20pelo%20link%20do%20seu%20portifólio"
              target="_blank"
            >
              <Button>
                <i className="bi bi-whatsapp"></i>
              </Button>
            </a>
          </div>
        </TextDiv>
      </Fade>
    </AboutMeContainer>
  );
}
