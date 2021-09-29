import '../styles/App.scss';
import ahorcado from '../images/favicon-ahorcado.jpg';
import { useEffect, useState } from 'react';
import objectFunctions from '../services/api';

function App() {
  //estados
  const [introducedLetter, setintroducedLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [errors, setErrors] = useState([]);
  const [solution, setSolution] = useState([]);

  //funciones
  const functionGiveFeedback = () => {
    const patt = /^[a-zA-Záéíóúñü]{1}$/;
    if (!patt.test(introducedLetter)) {
      return 'ERROR: debes escribir una letra del abecedario castellano';
    } else {
      if (introducedLetter !== '' && introducedLetter !== ' ') {
        if (word.includes(introducedLetter)) {
          if (!solution.includes(introducedLetter)) {
            return 'Has acertado!';
          } else {
            return 'Ya has escrito esta letra antes y si es parte de la palabra.';
          }
        } else {
          if (!errors.includes(introducedLetter)) {
            return 'Has fallado... Prueba otra vez!';
          } else {
            return 'Ya has escrito esta letra antes y no es parte de la palabra.';
          }
        }
      }
    }
  };

  useEffect(() => {
    updateSolErr();
  }, [introducedLetter]);

  const updateSolErr = () => {
    const patt = /^[a-zA-ZáéíóúñüÁÉÍÓÚÜ]{1}$/;
    if (patt.test(introducedLetter)) {
      if (introducedLetter !== '' && introducedLetter !== ' ') {
        if (word.includes(introducedLetter)) {
          if (!solution.includes(introducedLetter)) {
            solution.push(introducedLetter);
            setSolution([...solution]);
          }
        } else {
          if (!errors.includes(introducedLetter)) {
            errors.push(introducedLetter);
            setErrors([...errors]);
          }
        }
      }
    }
  };

  const handleIntroducedLetter = (ev) => {
    const initialLetter = ev.currentTarget.value;
    const letter = initialLetter.toLowerCase();
    const patt = /^[a-zA-ZáéíóúñüÁÉÍÓÚÜ]{1}$/;
    if (patt.test(letter)) {
      setintroducedLetter(letter);
      if (!userLetters.includes(letter)) {
        userLetters.push(letter);
        setUserLetters(userLetters);
      }
    } else {
      setintroducedLetter(letter);
    }
  };

  useEffect(() => {
    objectFunctions.callToApi().then((responsedata) => setWord(responsedata));
    setErrors([]);
    setSolution([]);
  }, []);

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letraSoluc, i) => {
      const found = userLetters.findIndex((l) => l === letraSoluc);
      if (found >= 0) {
        return (
          <li key={`e_${i}`} className="letter">
            {letraSoluc}
          </li>
        );
      } else {
        return <li key={i} className="letter"></li>;
      }
    });
  };

  const renderErrorLetters = () => {
    const found = userLetters.filter((l) => !word.includes(l));
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
            <p>{functionGiveFeedback()}</p>
          </form>
        </section>
        <section className={`dummy error-${errors.length}`}>
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
//useState: array (número de errores) pintar errores en muñeco

//Acción tras solución correcta --> animacion
//Bonus: cambio idioma

//convertir en conponentes
