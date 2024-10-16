import React from 'react';
import MenuItems from '../Shared/MenuItems';
import Cover from '../Shared/cover';
import { Link } from 'react-router-dom';

const MenuCategories = ({items,title,img}) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid grid-cols-2 gap-4 mt-8 mb-16'>
                {
                    items.map(item=> <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>)
                    
                }
                
            </div>
            <Link to={`/orderFood/${title}`}><button className="btn btn-outline btn-warning mt-2 border-0 border-b-4 ">Order Now</button></Link>
        </div>
    );
};

export default MenuCategories;