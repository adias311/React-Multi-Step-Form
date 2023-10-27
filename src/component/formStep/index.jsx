import React from 'react'

function FormStep({ stepNumber, title }) {
  return (
    <div className="step_info">
      <p>{stepNumber}</p>
      <div>
        <h6>STEP {stepNumber}</h6>
        <h5>{title}</h5>
      </div>
    </div>
  )
}

export default FormStep;