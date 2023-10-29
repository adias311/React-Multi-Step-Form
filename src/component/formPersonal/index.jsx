import React, { useState , useEffect } from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFormPersonal } from '../../redux/actions/formSlice';

function FormPersonal() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.formStep);

  useEffect(() => {
    console.table (data);
  }, [data]);



  const [formData, setFormData] = useState({
    name: data.nama || '',
    email: data.emailAddress || '',
    phone: data.phoneNumber || '',
  });
  
  const handleChange = (field, value) => {
    const updatedData = { ...formData, [field] : value };
    setFormData(updatedData);
    dispatch(setFormPersonal({ data: updatedData }));
  };

  return (
    <>
      <section className='form_title'>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number</p>
      </section>

      <section className="form_body">
        <div className="form_input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder='Enter your name'
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </div>
        <div className="form_input">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder='Enter your email'
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>
        <div className="form_input">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            placeholder='Enter your phone'
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
        </div>
      </section>
    </>
  );
}

export default FormPersonal;
