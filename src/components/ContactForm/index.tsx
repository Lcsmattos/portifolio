import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { Bars } from "react-loading-icons";

import { Button, ContactFormContainer, Form, Input, TextArea } from "./styles";
import { useState } from "react";

export function ContactForm() {
  const [disabled, setDisabled] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <ContactFormContainer id="form">
      <Fade duration={2000} direction="up">
        <h2>
          {t("fale")}
          <span> {t("comigo")}</span>
        </h2>
      </Fade>

      <Form
        method="POST"
        action="https://formsubmit.co/lcsmattos7@gmail.com"
        onSubmit={() => setDisabled(true)}
      >
        {/* <Input
          type="hidden"
          name="_next"
          value="https://lcsmattos.github.io/portifolio"
        /> */}
        <Fade duration={2000} direction="left">
          <Input type="text" name="nome" placeholder={t("nome")} required />
        </Fade>
        <Fade duration={2000} direction="right">
          <Input type="email" name="email" placeholder={t("email")} required />
        </Fade>
        <Fade duration={2000} direction="left">
          <Input type="tel" name="celular" placeholder={t("celular")} />
        </Fade>
        <Fade duration={2000} direction="right">
          <TextArea
            placeholder={t("mensagem")}
            required
            name="mensagem"
            id="mensagem"
          ></TextArea>
        </Fade>
        <Fade duration={2000} direction="up" style={{ display: "flex" }}>
          <Button type="submit" id="btn-enviar" disabled={disabled}>
            {disabled ? <Bars height={50} /> : <>{t("enviar")}</>}
          </Button>
        </Fade>
      </Form>
    </ContactFormContainer>
  );
}
