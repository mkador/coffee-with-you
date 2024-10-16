import React from 'react';
import bgImage from '../../../assets/contact/banner.jpg'
import SectionTitile from '../../../components/SectionTitle/SectionTitile';
const CakeYourDay = () => {
    return (
        <section>
            <SectionTitile subHeading={"--- top most popular ---"}
            heading={"Delicious"}
            ></SectionTitile>
            <div className='bg-fixed mx-auto bg-opacity-30 bg-cover bg-no-repeat h-[450px]' style={{backgroundImage:`url(${bgImage})`}}>
            <div className='rounded-lg absolute mt-32 pl-10 pr-10 text-center mx-32  py-10 bg-red-300 text-white '>
           
            <p className='first-line:uppercase first-line:tracking-widest  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 '>Hello!! Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            </p>
          </div>
        </div>
        </section>
    );
};

export default CakeYourDay;