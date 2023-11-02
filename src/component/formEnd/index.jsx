import React from 'react'
import './index.css'

function FormEnd() {
  return (
    <div className='thank_you'>
      <img width={100} src="../public/assets/images/icon-thank-you.svg" alt="" />
      <h1>Thank You!</h1>
      <p className='thanks' id='thanks'>Thanks for confirming your subscription! We hope you have
        fun using our platform. If you ever need support, please feel
        free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default FormEnd;