import React from 'react';
import { Link } from 'react-router-dom';

export default function Trackers() {
  return (
    <>
      <div className="message-box overflow-scroll" style={{ height: "92vh", overflowY: "scroll"}}>
        <div className="chat d-flex justify-content-between p-2 align-items-center m-4" style={{ backgroundColor: "var(--color-2)",borderRadius:'5px'}}>
          <div className="d-flex ">
            <img src="https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=" style={{ width: "70px", height: "70px", borderRadius: "50%", border: "2px solid var(--color-2)", outline: "2px solid var(--color-3)" }} alt="" />
            <div className="ml-2 chat-text d-flex flex-column justify-content-center">
              <h6 className='mb-0'>John Doe</h6>
              <p style={{fontSize:'13px',marginLeft:'2px'}}>user.john</p>
            </div>
          </div>
          <div className="">
            <Link className='btn mr-2' style={{ color: "var(--color-1)", backgroundColor: "var(--color-4)", letterSpacing: "1px", fontWeight: "900!important", border: "none", outline: "none", borderRadius: "5px", padding: "8px", }} to="/"><b>Remove</b></Link>
          </div>
        </div>
      </div>
    </>
  );
}
