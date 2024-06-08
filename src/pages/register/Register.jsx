import React from 'react'
import { Link } from 'react-router-dom';
import Field from '../../component/form-field/Field';
import Submit from '../../component/buttons/form-btn/submit';
import Typewriter from '../../services/typewriter/Typewriter';
import "./register.css";
const Register = () => {
  return (
    <div className='register-page'>
        <div className="flex-container">
            <div className='left-container'>
                <h1>Hello World</h1>
                <Typewriter text="Let's manage your day to day task" delay={100} />
            </div>
            <div className='right-container'>
              <p>Register</p>
              
              <form action="">
                <Field field_name="Name" input_type="text" />
                <Field field_name="E-mail" input_type="email" />
                <Field field_name="Username" input_type="text" />
                <Field field_name="Password" input_type="password" />
                <p>Having an account? <Link to="/signup">Login Here</Link></p>
                <Submit btn_name={"Register"}/>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Register;