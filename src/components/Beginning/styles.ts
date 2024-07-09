import styled from "styled-components";

export const BeginningContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
  padding: 6.25rem 6%;

  @media screen and (max-width: 1040px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  h1 {
    color: #fff;
    font-size: 2.375rem;
    line-height: 2.5rem;
  }
  h1 span {
    color: #00ff08;
  }
  p {
    color: #fff;
    margin: 2.5rem 0;
    text-align: justify;
  }
  p span {
    color: #00ff08;
  }

  @media screen and (max-width: 1040px) {
    h1 {
      display: block;
    }
  }
`;

export const ImageContainer = styled.div`
  img {
    position: relative;
    animation: flutuar 2s ease-in-out infinite alternate;
  }

  @keyframes flutuar {
    0% {
      top: -30px;
    }
    100% {
      top: 0px;
    }
  }
`;

export const Image = styled.img`
  width: 25rem;
  height: 25rem;
`;

export const Button = styled.button`
  padding: 10px 40px;
  font-size: 18px;
  font-weight: 600;
  background-color: #00ff08;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 0px 8px #00ff08;
    transform: scale(1.1);
  }
`;
