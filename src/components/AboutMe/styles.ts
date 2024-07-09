import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 10rem 6% 6.25rem 6%;

  @media screen and (max-width: 1040px) {
    flex-direction: column-reverse;
  }
`;

export const Image = styled.img`
  border: 2px solid #00ff08;
  border-radius: 20px;
  width: 350px;
  height: 450px;
`;

export const TextDiv = styled.div`
  color: #fff;

  h2 {
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 30px;
  }

  span {
    color: #00ff08;
  }

  p {
    margin: 20px 0;
    text-align: justify;
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

  &:hover {
    box-shadow: 0px 0px 8px #00ff08;
    transform: scale(1.1);
  }
`;
