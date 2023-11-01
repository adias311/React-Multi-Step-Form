import React, { useEffect } from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSubmitForm } from '../../redux/actions/formSlice';

function FormSummary() {
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.formSlice.plan);
  const addOns = useSelector((state) => state.formSlice.addOns);
  const personal = useSelector((state) => state.formSlice.data);
  const summary = useSelector((state) => state.formSlice.summary);

  // Menghitung biaya rencana berdasarkan tipe
  let planCost = plan.type === "Yearly" ? plan.price * 10 : plan.price;

  // Menghitung biaya addOns berdasarkan tipe
  const addOnsCost = Object.keys(addOns).reduce((acc, addOn) => {
    acc[addOn] = plan.type === "Yearly" ? addOns[addOn] * 10 : addOns[addOn];
    return acc;
  }, {});

  // Menghitung total biaya
  let totalCost = planCost;
  for (const addOnCost of Object.values(addOnsCost)) {
    totalCost += addOnCost;
  }

  // Mengeksekusi setSubmitForm saat komponen dimuat
  useEffect(() => {
    dispatch(
      setSubmitForm({
        summary: {
          data: personal,
          plan: {
            name: plan.name,
            type: plan.type,
            price: planCost,
          },
          addons: addOnsCost,
        },
      })
    );
  }, []);

  console.log(summary);

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

          {Object.keys(addOnsCost).map((addOn, index) => (
            <div className="summary-addOns" key={index}>
              <p>{addOn}</p>
              <p>+${addOnsCost[addOn]}/{plan.type === "Yearly" ? "yr" : "mo"}</p>
            </div>
          ))}
        </section>

        <div className='summary-total'>
          <p>Total <span>({plan.type})</span></p>
          <p>${totalCost}/{plan.type === "Yearly" ? "yr" : "mo"}</p>
        </div>
      </section>
    </>
  );
}

export default FormSummary;
