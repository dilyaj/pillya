import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>You're in! Now <a href='/login'>Log in.</a></h1>
      <img className='form-img-2' src='img/elderly-woman-taking-pills.jpg' alt='elderly-woman-taking-pills.jpg' />
    </div>
  );
};

export default FormSuccess;