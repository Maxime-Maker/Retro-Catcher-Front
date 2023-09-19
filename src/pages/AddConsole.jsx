import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';

import { toast } from 'react-toastify';

export const action = async ({ params }) => {
  const { id } = params;

  try {
    await customFetch.post(`/favoris/${id}`);

    toast.success('Console ajouté a tes favoris');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect('/dashboard');
};
const Addconsole = () => {
  return <div>Addconsole</div>;
};
export default Addconsole;
