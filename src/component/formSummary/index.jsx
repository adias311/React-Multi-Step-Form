import React from 'react';
import './index.css';
import { useSelector } from 'react-redux';

function FormSummary() {
  const plan = useSelector((state) => state.formSlice.plan);
  const addOns = useSelector((state) => state.formSlice.addOns);

  let planCost = plan.type === "Yearly" ? plan.price * 10 : plan.price;

  // Menghitung biaya addOns jika ada
  let addOnsCost = 0;
  if (plan.type === "Yearly") {
    addOnsCost = Object.keys(addOns).reduce((acc, addOn) => {
      return acc + (addOns[addOn] * 10);
    }, 0);
  } else {
    addOnsCost = Object.values(addOns).reduce((acc, addOn) => {
      return acc + addOn;
    }, 0);
  }

  let totalCost = planCost + addOnsCost;

  return (
    <>
      <section className='form_title'>
        <h2>Finishing Up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </section>

      <section className="form_body">
        <section className="summary">
          <div className="summary-plan">
            <p>{plan.name} <span>({plan.type})</span></p>
            <p>${planCost}/{plan.type === "Yearly" ? "yr" : "mo"}</p>
          </div>

          {Object.keys(addOns).map((addOn, index) => (
            <div className="summary-addOns" key={index}>
              <p>{addOn}</p>
              <p>+${addOns[addOn]}/{plan.type === "Yearly" ? "yr" : "mo"}</p>
            </div>
          ))}
        </section>

        <div className='summary-total'>
          <p>Total <span>(per month)</span></p>
          <p>+${totalCost}/mo</p>
        </div>
      </section>
    </>
  );
}

export default FormSummary;
