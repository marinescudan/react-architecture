import React from 'react';
import styled from 'styled-components';

export interface IButtonProps {
  onClick?: () => void;
  text?: string;
  bg?: string;
}

const StyledButton = styled.button`
  background-color: ${ (props:IButtonProps) => props.bg? props.bg : "white"};
  font-size: 32px;
  color: white;
`;

const Button = ({
  onClick,
  text,
}: IButtonProps) => {
  return <StyledButton> {text} </StyledButton>;
};

export default Button;