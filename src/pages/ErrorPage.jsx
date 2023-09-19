import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="section">
      <div>
        <img className="erreur404" src="images/Perso/text404.png" alt="" />
      </div>

      <img className="section404" src="images/Perso/404.png" alt="error" />
      <Link>
        {' '}
        <button className="error"> Retour à l&apos;accueil</button>
      </Link>
    </section>
  );
};

export default ErrorPage;
