import React from 'react'
import {Link} from 'react-router-dom';

const Sign_up = () => {
  return (
    <>
    {/* <div className='progress_heading'>
      <h5 >Progress Tracker-Login</h5>
    </div> */}
    <div className='form'>
    
    <form action="#">
    <h3>Sign Up</h3>
            <div class="input-boxes">
                
              <div class="input-box">
                <label for="name">Username:<br/>
                <input type="text" class="signup_input-boxes" name='Username' placeholder="Enter your name" required/>
                </label>
              </div>
              <div class="input-box">
              <label for="email">Email:<br/>
                <input type="text" class="signup_input-boxes" name='email' placeholder="Enter your email" required/>
                </label>
              </div>
              <div class="input-box">
              <label for="password">Password:<br/>
                <input type="password" class="signup_input-boxes" name='password' placeholder="Enter your password" required/>
                </label>
              </div>
              <div class="button input-box">
                <input type="submit" className="submit_btn" value="Sign up"/>
              </div>
              <h5>Already Have an Account! <Link to="/login"> Login </Link>here</h5>
            </div>
      </form>
      </div>
      </>
  )
}

export default Sign_up
