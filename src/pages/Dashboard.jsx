import { Link, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import HomeConsole from '../components/HomeConsole';
import HandheldConsole from '../components/HandheldConsole';
HomeConsole;
import ScrollTop from '../components/ScrollTop';
export const loader = async () => {
  const token = localStorage.getItem('token');

  try {
    const {
      data: { user },
    } = await axios(`/api/v1/user/current-user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = await axios('/api/v1/console/byBrandAndCategory', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const {
      data: { count, consoles },
    } = await axios('/api/v1/favoris', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { user, data, numberOfFavoris: count, consoles };
  } catch (error) {
    console.log(error?.response?.data?.msg);
    return redirect('/');
  }
};

const Dashboard = () => {
  const navigate = useNavigate();

  const { user, data, numberOfFavoris } = useLoaderData();

  const { consoles } = data;
  const handheldConsoles = Object.entries(consoles.handheld);
  const homeConsoles = Object.entries(consoles.home_console);

  const logout = () => {
    localStorage.removeItem('token');
    toast.success('Déconnexion...');
    navigate('/');
  };
  return (
    <>
      <div className="tuile form ">
        <img
          className="perso"
          src="/images/Perso/perso-fococlipping-standard.png"
          alt=""
        />
        <p
          className="welcome
        "
        >
          Bienvenue &nbsp;{' '}
          <Link to="/edituser">
            <span className="utilisateur">{user.name} </span>
          </Link>
          <div className="nom">
            Si tu souhaites modifier ton nom clique dessus !
          </div>
        </p>
        <p className="posséde">
          Tu possédes <span className="utilisateur">{numberOfFavoris}</span>
          &nbsp;consoles dans ta <Link to="/collection"> collection</Link>.
        </p>

        <button type="button" className="btn btn-block" onClick={logout}>
          déconnexion
        </button>
      </div>
      <div className=" tuile ">
        <p className="collection">
          Ici tu peux choisir ta console pour l&#39;ajouter a ta collection en
          cliquant dessus.
        </p>
      </div>
      <h2 className="collection">Console de Salon</h2>
      <div>
        {homeConsoles.map((homeConsole) => {
          return <HomeConsole key={homeConsole[0]} homeConsole={homeConsole} />;
        })}
      </div>
      <h2 className="collection">Console Portable</h2>
      <div>
        {handheldConsoles.map((handheldConsole) => {
          return (
            <HandheldConsole
              key={handheldConsole[0]}
              handheldConsole={handheldConsole}
            />
          );
        })}
      </div>
      <ScrollTop />
    </>
  );
};

export default Dashboard;
