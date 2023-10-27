import React from 'react'
import './index.css'

function FormSummary() {
  return (
    <>
      <section className='form_title'>
        <h2>Finishing Up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </section>

      <section className="form_body">


        <section className="summary">

          <div className="summary-plan">
            <p>Arcade <span>(Monthly)</span> </p>
            <p>$9/mo</p>
          </div>

          <div className="summary-addOns">
            <p>Online service</p>
            <p>+$1/mo</p>
          </div>    
          <div className="summary-addOns">
            <p>Larger Storage</p>
            <p>+$2/mo</p>
          </div>
        

        </section>


        <div className='summary-total'>
          <p>Total <span>(per month)</span> </p>
          <p>+$12/mo</p>
        </div>

      </section>
    </>
  )
}

export default FormSummary;