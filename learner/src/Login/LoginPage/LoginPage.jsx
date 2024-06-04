import React from 'react';
import './LoginPage.scss'
import { MdContactMail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";


function LoginPage() {
  return (
    <div>
        <div className="login-container">
            <div className="l-space">
                <ul>
                    <li>
                    <MdContactMail  className='l-icon'/>
                    <input type="text" placeholder='Email ID' />
                    </li>
                    <li>
                    <MdLockOutline className='l-icon'/>
                    <input type="text" placeholder='Password' />
                    </li>
                    <li><button>We create the future ourselves.</button></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default LoginPage