import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 40px 6%;

  @media screen and (max-width: 1040px) {
    justify-content: space-evenly;
  }
`;

export const Logo = styled.img`
  width: 12.5rem;
  height: 12.5rem;
`;

export const MenuNav = styled.div`
  ul {
    list-style-type: none;
  }
  li {
    display: inline-block;
    padding: 0 1.875rem;
  }
  a {
    color: #fff;
    text-decoration: none;
    display: inline-block;
    transition: 0.2s;
  }
  a:hover {
    color: #7d7d7d;
    transform: scale(1.1);
  }

  @media screen and (max-width: 1040px) {
    width: 200px;
    line-height: 1.7rem;
  }
`;

export const SwitchLanguage = styled.select`
  display: flex;
  justify-content: center;
  color: white;
  background: transparent;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
  text-align: center;
  cursor: pointer;
`;

export const LogoAndLanguageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;

  p {
    color: white;
  }
`;

export const LanguageContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin-top: -40px;
`;
