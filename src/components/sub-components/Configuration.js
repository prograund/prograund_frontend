import React from 'react'

export default function Configuration() {
  return (
    <>
      <h1 className='ml-4 mt-4 font-weight-bolder ' style={{ fontSize: "40px" }}>Configuration</h1>
      <hr style={{backgroundColor: "var(--color-5)",height: "2px",border: "none",borderRadius: "10px",margin: "0",marginBottom:'15px'}} />
      <div className="chat d-flex justify-content-between p-3 align-items-center m-1 mx-3" style={{ backgroundColor: "var(--color-2)",borderRadius:'7px', fontSize:'20px',textAlign:'center'}}>
         <p className='m-0'>Edit Profile</p>
        </div>
      <div className="chat d-flex justify-content-between p-3 align-items-center m-1 mx-3" style={{ backgroundColor: "var(--color-2)",borderRadius:'7px', fontSize:'20px',textAlign:'center'}}>
         <p className='m-0'>Try Premium today</p>
        </div>
      <div className="chat d-flex justify-content-between p-3 align-items-center m-1 mx-3" style={{ backgroundColor: "var(--color-2)",borderRadius:'7px', fontSize:'20px',textAlign:'center'}}>
         <p className='m-0'>Themes</p>
        </div>
      <div className="chat d-flex justify-content-between p-3 align-items-center m-1 mx-3" style={{ backgroundColor: "var(--color-2)",borderRadius:'7px', fontSize:'20px',textAlign:'center'}}>
         <p className='m-0'>Help Center</p>
        </div>
    </>
  )
}
