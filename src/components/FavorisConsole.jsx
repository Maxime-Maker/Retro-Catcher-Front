import { Form } from 'react-router-dom';

const FavorisConsole = ({ favori }) => {
  const { name_console, url_image, brand, about, console_id } = favori;

  return (
    <>
      <h4 className="name-console">{name_console}</h4>
      <Form method="DELETE" action={`/deletefavoris/${console_id}`}>
        <button type="submit">
          <img
            className="img game"
            key={console_id}
            src={url_image}
            alt={name_console}
          />
        </button>
        <div className="Brand">Fabriqué par :{brand}</div>
        <div className="about">{about}</div>
      </Form>
    </>
  );
};
export default FavorisConsole;
