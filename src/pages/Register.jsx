import { Form, Link, redirect } from 'react-router-dom';
import FormRow from '../components/FormRow.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const resp = await axios.post('/api/v1/auth/register', data);
    localStorage.setItem('token', resp.data.token);
    toast.success('Inscription réussie');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <div className="main-register">
      <div className="login">
        <Form method="POST" className=" form">
          <img
            className="perso"
            src="/images/Perso/perso-fococlipping-standard.png"
            alt=""
          />

          <FormRow type="text" name="name" labelText="nom" />
          <FormRow type="email" name="email" />
          <FormRow type="password" name="password" labelText="mot de passe" />
          <button className="btn btn-block">S&apos;inscrire</button>
          <p
            style={{
              textAlign: 'center',
              marginTop: '1em',
            }}
          >
            Vous êtes déjà membre ? <Link to="/">Se connecter</Link>
          </p>
        </Form>
      </div>
      <div className="want ">
        <img src="/images/Perso/iwanty.png" alt="i want you" />
      </div>
    </div>
  );
};
export default Register;
