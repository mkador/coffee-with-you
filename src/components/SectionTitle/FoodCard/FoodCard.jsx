import React from 'react';

const FoodCard = ({item}) => {
    const {name,price,recipe,image} = item;
    return (
        <div className="card  bg-base-100 w-80 card-compact shadow-xl hover:opacity-30 translate-all duration-300">
  <>
    <img
     
      src={image}
      alt="Food" />
  </>
  <p className='text-orange-600 bg-slate-800 absolute mt-0 mr-4 text-2xl p-3 border-lg font-bold'>${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;