import { Link, Form, redirect } from 'react-router-dom';
import FormRow from '../components/FormRow';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useCallback, useEffect, useState } from 'react';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const resp = await axios.post(
      'https://retrocatcher.onrender.com/api/v1/auth/login',
      data
    );
    localStorage.setItem('token', resp.data.token);
    toast.success('Connexion réussie');

    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const [consoleData, setConsoleData] = useState();
  const [userCount, setUserCount] = useState();
  const fetchConsole = useCallback(async () => {
    try {
      const { data } = await axios(
        `https://retrocatcher.onrender.com/api/v1/console`
      );

      setConsoleData(data);
    } catch (error) {
      console.log(error?.response?.data?.msg);
      return redirect('/');
    }
  }, []);

  const fetchUserCount = useCallback(async () => {
    try {
      const { data } = await axios(
        `https://retrocatcher.onrender.com/api/v1/user`
      );

      setUserCount(data.count);
    } catch (error) {
      console.log(error?.response?.data?.msg);
      return redirect('/');
    }
  }, []);
  useEffect(() => {
    fetchConsole();
  }, [fetchConsole]);
  useEffect(() => {
    fetchUserCount();
  }, [fetchUserCount]);

  return (
    <div className="main-center">
      <div className=" tuile">
        <Form method="POST" className="form">
          <img
            className="perso"
            src="/images/Perso/perso-fococlipping-standard.png"
            alt=""
          />
          <div className="connexion">
            <FormRow type="email" name="email" />
            <FormRow type="password" name="password" labelText="Mot de passe" />

            <button className="btn btn-block">Let&#39;s GO</button>
          </div>
        </Form>

        <div className="inscription ">
          Vous n&apos;êtes pas membre ?
          <Link to="/register">S&apos;inscrire</Link>
        </div>
      </div>
      <h2 className="info-collection">Gérer sa collection</h2>
      <div className="info">
        <div className="console ">
          <span className="count">{consoleData && consoleData.count} </span>
          &nbsp; Consoles référencées
        </div>

        <div className="membres  ">
          <span className="count">{userCount} </span> &nbsp; membres de la tribu
        </div>
      </div>
      <article className="p1 card ">
        Vous êtes collectionneurs de consoles et jeux vidéo depuis plusieurs
        années et vous êtes toujours à l affût des nouveautés ou bien d items
        rares pour compléter votre collection? Ca y est vous arrivez au stade ou
        vous ne savez plus tout ce que vous possédez. Il va vous falloir l aide
        d un logiciel de gestion de collection.
      </article>
      <article className="p2 card ">
        Sur Retro Catcher vous pouvez interagir avec chaque fiche produit afin
        de l&apos;ajouter à votre collection. Pour cela, vous n&apos;aurez
        qu&apos;à cliquer la console afin de l&apos;ajouter a votre collection.
      </article>
      <article className="p3 card ">
        Afin de pouvoir naviguer facilement dans votre collection, celle-ci sera
        organisée en catégories et sous catégories. Vous pourrez retrouver
        toutes vos consoles, qu&apos;il s&apos;agisse de rétro (Megadrive, Nes,
        Game Boy, PS1, etc.) ou récent (PS5, Xbox Series X, Switch, etc.).
        Ainsi, l&apos;onglet « ma collection » présent sur la page vous permet
        de consulter tous les articles en votre possession en quelques clics.
      </article>
    </div>
  );
};

export default Login;
