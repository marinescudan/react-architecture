import React from 'react';

export interface IHeroProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  subTilte: string;
  description: string;
  cta: {
    label: string;
    link: string;
  };
}

const Hero = ({}: IHeroProps) => {
  return <div>Hello 👋, I am a Hero component.</div>;
};

export default Hero;
