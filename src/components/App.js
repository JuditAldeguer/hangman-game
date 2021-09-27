import '../styles/App.scss';
import ahorcado from '../images/favicon-ahorcado.jpg';
import { useEffect, useState } from 'react';

function App() {
  //estados
  let [numberOfErrors, setNumberOfErrors] = useState(0);
  const [introducedLetter, setintroducedLetter] = useState('');
  const [word, setWord] = useState('katakroker');
  const [feedback, setFeedback] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [errors, setErrors] = useState([]);
  const [solution, setSolution] = useState([]);

  //funciones
  useEffect(() => {
    functionGiveFeedback();
  }, [introducedLetter]);

  const functionGiveFeedback = () => {
    if ((!introducedLetter === '') | ' ') {
      if (word.includes(introducedLetter)) {
        if (!solution.includes(introducedLetter)) {
          setFeedback('Has acertado!');
        } else {
          setFeedback(
            'ERROR: ya has escrito esta letra antes y si es parte de la palabra.'
          );
        }
      } else {
        if (!errors.includes(introducedLetter)) {
          setFeedback('Has fallado... Prueba otra vez!');
        } else {
          setFeedback(
            'ERROR: ya has escrito esta letra antes y no es parte de la palabra.'
          );
        }
      }
    }
  };

  const handleErrors = (ev) => {
    numberOfErrors++;
    setNumberOfErrors(numberOfErrors);
  };
  const handleIntroducedLetter = (ev) => {
    const letter = ev.currentTarget.value;
    const patt = /^[a-zA-Záéíóúñü]{1}$/;
    if (patt.test(letter)) {
      setintroducedLetter(letter);
      setFeedback('');
      if (letter !== '' && letter !== ' ') {
        if (!userLetters.includes(letter)) {
          userLetters.push(letter);
          setUserLetters(userLetters);
        }
      }
    } else {
      setFeedback('ERROR: debes escribir una letra del abecedario castellano');
      setintroducedLetter(letter);
    }
  };

  useEffect(() => {
    getSolution();
  }, []);

  const getSolution = () => {
    //fetch -----------------------------------------------------------
    //setWord();
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letraSoluc, i) => {
      const found = userLetters.findIndex((l) => l === letraSoluc);
      if (found >= 0) {
        if (!solution.includes(letraSoluc)) {
          solution.push(letraSoluc);
          setSolution(...solution);
        }
        return (
          <li key={i} className="letter">
            {letraSoluc}
          </li>
        );
      } else {
        if (!word.includes(letraSoluc) && !errors.includes(letraSoluc)) {
          errors.push(letraSoluc);
          setErrors(...errors);
        }
        return <li key={i} className="letter"></li>;
      }
    });
  };

  const renderErrorLetters = () => {
    const found = userLetters.filter((l) => !word.includes(l));
    console.log(found);
    return found.map((l) => <li className="letter">{l}</li>);
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
            <ul className="letters">{renderSolutionLetters()}</ul>
          </div>
          <div className="feedback">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">{renderErrorLetters()}</ul>
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
            <p>{feedback}</p>
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
//fetch: solucion aleatoria

//useState: array( letras correctas de la solución), array (número de errores)

//Acción tras solución correcta

//convertir en conponentes
