//styles
import '../styles/App.scss';
// //images
// import ahorcado from '../images/favicon-ahorcado.jpg';
//react
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
//services
import objectFunctions from '../services/api';
//components
import Header from './Header';
import Play from './Play';
import MainDrawn from './MainDrawn';
import Footer from './Footer';
import Loading from './Loading';

function App() {
  //estados
  const [introducedLetter, setintroducedLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [errors, setErrors] = useState([]);
  const [solution, setSolution] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    updateSolErr();
  }, [introducedLetter]);

  const handleIntroducedLetter = (value) => {
    const initialLetter = value;
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
    setIsLoading(true);
    objectFunctions.callToApi().then((responsedata) => setWord(responsedata));
    setErrors([]);
    setSolution([]);
    setUserLetters([]);
    setintroducedLetter('');
    setIsLoading(false);
  }, []);

  const handleChange = (ev) => {
    setErrors([]);
    setSolution([]);
    setUserLetters([]);
    setintroducedLetter('');
    setWord(ev.currentTarget.value);
  };

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

  const handleLoad = () => {
    setIsLoading(true);
  };
  //return
  return (
    <div className="page" onLoad={handleLoad}>
      <Loading loading={isLoading} />
      {/* da error - nunca se ve------------------------------------------------------ */}
      <Header />
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <Play
              renderSolutionLetters={renderSolutionLetters}
              renderErrorLetters={renderErrorLetters}
              handleIntroducedLetter={handleIntroducedLetter}
              introducedLetter={introducedLetter}
              functionGiveFeedback={functionGiveFeedback}
            />
          </Route>
          <Route path="/instructions">
            <section className="instructions">
              <h2>Instructions</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Labore, deleniti magnam rem aliquam quis officia odio eius
                voluptate maiores, vel ad fugiat perferendis necessitatibus,
                modi suscipit nemo at magni delectus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium animi voluptatem quis impedit amet in dicta soluta
                explicabo, fugit magni mollitia, pariatur eos, repellendus aut
                esse recusandae minima eum eaque.
              </p>
            </section>
          </Route>
          <Route path="/options">
            <section className="instructions">
              <h2>Estas son las opciones del juego</h2>
              <ul>
                <li>
                  <h3>Multijugador </h3>
                  <form onSubmit={(ev) => ev.preventDefault()}>
                    <label className="title" htmlFor="word">
                      Escribe aquí la palabra que hay que adivinar:
                    </label>
                    <input
                      autoFocus
                      autoComplete="off"
                      className="form__input"
                      maxLength="15"
                      type="text"
                      id="word"
                      name="word"
                      value={word}
                      onChange={handleChange}
                    />
                  </form>
                </li>
                <li>
                  Cambio de idioma
                  <ul>
                    <li>Inglés</li>
                    <li>Español</li>
                  </ul>
                </li>
              </ul>
            </section>
          </Route>
        </Switch>

        <MainDrawn errors={errors} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

//PENDIENTE---------------------
//Acción tras solución correcta --> animacion
//Bonus: cambio idioma

//convertir en conponentes e importar el Sass a cada componente
//añadir defaultProps y PropTypes
//Hacer destructuring de las props

//revisar 1r letra feedback
