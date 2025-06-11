import React from 'react'
import "./Login.css"


function Login() {
    return (

        <>
            <div className='login-container'>
                <div className="login-box">
                    <h2>Login</h2>
                    <form>
                        <div className="user-box">
                            <input type="email" name="" required="" />
                            <label className='user-name'>Correo</label>
                            </div>
                            <div className="user-box">
                            <input type="password" name="" required="" />
                            <label className='password-text'>Password</label>
                        </div>
                    </form>
                </div>
            </div>

        </>

        
    )
}

export default Login