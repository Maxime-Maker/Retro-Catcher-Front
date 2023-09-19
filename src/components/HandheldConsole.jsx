import { Form } from 'react-router-dom';

const HandheldConsole = ({ handheldConsole }) => {
  return (
    <div key={handheldConsole[0]}>
      <h3>{handheldConsole[0]}</h3>{' '}
      <div className="tuile tuile-dashboard">
        {handheldConsole[1] &&
          handheldConsole[1].map((console) => {
            return (
              <div key={console.console_id} className="consoleselect">
                <h4 className="name-console">{console.name_console}</h4>
                <Form
                  method="post"
                  action={`/addFavoris/${console.console_id}`}
                >
                  <button type="submit">
                    <img
                      className="img game"
                      key={console.console_id}
                      src={console.url_image}
                      alt={console.name_console}
                    />
                  </button>
                </Form>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default HandheldConsole;
