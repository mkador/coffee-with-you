import React from 'react';

const SectionTitile = ({subHeading,heading}) => {
    return (
        <div className='mx-auto mb-8 text-center md:w-4/12'>
            <p className='text-orange-500 py-1'>--- {subHeading} ---</p>
            <h2 className='text-3xl text-yellow-700 font-mono uppercase border-y-4 py-2'>{heading}</h2>
        </div>
    );
};

export default SectionTitile;