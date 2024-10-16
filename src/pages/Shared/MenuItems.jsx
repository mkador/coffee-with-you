import React from 'react';

const MenuItems = ({item}) => {
    const {name,price,image,recipe} = item;
    return (
        <div className='flex space-x-3 '>
            <img style={{borderRadius:"0 200px 200px 200px"}} className="w-30 h-20" src={image} alt="" />
            <div >
            <h3 className='mb-2 font-bold text-orange-600'>{name}</h3>
            <p>{recipe}</p>
            </div>
            <p className='text-yellow-600 text-2xl font-bold'> ${price}</p>
            
        </div>
        
        
    );
};

export default MenuItems;