import React from 'react'

export default function Body() {
  return (
        <>
        <div className="main col-md-6 p-0">
            <div className="links d-flex justify-content-around align-items-center">
                <a href="/">
                    Debug Stress
                    <hr className="green"/>
                </a>
                <a href="/">
                    Inspect World
                    <hr className="green"/>
                </a>
            </div>
            <div className="main-body">
            
           
                <div className="post card p-3 col-md-10 col-ms-12 m-auto" style={{borderRadius: "20px",backgroundColor: "var(--color-2)"}}>
                    <div className="" style={{display: "flex",justifyContent: "space-between"}}>
                        <div className="d-flex">
                            <img src="profile.png" alt="" style={{width: "60px", height: "60px", borderRadius: "50%", outline: "2px solid var(--color-3)", marginRight: "15px",border: "3px solid var(--color-2)"}}/>
                        <div className="user-info">
                            <h5 className="m-0" >ProGraund</h5>
                            <p className="m-0">2 hours ago</p>
                            <hr style={{width: "100px",height: "0.3px", backgroundColor: "var(--color-5)",marginTop: "5px",}}/>
                        </div>
                        </div>
                        <div className="tracker">
                            <button className="h5" style={{color: "var(--color-1)",backgroundColor: "var(--color-5)", letterSpacing: "1px",fontWeight: "900!important",border: "none",outline: "none", borderRadius: "5px", padding: "8px",}}>
                                <b>TRACK</b>
                            </button>
                        </div>

                    </div>
                    <p className="col-md-11 col-ms-12 m-auto">Get Free Report shares edged higher in early Monday trading after a key Wall Street analyst cut his price target on the group just days ahead of its fourth-quarter-earnings report. Tesla shares have been one of the worst performing blue chips on Wall Street t…</p>
                    <img src="https://c.biztoc.com/p/ed23a859eccdc570/s.webp" className="col-md-10 m-auto " alt=""/>
                    <div className="actions d-flex justify-content-between mx-2 my-2">
                        <button style={{background: "transparent",border: "none"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--color-5)" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                              </svg>
                        </button>
                        <button style={{background: "transparent",border: "none"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--color-5)" className="bi bi-share" viewBox="0 0 16 16">
                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                              </svg>
                        </button>
                        <button style={{background: "transparent",border: "none"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--color-5)" className="bi bi-chat" viewBox="0 0 16 16">
                                <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                              </svg>
                        </button>
                    </div>
                </div>
                <br/>
                
     

            </div>

        </div>
    </>
  )
}
