import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
//   const handellogin = (event) => {
//     event.preventDefault();

//     // TODO: Send login request to server and handle response
//   };
  async function handellogin(){
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login',{email,password});
     if (response.status === 200) {
        alert('success login hello ' + response.data.user.name);
      } 
      localStorage.setItem('user-info',JSON.stringify(response));
      navigate('/');
    }catch(error) {
        console.log(error.response.statusText)
        alert('Error login');
    }
  }


  return (
<div class="container">
            <div class="row">
                <div class="col-md-11 mt-60 mx-md-auto">
                    <div class="login-box bg-white pl-lg-5 pl-0">
                        <div class="row no-gutters align-items-center">
                            <div class="col-md-6">
                                <div class="form-wrap bg-white">
                                    <h4 class="btm-sep pb-3 mb-5">Login</h4>
                                    {/* <form class="form" method="post"> */}
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="form-group position-relative">
                                                    <span class="zmdi zmdi-account"></span>
                                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" placeholder="Email Address"/>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group position-relative">
                                                    <span class="zmdi zmdi-email"></span>
                                                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" placeholder="Password"/>
                                                </div>
                                            </div>
                                            <div class="col-12 text-lg-right">
                                                <a href="#" class="c-black">Forgot password ?</a>
                                            </div>
                                            <div class="col-12 mt-30">
                                                <button type="submit" id="submit" onClick={handellogin} class="btn btn-lg btn-custom btn-dark btn-block">Sign In
                                                </button>
                                            </div>
                                        </div>
                                    {/* </form> */}
                                </div>
                            </div>
                            {/* <div class="col-md-6">
                                <div class="content text-center">
                                    <div class="border-bottom pb-5 mb-5">
                                        <h3 class="c-black">First time here?</h3>
                                        <a href="sign-up.html" class="btn btn-custom">Sign up</a>
                                    </div>
                                    <h5 class="c-black mb-4 mt-n1">Or Sign In With</h5>
                                    <div class="socials">
                                        <a href="#" class="zmdi zmdi-facebook"></a>
                                        <a href="#" class="zmdi zmdi-twitter"></a>
                                        <a href="#" class="zmdi zmdi-google"></a>
                                        <a href="#" class="zmdi zmdi-instagram"></a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    // <div className="login-container">
    //   <h2>Login</h2>
    
    //     <label>
    //       Email:
    //       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //     </label>
    //     <label>
    //       Password:
    //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //     </label>
    //     <button type="submit" onClick={handellogin}>Login</button>
      
    // </div>
    
  );
}

export default Login;