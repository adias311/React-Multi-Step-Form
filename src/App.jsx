import React, { Suspense } from 'react';
import './App.css';
import FormStep from './component/formStep/index';
const FormPersonal = React.lazy(() => import('./component/formPersonal/index'));
const FormPlan = React.lazy(() => import('./component/formPlan/index'));
const FormAddOns = React.lazy(() => import('./component/formAddOns/index'));

function App() {
  return (
    <div className="form_container">

      <div className="step">
        <FormStep stepNumber={1} title={`YOUR INFO`}></FormStep>
        <FormStep stepNumber={2} title={`SELECT PLAN`}></FormStep>
        <FormStep stepNumber={3} title={`ADD-ONS`}></FormStep>
        <FormStep stepNumber={4} title={`SUMMARY`}></FormStep>
      </div>

      <div className="form">
        <form action="">
          {/* <FormPersonal /> */}
          {/* <FormPlan /> */}
          <FormAddOns />

          <section className="form_navigate">
            <button className='prev'>Go Back</button>
            <button className='next'>Next Step</button>
          </section>

        </form>
      </div>


    </div>
  );
}

export default App;
