import React, { useState } from 'react'
import './index.css'

function FormPersonal() {

  // List of checkboxes
  const checkboxes = [
    { name: 'online-service', label: 'online-service' },
    { name: 'larger-storage', label: 'larger-storage' },
    { name: 'custom', label: 'custom' },
  ];

  const [checkedBoxes, setCheckedBoxes] = useState({});

  const handleDivClick = (name) => {
    setCheckedBoxes((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <>
      {/* form title */}
      <section className='form_title'>
        <h2>Picks add-ons</h2>
        <p>Add-ons help enchange your gaming experience</p>
      </section>

      {/* form body */}
      <section className="form_body">

        {/* add-ons */}
        <div className="add-ons">
          {checkboxes.map((checkbox) => (
            <div className={checkbox.name + (checkedBoxes[checkbox.name] ? ' active' : '')} key={checkbox.name} onClick={() => handleDivClick(checkbox.name)}>
              <label htmlFor={checkbox.name}>{checkbox.label}
                <input type="checkbox" id={checkbox.name} checked={checkedBoxes[checkbox.name] || false} onChange={(e) => e.preventDefault} />
              </label>
            </div>
          ))}
        </div>

      </section>

    </>
  )
}

export default FormPersonal