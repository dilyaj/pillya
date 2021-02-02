import React from 'react'
import {useState, useEffect} from 'react';
import {Link } from 'react-router-dom';
import LoginForm from './Form/LoginForm';
import './Form/Form.css';
import FormSuccess from './Form/FormSuccess.js';


function Login (props) {
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false);



    const fetchUsers = async () => {
        try {
            const response = await fetch('https://gentle-garden-58755.herokuapp.com/users');
            const json = await response.json();
            setUsers(json);
        }catch(error) {
            console.log(error);
        }
    };

    

    useEffect(() => {
        fetchUsers();
    }, []);
    
    function submitForm() {
    setIsSubmitted(true);
  }
    return (
        <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img-3' src='img/login3.jpg' alt='young-and-elderly-embracing' />
        </div>
        {!isSubmitted ? (
          <LoginForm submitForm={submitForm} />
        ) : ( <FormSuccess />
        )}
      </div>
      </>
    );
}

export default Login;