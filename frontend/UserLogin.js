import { useState } from 'react'
import styles from '../styles/UserLogin.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const UserLogin = () => {
  
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  
  const nav = useNavigate();
  const chk=()=>
    {
      const input = {username,password};
      fetch("http://localhost:8080/verify/checkcredentials",
        {
          method : "post",
          headers : {"Content-Type":"application/json"},
          body:JSON.stringify(input)
        }
      )
      .then(result => result.json())
      .then(result => {
        if(result)
          {
             nav("/Home")
          }
          else
           alert("invalid username or password")
      })
    }
  return (
    <div className={styles.loginpg} >
      <div className={styles.log}>
         <h3>Login</h3>
         <label>Name : </label>
         <input type='text' onChange={(e)=>setUsername(e.target.value)}/>

         <br></br><br></br>

         <label>Password : </label>
         <input type='text' onChange={(e)=>setPassword(e.target.value)}/>

         <br></br><br></br>

         <button style={{height:'40px',width :'80px'}} onClick={chk}>Login</button>
         
         <h3>Don't have account?</h3>
         <Link to={`/Account`} ><button style={{height:'50px',width :'170px'}}>Create new account</button></Link>
      </div>
    </div>
  )
}

export default UserLogin