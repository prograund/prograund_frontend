import React from 'react'

export default function RAside() {
  return (
    <>
        <div className="raside fixed-right r-0 col-md-3 p-0">
            <div className="input-group col-md-12 my-3">
                <input type="text" className="form-control" placeholder="Query..."/>
                <div className="input-group-append">
                  <button className="btn" type="button" id="button-addon2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(117, 79, 229)" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                      </svg>
                  </button>
                </div>
            </div>
            <div className="not-in-mobile">
                <div className="card m-4 rounded-lg profile">
                    <img src="https://cdn.dribbble.com/users/5534/screenshots/14230133/profile_4x.jpg" alt=""/>
                    <h3>ProGraund</h3>
                    <p>A Space only for programmers</p>
                </div>
            </div>
        </div>
    </>
  )
}
