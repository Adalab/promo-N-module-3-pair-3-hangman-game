import React, { useState } from "react";
import "../styles/main.scss";

function App() {
  let [errors, setErrors] = useState(0);

  let handleError = () => {
    setErrors((errors += 1));
  };

  /*********/
  const [letter, setLetter] = useState("");
  //const regularExpression = /^[a-zA-Z]+(s*[a-zA-Z]*)*[a-zA-Z]+$/;

  /*function validarLetra(letter) {
    let regex =
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    return regex.exec(letter)[0];

  }*/

  //console.log(validarLetra(letter));

  const handleLastLetter = (ev) => {
    setLetter(ev.target.value);
    //console.log(regularExpression.exec(letter));
    //var slash = /\//;
    // console.log(letter.search(regularExpression));

    var exp = /[a-zA-Z]\d*/;

    console.log(exp.test(letter));
  };

  //console.log(typeof letter);

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <button className="btn" onClick={handleError}>
        Incrementar
      </button>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución: </h2>
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
            <h2 className="title">Letras falladas: </h2>
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
              Escribe una letra:{" "}
            </label>
            <input
              onKeyUp={handleLastLetter}
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
            />
          </form>
        </section>
        <section className={`dummy error-${errors}`}>
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
        </section>
      </main>
    </div>
  );
}

export default App;
