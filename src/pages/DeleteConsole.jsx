import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';

import { toast } from 'react-toastify';

export const action = async ({ params }) => {
  const { id } = params;

  try {
    await customFetch.delete(`/favoris/${id}`);

    toast.success('Console supprimé de tes favoris');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect('/collection');
};
const DeleteConsole = () => {
  return <div>Addconsole</div>;
};
export default DeleteConsole;
