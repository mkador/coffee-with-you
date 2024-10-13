import React, { useEffect, useState } from 'react';
import SectionTitile from '../../../components/SectionTitle/SectionTitile';
import MenuItems from '../../Shared/MenuItems';

const PopularItems = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const menuData = data.filter(item=> item.category==="popular")
            setMenu(menuData);
        })
    },[])
    return (
        <section className='text-center'>
            <SectionTitile subHeading={"popular items"} heading={'Popular'}></SectionTitile>
            <div className='grid md:grid grid-cols-2 gap-4 mb-8'>
                {
                    menu.map(item=> <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>)
                    
                }
                
            </div>
            <button className="btn btn-outline btn-warning mt-2 border-0 border-b-4 ">View Full Menu</button>
        </section>
    );
};

export default PopularItems;