import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const content = [
  " incepe invatarura 📖",
  " incepe primul job 💼",
  " munceste mult 🔑",
  " inveseste banii cu succes 💰",
  " mergi in vacanta 👓",
];

function App() {
  const [step, functiaDinUseState] = useState(1);
  const [urare, schimbaUrarea] = useState("Munca, si iar munca!");
  const [apperance, updateVisibility] = useState(true);

  function handlePrevious() {
    if (step > 1) functiaDinUseState(step - 1); 
    if (step === 5) schimbaUrarea("Munca, si iar munca!");
  }
 

  function handleNext() {
    if (step < 5) functiaDinUseState(step + 1);
    if (step === 4) schimbaUrarea("Numai asa reusesti");
  }



  return (
    <> 
      {apperance && <div className="primaryContainer">
        <div className="stepsIndexes">
          {content.map((elem, _, arr) => (
            <Span etapa={step} text={arr.indexOf(elem) + 1} key={elem} />
          ))}
        </div>
        <span className="middleParagraph">
          Etapa{step}:{content[step - 1]}
        </span>
        <span className="middleParagraph">{urare}</span>
        <div className="btnContainer">

          
          <button type="buttonType" onClick={handlePrevious}>
            Inapoi
          </button>
          <button type="buttonType" onClick={handleNext}>
            Inainte
          </button>
        </div>
      </div>}
      <button onClick={()=> updateVisibility(!apperance)} className="closeBtn">✕</button>
    </>
  );
}

function Span({ etapa, text }) {
  console.log(etapa, text);
  return (
    <span className={`eachStep ${etapa >= text ? "eachStepActive" : ""}`}>
      {text}
    </span>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
