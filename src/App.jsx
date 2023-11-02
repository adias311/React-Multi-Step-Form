import React, { Suspense } from 'react';
import './App.css';
import FormStep from './component/formStep/index';
import FormPersonal from './component/formPersonal/index';
import FormPlan from './component/formPlan/index';
import FormAddOns from './component/formAddOns/index';
import FormSummary from './component/formSummary/index';
const FormEnd = React.lazy(() => import('./component/formEnd'));
import { useSelector, useDispatch } from 'react-redux';
import { getStep } from './redux/actions/formSlice';


function App() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.formSlice.step);

  const next = () => {
    if (step < 5) {
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
        <FormStep stepNumber={4} title={`SUMMARY`} isActive={step === 4 || step === 5}></FormStep>
      </div>

      <div className="form" id='form_end'>
        <form action="">
          {step === 1 && <FormPersonal />}
          {step === 2 && <FormPlan />}
          {step === 3 && <FormAddOns />}
          {step === 4 && <FormSummary />}
          <Suspense fallback={<></>}>
            {step === 5 && <FormEnd />}
          </Suspense>

          {step !== 5 &&
            <section className="form_navigate">
              {step === 1 && <span></span>}
              {step > 1 && step < 5 && <button className='prev' type="button" onClick={prev}>Go Back</button>}
              {step < 4 && <button className='next' type="button" onClick={next}>Next Step</button>}
              {step === 4 && <button className='next' type="button" onClick={() => { next(); submitForm() }}>Confirm</button>}
            </section>}
        </form>
      </div>
    </div>
  );
}

export default App;
