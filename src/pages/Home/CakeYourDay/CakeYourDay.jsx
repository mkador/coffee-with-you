import React from 'react';
import bgImage from '../../../assets/contact/banner.jpg'
import SectionTitile from '../../../components/SectionTitle/SectionTitile';
const CakeYourDay = () => {
    return (
        <section>
            <SectionTitile subHeading={"--- top most popular ---"}
            heading={"Delicious"}
            ></SectionTitile>
            <div className=' text-center align-center h-96 bg-contain bg-no-repeat bg-center   mb-10'
        style={{backgroundImage:`url(${bgImage})`}}>
          <div className='p-10 bg-black text-white mb-0'>
            <h2>Hello</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sed amet aspernatur consectetur fugiat dicta nisi id explicabo provident quis?
            </p>
          </div>
        </div>
        </section>
    );
};

export default CakeYourDay;