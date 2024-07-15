import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

export const DownloadCVContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6.25rem 6% 10rem 6%;

  h2 {
    color: #fff;
    font-size: 2.5rem;
    line-height: 2.5rem;
    margin-bottom: 1.875rem;
  }
  span {
    color: #00ff08;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  a {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  @media screen and (max-width: 1040px) {
    flex-direction: column;

    a {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  padding: 5px 15px;
  border-radius: 30px;
  border: none;
  background-color: #00ff08;
  font-size: 1.562rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  flex: 1;
  color: black;

  &:hover {
    box-shadow: 0px 0px 8px #00ff08;
    transform: scale(1.05);
  }

  @media screen and (max-width: 1040px) {
    font-size: 1.2rem;
  }
`;

export const FadeButton = styled(Fade)`
  width: 100%;
  display: flex;
  justify-content: center;
`;
