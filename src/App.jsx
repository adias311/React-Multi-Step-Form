import React, { useState, useEffect } from 'react';
import './App.css';
import FormStep from './component/formStep/index';
import FormPersonal from './component/formPersonal/index';
import FormPlan from './component/formPlan/index';
import FormAddOns from './component/formAddOns/index';
import FormSummary from './component/formSummary/index';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Ketika komponen pertama kali dimuat, cek apakah ada state yang tersimpan di localStorage
    const savedStep = localStorage.getItem('currentStep');
    if (savedStep) {
      setCurrentStep(Number(savedStep));
    }
  }, []);

  const next = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
      localStorage.setItem('currentStep', currentStep + 1); // Simpan langkah ke localStorage
    }
  };

  const prev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      localStorage.setItem('currentStep', currentStep - 1); // Simpan langkah ke localStorage
    }
  };

  return (
    <div className="form_container">
      <div className="step">
        <FormStep stepNumber={1} title={`YOUR INFO`} isActive={currentStep === 1}></FormStep>
        <FormStep stepNumber={2} title={`SELECT PLAN`} isActive={currentStep === 2}></FormStep>
        <FormStep stepNumber={3} title={`ADD-ONS`} isActive={currentStep === 3}></FormStep>
        <FormStep stepNumber={4} title={`SUMMARY`} isActive={currentStep === 4}></FormStep>
      </div>

      <div className="form">
        <form action="">
          {currentStep === 1 && <FormPersonal />}
          {currentStep === 2 && <FormPlan />}
          {currentStep === 3 && <FormAddOns />}
          {currentStep === 4 && <FormSummary />}

          <section className="form_navigate">
            {currentStep == 1 && <span></span> }
            {currentStep > 1 && <button className='prev' onClick={() => prev()}>Go Back</button>}
            {currentStep < 4 && <button className='next' onClick={() => next()}>Next Step</button>}
            {currentStep == 4 && <button className='next' onClick={() => submitForm()}>Confirm</button>}
          </section>

        </form>
      </div>
    </div>
  );
}

export default App;
