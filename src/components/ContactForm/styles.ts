import styled from "styled-components";

export const ContactFormContainer = styled.div`
  padding: 6.25rem 6%;

  box-shadow: 0px 0px 40px 15px #ffffff15;

  h2 {
    color: #fff;
    font-size: 38px;
    text-align: center;
  }

  span {
    color: #00ff08;
  }
`;

export const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: #00000032;
  border: 0;
  outline: 0;
  padding: 20px 15px;
  border-radius: 15px;
  color: #fff;
  font-size: 18px;

  &::placeholder {
    color: #fff;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  background-color: #00000032;
  border: 0;
  outline: 0;
  padding: 20px 15px;
  border-radius: 15px;
  color: #fff;
  font-size: 18px;

  resize: none;
  min-height: 200px;
  max-height: 200px;

  &::placeholder {
    color: #fff;
  }
`;

export const Button = styled.button`
  padding: 20px 40px;
  text-align: center;
  margin-top: 10px;
  border: none;
  border-radius: 30px;
  background-color: #00ff08;
  color: #000;
  font-weight: 00;
  cursor: pointer;
  flex: 1;
  font-size: 20px;

  &:hover {
    box-shadow: 0px 0px 8px #00ff08;
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
    box-shadow: none;
    transform: scale(1);
    padding: 5px 0px;
  }
`;
