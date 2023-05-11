import React, { Component } from 'react';

import styled from 'styled-components';


const StyledCard = styled.section.attrs((props: ICardProps) => ({
  width: props.width || "100%",
  hasPadding: props.hasPadding || false,
}))`
  --container-padding: 20px;
  width: ${(props: ICardProps) => props.width}; // Falls back to 100%
  padding: ${(props: ICardProps) =>
    (props.hasPadding && "var(--container-padding)") || "none"};
`;


export interface ICardProps {
  hasPadding?: boolean;
  width?: string;
}

const Card = ({
  hasPadding,
  width,
}: ICardProps) => {
  return <StyledCard></StyledCard>;
};

export default Card;