import React, { useState } from 'react';
import './index.css';

/**
 * Renders a form for selecting a plan.
 *
 * @return {JSX.Element} The rendered form.
 */
function FormPlan() {

  // List of checkboxes
  const checkboxes = [
    { name: 'arcade', label: 'Arcade' },
    { name: 'advanced', label: 'Advanced' },
    { name: 'pro', label: 'Pro' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  /**
   * Handles the click event on a div element.
   *
   * @param {string} name - The name of the clicked div element.
   * @return {undefined} This function does not return a value.
   */
  const handleDivClick = (name) => {
    setSelectedOption(name);
  };

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
            <div className={checkbox.name + (selectedOption === checkbox.name ? ' active' : '')} key={checkbox.name} onClick={() => handleDivClick(checkbox.name)}>
              <label htmlFor={checkbox.name}>{checkbox.label}
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
          <input type="checkbox" />
          <p>Yearly</p>
        </div>
      </section>
    </>
  );
}

export default FormPlan;
