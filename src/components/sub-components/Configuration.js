import React from 'react'
import { Link } from "react-router-dom"

export default function Configuration() {
  const logout = () => {
    sessionStorage.removeItem('sessionId');
    window.location = '/login';
  }
  return (
    <>
      <h1 className='ml-4 mt-4 font-weight-bolder ' style={{ fontSize: "40px" }}>Configuration</h1>
      <hr style={{backgroundColor: "var(--color-5)",height: "2px",border: "none",borderRadius: "10px",margin: "0",marginBottom:'15px'}} />
        <p className='mb-0 mt-2 mx-4 text-center'>-------------Account--------------</p>
      <div className="chat d-flex justify-content-between p-3 align-items-center m-1 mx-3" style={{ backgroundColor: "var(--color-2)",borderRadius:'7px', fontSize:'20px',textAlign:'center'}}>
         <Link to="/edit-profile" style={{color:'var(--color-5)'}}><p className='m-0'>Edit Profile</p></Link>
        </div>
      <div className="chat d-flex justify-content-between p-3 align-items-center m-1 mx-3" style={{ backgroundColor: "var(--color-2)",borderRadius:'7px', fontSize:'20px',textAlign:'center'}}>
      <Link to="/reset-password" style={{color:'var(--color-5)'}}><p className='m-0'>Reset Password</p></Link>
        </div>
        <p className='mb-0 mt-2 mx-4 text-center'>-------------Layout---------------</p>
      <div className="chat d-flex justify-content-between p-3 align-items-center m-1 mx-3" style={{ backgroundColor: "var(--color-2)",borderRadius:'7px', fontSize:'20px',textAlign:'center'}}>
         <p className='m-0'>Themes</p>
        </div>
      <div className="chat d-flex justify-content-between p-3 align-items-center m-1 mx-3" style={{ backgroundColor: "var(--color-2)",borderRadius:'7px', fontSize:'20px',textAlign:'center'}}>
         <p className='m-0'>Mode</p>
        </div>
        <p className='mb-0 mt-2 mx-4 text-center'>----------Help & Support----------</p>
      <div className="chat d-flex justify-content-between p-3 align-items-center m-1 mx-3" style={{ backgroundColor: "var(--color-2)",borderRadius:'7px', fontSize:'20px',textAlign:'center'}}>
         <p className='m-0'>Help Center</p>
        </div>
        <p className='mb-0 mt-2 mx-4 text-center'>-------------Premium--------------</p>
      <div className="chat d-flex justify-content-between p-3 align-items-center m-1 mx-3" style={{ backgroundColor: "var(--color-2)",borderRadius:'7px', fontSize:'20px',textAlign:'center'}}>
         <p className='m-0'>Try Premium today</p>
        </div>
        <div className="mt-5">

        <button className='btn p-2 btn-block col-md-10 m-auto text-center' onClick={logout} style={{backgroundColor: "var(--color-4)",color: "var(--color-1)",borderRadius: "5px",fontSize: "17px",marginTop: "50px",margin:'5px auto'}}><b>Logout</b></button>
        </div>
    </>
  )
}
