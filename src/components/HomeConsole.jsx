import { Form } from 'react-router-dom';

const HomeConsole = ({ homeConsole }) => {
  return (
    <div>
      <h3>{homeConsole[0]}</h3>{' '}
      <div className="tuile tuile-dashboard">
        {homeConsole[1] &&
          homeConsole[1].map((console) => {
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
export default HomeConsole;
