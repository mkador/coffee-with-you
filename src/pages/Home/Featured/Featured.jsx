import React from 'react';
import SectionTitile from '../../../components/SectionTitle/SectionTitile';
import featuredImage from '../../../assets/shop/banner2.jpg'
import backgroundImage from '../../../assets/others/cake.jpg'
const Featured = () => {
    return (
        <section className='mt-24 mb-24 align-center bg-fixed bg-cover bg-opacity-40  bg-no-repeat bg-center' style={{backgroundImage:`url(${backgroundImage})`}}>
            <SectionTitile subHeading={"check it out"} heading={"Featured Item"}></SectionTitile>
            <div className='md:flex justify-center items-center py-8 px-16'>
                <div>
                <img className='rounded-lg' src={featuredImage} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p className='text-yellow-600 text-xl'>October 10, 2024</p>
                    <p className=' text-2xl uppercase text-orange-600 font-semibold py-2'>Where can I get it?</p>
                    <p className='  text-white font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quia ducimus reprehenderit reiciendis soluta eaque.</p>
                    <button className="btn btn-outline btn-warning mt-2 border-0 border-b-4 ">Buy Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;