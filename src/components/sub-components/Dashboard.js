import React from 'react'
import { Link, Routes, Route, Outlet } from 'react-router-dom'
import DebugStress from './dashboard-components/DebugStress'
import InspectWorld from './dashboard-components/InspectWorld'


export default function Dashboard() {
  return (
        <>

    
           <div className="links d-flex justify-content-around align-items-center">
                <Link to="/dashboard/debug-stress">
                    Debug Stress
                    <hr className="green"/>
                </Link>
                <Link to="/dashboard/inspect-world">
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
