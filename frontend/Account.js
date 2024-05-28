import { useState } from 'react'
import styles from '../styles/Account.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Account = () => {

  const [username,setuserName] = useState();
  const [password,setPassword] = useState();
  const [email,setEmail] = useState();
  const [contact,setContact] = useState();
  const nav = useNavigate();
  
  const create=async()=>
    {
      const res = await axios.get("http://localhost:8080/verify/findid");
      const id = res.data;
      
      const data = {id,username,password,email,contact};
      fetch("http://localhost:8080/verify/add",
        {
          method : "post",
          headers : {"Content-type" : "application/json"},
          body:JSON.stringify(data)
        }
      )
      .then(result=>result.json())
      .then(result =>{
          if(result)
            nav("/UserLogin")
          else
           alert("invalid")
      })
    }
  return (
    <>
      <div className={styles.outcont}>
        <div className={styles.cont}>
            <h3>Create your Account</h3>
            <label>Name : </label>
            <input type='text' onChange={(e)=>setuserName(e.target.value)}></input>
            <br/><br/>
            <label>Email Id : </label>
            <input type='email' onChange={(e)=>setEmail(e.target.value)}></input>
            <br/><br/>
            <label >Phone Number : </label>
            <input type='text' onChange={(e)=>setContact(e.target.value)}></input>
            <br/><br/>
            <label>Password : </label>
            <input type='text' onChange={(e)=>setPassword(e.target.value)}></input>
            <br/><br/>
            <label>Confirm Password : </label>
            <input type='text'></input>
            <br/><br/>
            <button onClick={create}>Create</button>
        </div>
      </div>
    </>
  )
}

export default Account