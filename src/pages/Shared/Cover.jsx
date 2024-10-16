import React from 'react';
import { Parallax } from 'react-parallax';
const Cover = ({img,title}) => {
    return (
        <Parallax
        blur={{ min: -150, max: 150 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div
  className="hero h-[450px] bg-cover bg-no-repeat bg-center">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
     
    </div>
  </div>
</div>
    </Parallax>
        
    );
};

export default Cover;