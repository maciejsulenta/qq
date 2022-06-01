import styled from "styled-components";
import { mobile } from "../../utils/responsive";
import { theme } from "../../utils/theme";

export const Container = styled.div`
  height: 60vh;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.platinum};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: 3.5em;
  font-family: ${theme.fonts};
`;
export const Desc = styled.p`
  font-size: 1.2em;
  font-weight: 300;
  margin-bottom: 2em;
  ${mobile({ textAlign: "center" })};
`;
export const InputContainer = styled.div`
  width: 50%;
  max-width: 500px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 3px solid ${theme.colors.platinum};
  border-radius: 2em;
  overflow: hidden;
  ${mobile({ width: "80%" })};
`;
export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 1.5em;
  outline: none;
  font-family: ${theme.fonts};
  color: ${theme.colors.black};
`;
export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: ${theme.colors.darkBlue};
  color: ${theme.colors.platinum};
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.platinum};
    color: ${theme.colors.black};
  }
`;
