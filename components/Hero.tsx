"use client"
import Image from "next/image";
import { CustomButton } from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-16 padding-x ">
        <h1 className="hero__title">
          Alquila el auto de tu sueños facil y rapido!
        </h1>
        <p className="hero__subtitle">
         Autos usados y nuevos en alquiler, distintas marcas y modelos para tu experiencia
        </p>
        <CustomButton
          title="Explora nuestros autos"
          containerStyles="custom-btn bg-black text-white text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image ">
            <Image src="/hero.png" alt="hero" fill className="object-contain"/>
        </div>
            <div className="hero__image-overlay"></div>
      </div> 
      </div>
      
  );
};

export default Hero;
