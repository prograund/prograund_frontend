import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Tracks() {
  return (
    <>
      <div className="links d-flex justify-content-around align-items-center">
        <Link to="/tracks/trackers">
          Trackers
          <hr className="green" />
        </Link>
        <Link to="/tracks/trackings">
          Trackings
          <hr className="green" />
        </Link>
      </div>
      <div className="main-body">
        <Outlet />
      </div>
    </>
  );
}
