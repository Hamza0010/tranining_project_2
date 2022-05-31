import React, { useState } from 'react'
import "./login.css"

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allRecord, setAllRecord] = useState([]);

  const submitForm= (e)=> {
    e.preventDefault();
    const newRecord ={name:name, email :email, password:password};
    setAllRecord([...allRecord, newRecord]);
    console.log(allRecord);

  }
 
  return (
    <>
    <div className='login'>
    <span className='loginTitle'>Login</span>
      <form className='loginForm' action="" onSubmit={submitForm}>
      <div>
          <input className='loginInput' type="text" name="name" id="name" placeholder='Name' 
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
         </div>  
        <div>
          <input className='loginInput' type="email" name="email" id="email" placeholder='Email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
         </div>  
         <div>
          <input className='loginInput' type="password" name="password" id="password" placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         </div>  
         <button className='loginButton' type="submit"> Login</button>
        </form>
        </div>
        <div>
          {
            allRecord.map((curr)=>{
              return(
                <div>
                  <p>{curr.name}</p>
                  <p>{curr.email}</p>
                  <p>{curr.password}</p>
                </div>
              )
            })
          }
        </div>
    </>
  )
}

export default Login