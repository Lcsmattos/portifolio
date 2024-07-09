import styled from "styled-components";

export const SpecialityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 6%;

  h2 {
    color: #fff;
    font-size: 38px;
    text-align: center;
  }
  span {
    color: #00ff08;
  }

  @media screen and (max-width: 1040px) {
    margin-bottom: 5rem;
  }
`;

export const SpecialityContent = styled.div`
  display: flex;
  gap: 60px;

  @media screen and (max-width: 1040px) {
    flex-direction: column;
  }
`;

export const SpecialityBox = styled.div`
  color: #fff;
  padding: 40px;
  margin-top: 45px;
  border-radius: 20px;
  transition: 0.2s;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 28px;
    margin: 15px 0;
  }
  p {
    text-align: justify;
  }

  i {
    font-size: 70px;
    color: #00ff08;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #ffffff6e;
  }
`;
