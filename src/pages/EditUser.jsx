import axios from 'axios';
import { toast } from 'react-toastify';
import FormRow from '../components/FormRow';
import { Form, redirect } from 'react-router-dom';

export const action = async ({ request }) => {
  const token = localStorage.getItem('token');
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const resp = await axios.put(
      'https://retrocatcher.onrender.com/api/v1/user/update-user',
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    localStorage.setItem('token', resp.data.token);
    toast.success('changement de nom effectué');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const EditUser = () => {
  return (
    <>
      <div className="tuile form ">
        <img
          className="perso"
          src="/images/Perso/perso-fococlipping-standard.png"
          alt=""
        />

        <Form method="put">
          <FormRow
            type="text"
            name="name"
            labelText="nom"
            className="btn btn-block"
          />
          <button type="submit" className="btn btn-block">
            Remplacement du Nom
          </button>
        </Form>
        <button type="button" className="btn btn-block">
          déconnexion
        </button>
      </div>
    </>
  );
};
export default EditUser;
