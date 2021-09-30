const MainWriten = (props) => {
  //functions
  const handleChange = (ev) => {
    props.handleIntroducedLetter(ev.currentTarget.value);
  };

  //html
  return (
    <section>
      <div className="solution">
        <h2 className="title">Solución:</h2>
        <ul className="letters">{props.renderSolutionLetters()}</ul>
      </div>
      <div className="feedback">
        <h2 className="title">Letras falladas:</h2>
        <ul className="letters">{props.renderErrorLetters()}</ul>
      </div>
      <form className="form" onSubmit={(ev) => ev.preventDefault()}>
        <label className="title" htmlFor="last-letter">
          Escribe una letra:
        </label>
        <input
          onChange={handleChange}
          autoComplete="off"
          className="form__input"
          maxLength="1"
          type="text"
          name="last-letter"
          id="last-letter"
          value={props.introducedLetter}
        />
        <br />
        <p>{props.functionGiveFeedback()}</p>
      </form>
    </section>
  );
};

export default MainWriten;
