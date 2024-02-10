import React from 'react'
import { Link } from 'react-router-dom'

export default function Inbox() {
  return (
    <>
      <h1 className='ml-4 mt-4 font-weight-bolder ' style={{fontSize:"45px"}}>Messages</h1>
      <div className="message-box overflow-scroll" style={{height:"92vh",overflowY: "scroll"}}>
              <div className="chat d-flex justify-content-between p-2 align-items-center m-4"  style={{backgroundColor: "var(--color-2)"}}>
                <div className="d-flex ">
                    <img src="https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=" style={{width: "70px",height: "70px",borderRadius:"50%" , border:"2px solid var(--color-2)", outline:"2px solid var(--color-3)"}} alt="" />
                  <div className="ml-2 chat-text d-flex flex-column justify-content-center">
                    <h5>John Doe</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!</p>
                  </div>
                </div>
                <div className="">
                  <Link className='btn mr-2' style={{color: "var(--color-1)",backgroundColor: "var(--color-5)", letterSpacing: "1px",fontWeight: "900!important",border: "none",outline: "none", borderRadius: "5px", padding: "8px",}} to="/"><b>Profile</b></Link>
                </div>
              </div>
        
      </div>

    </>
  )
}
