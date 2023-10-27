import React from 'react'
import './index.css'

function FormPersonal() {
  return (
    <>
      <section className='form_title'>
        <h2>Personal info</h2>
        <p>Please provide your name , email address , and phone number</p>
      </section>

      <section className="form_body">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder='Enter your name' />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder='Enter your email' />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder='Enter your phone' />
        </div>
      </section>
    </>
  )
}

export default FormPersonal