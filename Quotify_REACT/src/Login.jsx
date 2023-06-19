import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="login-container">
      <h2>Login</h2>
    
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit" onClick={handellogin}>Login</button>
      
    </div>
    
  );
}

export default Login;