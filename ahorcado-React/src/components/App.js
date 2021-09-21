import '../styles/App.scss';
import ahorcado from '../images/favicon-ahorcado.jpg';
import { useState } from 'react';

function App() {
  //estados
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [introducedLetter, setintroducedLetter] = useState('');

  //funciones
  const handleErrors = (ev) => {
    console.log(ev.current.target);
    numberOfErrors++;
    setNumberOfErrors();
  };
  const handleIntroducedLetter = (ev) => {
    setintroducedLetter(ev.current.target.value);
  };

  //return
  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li>
            </ul>
          </div>
          <div className="feedback">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" for="last-letter">
              Escribe una letra:
            </label>
            <input
              onChange={handleIntroducedLetter}
              autocomplete="off"
              className="form__input"
              maxlength="1"
              type="text"
              name="last-letter"
              id="last-letter"
            />
            <br />
            <button
              className="button_increment"
              type="button"
              onChange={handleErrors}
            >
              Incrementar
            </button>
          </form>
        </section>
        <section className="dummy error-5">
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-{numberOfErrors} line"></span> {/* error */}
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;

//PENDIENTE---------------------
//escuchar: solución, letra introducida por usuaria-OK

//useState: array( letras correctas de la solución), array (letras falladas = introducida - correctas), array (letra introducida),array (número de errores)

//Acción tras solución correcta
