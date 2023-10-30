import React, { useEffect } from 'react';
import './App.css';
import FormStep from './component/formStep/index';
import FormPersonal from './component/formPersonal/index';
import FormPlan from './component/formPlan/index';
import FormAddOns from './component/formAddOns/index';
import FormSummary from './component/formSummary/index';
import { useSelector, useDispatch } from 'react-redux';
import { getStep } from './redux/actions/formSlice';
import formReducer from "../src/redux/actions/formSlice";


function App() {
  const dispatch = useDispatch();
  const step  = useSelector((state) => state.formSlice.step);

  const next = () => {
    if (step < 4) {
      dispatch(getStep({ step: step + 1 }));
    }
  };

  const prev = () => {
    if (step > 1) {
      dispatch(getStep({ step: step - 1 }));
    }
  };

  return (
    <div className="form_container">
      <div className="step">
        <FormStep stepNumber={1} title={`YOUR INFO`} isActive={step === 1}></FormStep>
        <FormStep stepNumber={2} title={`SELECT PLAN`} isActive={step === 2}></FormStep>
        <FormStep stepNumber={3} title={`ADD-ONS`} isActive={step === 3}></FormStep>
        <FormStep stepNumber={4} title={`SUMMARY`} isActive={step === 4}></FormStep>
      </div>

      <div className="form">
        <form action="">
          {step === 1 && <FormPersonal />}
          {step === 2 && <FormPlan />}
          {step === 3 && <FormAddOns />}
          {step === 4 && <FormSummary />}

          <section className="form_navigate">
            {step === 1 && <span></span>}
            {step > 1 && <button className='prev' type="button" onClick={prev}>Go Back</button>}
            {step < 4 && <button className='next' type="button" onClick={next}>Next Step</button>}
            {step === 4 && <button className='next' type="button" onClick={() => submitForm()}>Confirm</button>}
          </section>
        </form>
      </div>
    </div>
  );
}

export default App;
