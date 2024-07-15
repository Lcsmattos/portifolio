import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 0 6%;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  border-top: 2px solid #00ff08;
  padding: 20px 0;

  p i {
    color: #00ff08;
    font-size: 20px;
    margin-right: 15px;
  }

  p a {
    color: #fff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin: 10px 0;
    gap: 5px;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #00ff08;
  font-size: 30px;
  cursor: pointer;
  margin: 0 5px;
  transition: 0.2s;

  i {
    color: black;
  }
`;

export const LogoImage = styled.img`
  width: 13rem;
  height: 7.5rem;
  margin: 1rem;
`;
