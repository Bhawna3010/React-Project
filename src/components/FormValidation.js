import React, { useState } from 'react'

const Form = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  function handlesubmit(e){
    e.preventDefault()
    if(email === ""){
      alert("email required")
      return
    }
    if(password.trim() === ""){
      alert("password required")
      return
    }
  }
  return (
    <>
      <h1>form validation</h1>
      <form>
        <input type='text' placeholder='enter your email' value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input type='password' placeholder='enter your password' value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={handlesubmit}>Submit</button>
      </form>
    </>
  )
}

export default Form