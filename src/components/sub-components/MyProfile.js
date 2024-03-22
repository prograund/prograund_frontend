import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

export default function MyProfile() {
  const user_id = sessionStorage.getItem('sessionId')
  
  const url = `https://mink-keen-equally.ngrok-free.app/users/`

  const [user, setUser] = useState([{}]);

  useEffect(() => {
    fetch(url,{
      method: 'GET',
      headers: {
        "ngrok-skip-browser-warning": "1", // Add this header
        // Include other headers as needed
      }
    
    })
      .then(response => response.json())
      .then(data => {
        setUser(data.filter((item) => item.id === user_id)[0]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [user_id,url]);


  return (
    <>
    
      <div>
        <img src='https://t3.ftcdn.net/jpg/02/68/48/86/360_F_268488616_wcoB2JnGbOD2u3bpn2GPmu0KJQ4Ah66T.jpg' alt='test' style={{width: '100%'}}></img>
      </div>
      <div className='d-flex justify-content-evenly' style={{marginBottom:'-20px'}}>
        <img src="https://cdn.dribbble.com/users/5534/screenshots/14230133/profile_4x.jpg" alt="" style={{width:'110px',height:'110px',borderRadius:'50%',position:'relative',top:'-55px',marginLeft:'20px',border:'2px solid transparent',outline:'2px solid var(--color-3)'}}/>
        <div className="mx-3 user-data">
        <h3 className='mb-0'>{user.fname} {user.lname}</h3>
        <h6>{user.username}</h6>
        </div>
      </div>
      <div style={{marginTop:'-30px'}}>
        <h6 style={{fontWeight:'700',padding:'0 30px',color:'var(--color-4)'}}>35 Trackers || 13 Trackings</h6>
        <p style={{fontSize:'15px',padding:'0 20px',textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, odio iusto? Sapiente maxime delectus asperiores suscipit? Quos esse saepe a magnam eius optio facilis</p>
      </div>
      <div className="links d-flex justify-content-around align-items-center mb-4" style={{height:'40px'}}>
        <Link style={{fontSize:'17px', marginBottom:'0'}} className='on-hover-green' to="/my-profile/snippets">
            Snippets
            <hr className="green my-0"/>
        </Link>
        <Link style={{fontSize:'17px', marginBottom:'0'}} className='on-hover-green' to="/my-profile/joy-source">
            Joy Sources
            <hr className="green my-0"/>
        </Link>
        <Link style={{fontSize:'17px', marginBottom:'0'}} className='on-hover-green' to="/my-profile/mentions">
            Mentions
            <hr className="green my-0"/>
        </Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}
