import '../styles/App.scss';
import ahorcado from '../images/favicon-ahorcado.jpg';
import { useState } from 'react';

function App() {
  //estados
  let [numberOfErrors, setNumberOfErrors] = useState(0);
  const [introducedLetter, setintroducedLetter] = useState('');

  //funciones
  const handleErrors = (ev) => {
    numberOfErrors++;
    setNumberOfErrors(numberOfErrors);
  };
  const handleIntroducedLetter = (ev) => {
    const leter = ev.currentTarget.value;
    //  const patt = /^[a-zA-Z]{1}$;
    //  //  da error patt ------------
    // if (patt.test(leter)) {
    //   // Validar --> expresiones regulares --> test() Modulo1 --> ^[a-zA-Z]{1}$
    //   setintroducedLetter(leter);
    // } else {
    //   const text = 'escribe una letra';
    // }
    setintroducedLetter(leter); //eliminar cuando if funcione
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
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              onChange={handleIntroducedLetter}
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={introducedLetter}
            />
            <br />
            <button
              className="button_increment"
              type="button"
              onClick={handleErrors}
            >
              Incrementar
            </button>
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
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
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
          <span className="error-0 line"></span>
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
