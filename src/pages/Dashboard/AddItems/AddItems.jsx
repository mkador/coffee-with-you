import React from 'react';
import SectionTitile from '../../../components/SectionTitle/SectionTitile';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imge_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imge_hosting_api, imageFile, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (res.data.success) {
      const menuitems = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.price,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post('/menu', menuitems);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${data.name} is successfully added`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitile
        heading="Add an Items"
        subHeading="What's new!!"
      ></SectionTitile>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" my-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Reciepe name*</span>
              </div>
              <input
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
                  defaultValue="default"
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
                {...register('recipe', { required: true })}
                className="textarea textarea-accent"
                placeholder="About your reciepe"
              ></textarea>
            </label>
          </div>
          <div className="flex gap-3 w-full mt-6">
            <div>
              <input
                {...register('image', { required: true })}
                type="file"
                className="file-input file-input-bordered file-input-accent w-full max-w-xs"
              />
            </div>
            <div className="w-full">
              {' '}
              <button className="btn btn-active btn-accent w-full">
                Add Item <FaUtensils />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
