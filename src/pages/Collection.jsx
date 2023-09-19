import { Link, useLoaderData } from 'react-router-dom';
import ScrollTop from '../components/ScrollTop';
import FavorisConsole from '../components/FavorisConsole';

const Collection = () => {
  const { user, consoles: favoris } = useLoaderData();

  return (
    <>
      <div className="tuile form ">
        <img
          className="perso"
          src="/images/Perso/perso-fococlipping-standard.png"
          alt=""
        />
        <Link to="/dashboard"> Retour au choix des consoles</Link>.
      </div>
      <h2 className="collection">Voici la liste de tes favoris.</h2>
      <div className=" tuile ">
        <p className="collection">
          Si tu souhaites supprimer une console de tes favoris, il te suffit de
          cliquer dessus.
        </p>
      </div>
      <div className="select-favoris ">
        <div>
          {favoris.map((favori, index) => {
            return <FavorisConsole key={index} favori={favori} />;
          })}
        </div>
      </div>
      <ScrollTop />
    </>
  );
};
export default Collection;
