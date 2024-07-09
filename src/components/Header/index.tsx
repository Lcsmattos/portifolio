import { useTranslation } from "react-i18next";

import {
  HeaderContainer,
  Logo,
  LogoAndLanguageDiv,
  MenuNav,
  SwitchLanguage,
} from "./styles";
import LogoHeader from "../../assets/mini_logo_header.png";
import { useEffect, useState } from "react";

enum EnumLanguage {
  "pt" = "pt",
  "en" = "en",
}
export function Header() {
  const [language, setLanguage] = useState<EnumLanguage>();
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  useEffect(() => {
    setLanguage(i18n.language as EnumLanguage);
  }, []);

  const selectLanguage = (languageSelected: EnumLanguage) => {
    i18n.changeLanguage(languageSelected);
    setLanguage(languageSelected);
  };

  return (
    <HeaderContainer>
      <LogoAndLanguageDiv>
        <Logo src={LogoHeader} />
        <SwitchLanguage
          onChange={(e) => selectLanguage(e.target.value as EnumLanguage)}
          value={language}
        >
          <option value={EnumLanguage.pt}>Português</option>
          <option value={EnumLanguage.en}>English</option>
        </SwitchLanguage>
      </LogoAndLanguageDiv>

      <MenuNav>
        <ul>
          <li>
            <a href="#beginning">{t("inicio")}</a>
          </li>
          <li>
            <a href="#speciality">{t("especialidades")}</a>
          </li>
          <li>
            <a href="#aboutMe">{t("sobre")}</a>
          </li>
          <li>
            <a href="#download-cv">{t("curriculo")}</a>
          </li>
          <li>
            <a href="#form">{t("fale_comigo")}</a>
          </li>
        </ul>
      </MenuNav>
    </HeaderContainer>
  );
}
