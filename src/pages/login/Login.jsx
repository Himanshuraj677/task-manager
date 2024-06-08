import React from 'react'
import { Link } from 'react-router-dom';
import Field from '../../component/form-field/Field';
import Submit from '../../component/buttons/form-btn/submit';
import Typewriter from '../../services/typewriter/Typewriter';
import "./login.css";

const Login = () => {
  return (
    <div className='login-page'>
        <div className="flex-container">
            <div className='left-container'>
              <h1>Hello World</h1>
              <Typewriter text="Let's manage your day to day task" delay={100} />
            </div>
            <div className='right-container'>
              <p>Login</p>
              <form action="">
                <Field field_name="Username" input_type="text" />
                <Field field_name="Password" input_type="password" />
                <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
                <Link to="/forget-password">Forget password?</Link>
                <Submit btn_name={"Login"}/>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Login;