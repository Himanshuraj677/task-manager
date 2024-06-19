import React from 'react'
import { Link } from 'react-router-dom';
import Field from '../../component/form-field/Field';
import Submit from '../../component/buttons/form-btn/submit';
import Typewriter from '../../services/typewriter/Typewriter';
import "./register.css";
import "../../utility/loginRegister.css";
const Register = () => {
  return (
    <div className='register-page'>
        <div className="flex-container">
            <div className='left-container'>
                <div className="inner-container">
                  <h1>Hello World</h1>
                  <Typewriter text="Let's manage your day to day task" delay={100} />
                </div>
            </div>
            <div className='right-container'>
              <div className="inner-container">
                <p>Register</p>
                <form action="">
                  <Field field_name="Name" input_type="text" />
                  <Field field_name="E-mail" input_type="email" />
                  <Field field_name="Username" input_type="text" />
                  <Field field_name="Password" input_type="password" />
                  <p>Having an account? <Link to="/login">Login Here</Link></p>
                  <Submit btn_name={"Register"}/>
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Register;