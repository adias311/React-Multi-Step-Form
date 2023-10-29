import React, { useEffect, useState } from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFormPlan } from '../../redux/actions/formSlice';


function FormPlan() {

  const dispatch = useDispatch();
  const { plan: plans } = useSelector((state) => state.formStep);

  const [selectedOption, setSelectedOption] = useState(null);
  const [planType, setPlanType] = useState(false);

  // List of checkboxes
  const checkboxes = [
    { name: 'arcade', priceMonthly: 9, priceYearly: 90 },
    { name: 'advanced', priceMonthly: 12, priceYearly: 120 },
    { name: 'pro', priceMonthly: 15, priceYearly: 150 },
  ];

  console.log(plans);

  const handleDivClick = (name) => {
    if (selectedOption !== name) {
      setSelectedOption(name);
      dispatch(setFormPlan({ plan: { name: name, type: plans.type } }));
    } else {
      setSelectedOption(null);
      dispatch(setFormPlan({ plan: { name: "", type: plans.type } }));
    }
  };

  useEffect(() => {

    if (planType == true) {
      dispatch(setFormPlan({ plan: { name: plans.name, type: "Yearly" } }))
    } else {
      dispatch(setFormPlan({ plan: { name: plans.name, type: plans.type } }))
    }

  }, [planType])

  return (
    <>
      {/* form title */}
      <section className='form_title'>
        <h2>Your Plan</h2>
        <p>You have the option of monthly or yearly billing</p>
      </section>

      {/* form body */}
      <section className="form_body">

        {/* Option Plan */}
        <div className="plan">
          {checkboxes.map((checkbox) => (
            <div className={checkbox.name + (selectedOption === checkbox.name ? ' active' : '')}
              key={checkbox.name}
              onClick={() => handleDivClick(checkbox.name)}>
              <label htmlFor={checkbox.name}>
                <h4>{checkbox.name.charAt(0).toUpperCase() + checkbox.name.slice(1)}</h4>
                {planType === true ?
                  <small>${checkbox.priceYearly}/yr</small>
                  :
                  <small>${checkbox.priceMonthly}/mo</small>
                }
                <input
                  type="radio"
                  id={checkbox.name}
                  checked={selectedOption === checkbox.name}
                  onChange={(e) => { e.preventDefault() }}
                  name="planOption"
                />
              </label>
            </div>
          ))}
        </div>

        {/* plan subs */}
        <div className='plan-subs'>
          <p>Monthly</p>
          <input type="checkbox" onChange={() => setPlanType((prev) => !prev)} />
          <p>Yearly</p>
        </div>
      </section>
    </>
  );
}

export default FormPlan;
