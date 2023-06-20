import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();


//   const handelRegistre = (event) => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     // TODO: Send registration request to server and handle response
   
//   };
async function handelRegistre(){
    try {
       console.log(name);
        console.log(email);
        console.log(password);
      const response = await axios.post('http://127.0.0.1:8000/api/register',{name,email,password});
     if (response.status === 200) {
        console.log(response.data)
        alert('success');
        setName("");
        setEmail("");
        setPassword("");
        navigate('/login');
      } 
    }catch(error) {
        alert('email déja existe');
       
    }
    
    }

  return (
    <div className="register-container">
      <h2>Register</h2>
      <label>
          name:
          <input type="email" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <button type="submit" onClick={handelRegistre}>Register</button>
      
    </div>

  )
}

export default Register;