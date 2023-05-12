import React from 'react';

import styled from 'styled-components';

const defaultHeroProps: IHeroProps = {
  image: {
      src: "",
      alt: "",
  },
  title: "Welcome to the Toy Box",
  subTitle: "The best toys in the world",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  cta: {
      label: "Shop Now",
      link: "/products",
  }
};


const StyledHero = styled.section.attrs((props: IHeroProps) => ({
  image: props.image || defaultHeroProps.image,
}))`
  --container-padding: 20px;
  
  background-image: url(${(props: IHeroProps) => props.image.src});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  width: 100%;
  padding: var(--container-padding);
`;
const StyledH1 = styled.h1`
  color: #fff;
  font-size: 3rem;
`;
const StyledH2 = styled.h2`
  color: #fff;
  font-size: 2rem;
`;
const StyledP = styled.p`
  color: #fff;
  font-size: 1rem;
`;

export interface IHeroProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  subTitle: string;
  description: string;
  cta: {
    label: string;
    link: string;
  };
}

export const Hero = ({
  image,
  title,
  subTitle,
  description,
  cta,
}: IHeroProps) => {
  return <StyledHero
    image={image}
    title={title}
    subTitle={subTitle}
    description={description}
    cta={cta}
  >
    <div>
      <StyledH1>{title}</StyledH1>
      <StyledH2>{subTitle}</StyledH2>
      <StyledP>{description}</StyledP>
      <button>{cta.label}</button>
    </div>
  </StyledHero>;
};
