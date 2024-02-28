import React from 'react'
import { Link, Outlet } from 'react-router-dom'



export default function Dashboard() {
  return (
        <>

    
           <div className="links d-flex justify-content-around align-items-center">
                <Link className='on-hover-green' to="/dashboard/debug-stress">
                    Debug Stress
                    <hr className="green"/>
                </Link>
                <Link className='on-hover-green' to="/dashboard/inspect-world">
                    Inspect World
                    <hr className="green"/>
                </Link>
            </div>
            <div className="main-body">


                <Outlet />
           
         

            </div>

    </>
  )
}
