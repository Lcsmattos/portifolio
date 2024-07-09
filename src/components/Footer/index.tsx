import Logo from "../../assets/mini_logo_header.png";

import {
  Button,
  ButtonContainer,
  Contacts,
  FooterContainer,
  FooterContent,
  LogoImage,
} from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoImage src={Logo} alt="logo do Lucas" />

        <ButtonContainer>
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
        </ButtonContainer>
      </FooterContent>

      <Contacts>
        <p>
          <i className="bi bi-mailbox-flag"></i>
          <a href="mailto:email@email.com">lcsmattos7@gmail.com</a>
        </p>
        <p>
          <i className="bi bi-telephone"></i>
          <a>+55 (12)9.9734-3377</a>
        </p>
      </Contacts>
    </FooterContainer>
  );
}
