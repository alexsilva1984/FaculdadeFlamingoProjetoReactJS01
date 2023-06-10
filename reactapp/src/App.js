import React, { useState } from "react";
import StepNavigation from "./stepNavigation";

function App() {

  const labelArray = ['Etapa 1', 'Etapa 2', 'Etapa 3', 'Etapa 4', 'Etapa 5']
  const [currentStep, updateCurrentStep] = useState(1);

  function updateStep(step) {
    updateCurrentStep(step);
  }

  return (
    <div className="App">
      <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
      <p>Etapa Selecionada: {currentStep}</p>
      <button className="primaryButton" disabled={currentStep === 1} onClick={() => updateStep(currentStep - 1)}>Etapa Anterior</button>
      <button className="primaryButton" disabled={currentStep === labelArray.length} onClick={() => updateStep(currentStep + 1)}>Proxima Etapa</button>
    </div>
  );
}

export default App;
