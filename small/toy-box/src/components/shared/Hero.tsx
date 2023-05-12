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
  background-position: 0% 0%;
  background-size: auto auto;
  background-repeat: repeat;
  background-origin: padding-box;
  background-clip: border-box;
  background-attachment: scroll;
  background-color: transparent;
  width: 100%;
  padding: var(--container-padding);
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
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>{description}</p>
      <button>{cta.label}</button>
    </div>
  </StyledHero>;
};
