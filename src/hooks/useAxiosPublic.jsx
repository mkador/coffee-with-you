import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://coffee-with-you-server.vercel.app',
});
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
