import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Field from '../../component/form-field/Field';
import Submit from '../../component/buttons/form-btn/submit';
import Typewriter from '../../services/typewriter/Typewriter';

import "./login.css";
import "../../utility/loginRegister.css";

const Login = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with values: ", formState);
  }

  const navigate = useNavigate();

  return (
    <div className='login-page'>
        <div className="flex-container">
            <div className='left-container'>
              <div className="inner-container">
                <h1>Hello World</h1>
                <Typewriter text="Let's manage your day to day task" delay={100} />
              </div>
            </div>
            <div className='right-container'>
              <div className="inner-container">
                <p>Login</p>
                <form onSubmit={handleSubmit}>
                  <Field 
                    field_name="Username" 
                    input_type="text" 
                    value={formState.username} 
                    name="username" 
                    handleChanges={handleChange} 
                  />
                  <Field 
                    field_name="Password" 
                    input_type="password" 
                    value={formState.password} 
                    name="password" 
                    handleChanges={handleChange} 
                  />
                  <p>Don't have an account? <Link to="/register">Create an account</Link></p>
                  <Link to="/forget-password">Forget password?</Link>
                  <Submit btn_name={"Login"}/>
                </form >
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login;
