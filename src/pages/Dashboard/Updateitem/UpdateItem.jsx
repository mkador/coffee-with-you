import React, { useEffect, useState } from 'react';
import SectionTitile from '../../../components/SectionTitle/SectionTitile';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';
import Swal from 'sweetalert2';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imge_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();

  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imge_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // show success popup
        // reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${data.name} is updated to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log('with image url', res.data);
  };

  return (
    <div>
      <SectionTitile
        subHeading="Refresh information"
        heading="Updaete Items"
      ></SectionTitile>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" my-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Reciepe name*</span>
              </div>
              <input
                defaultValue={name}
                {...register('name', { required: true })}
                type="text"
                placeholder="Reciepe name"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="flex gap-6">
            <div className="w-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Select a Category*</span>
                </div>
                <select
                  defaultValue={category}
                  {...register('category', { required: true })}
                  className="select select-bordered  w-full"
                >
                  <option
                    disabled
                    value="default"
                  >
                    Select a Category
                  </option>
                  <option value="salad"> Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Desserts</option>
                  <option value="drinks">Drinks</option>
                </select>
              </label>
            </div>

            <div className="w-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                  defaultValue={price}
                  {...register('price', { required: true })}
                  type="number"
                  placeholder="Reciepe name"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          <div>
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Reciepe details area*</span>
              </div>
              <textarea
                defaultValue={recipe}
                {...register('recipe', { required: true })}
                className="textarea textarea-accent"
                placeholder="About your reciepe"
              ></textarea>
            </label>
          </div>
          <div className="flex gap-3 w-full mt-6">
            <div>
              <input
                // defaultValue={image}
                {...register('image')}
                type="file"
                className="file-input file-input-bordered file-input-accent w-full max-w-xs"
              />
            </div>
            <div className="w-full">
              {' '}
              <button className="btn btn-active btn-accent w-full">
                Update Menu Item <FaUtensils />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
