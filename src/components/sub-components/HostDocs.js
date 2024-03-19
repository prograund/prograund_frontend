import React from 'react'

export default function HostDocs() {


  const url = 'http://127.0.0.1:8000/docs/';

  const handleSave = (e) => {
    e.preventDefault();
    const docArea = document.getElementById('docArea');

    const data = {
      title: docArea.innerHTML
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user_id: sessionStorage.getItem('sessionId'),
        title: docArea.innerHTML,
        likes_count:0,
        share_count:0,
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }
    )
  }




  return (
    <>
    <h1
        className="ml-4 mt-4 font-weight-bolder "
        style={{ fontSize: "40px" }}
      >
        Write Docs Here
      </h1>
      <hr
        style={{
          backgroundColor: "var(--color-5)",
          height: "2px",
          border: "none",
          borderRadius: "10px",
          margin: "0",
          marginBottom: "15px",
        }}
      />
      <div className="container">
        <form>
          <button className='btn prm-btn'
            onClick={
              (e) => {
                e.preventDefault();
                const docArea = document.getElementById('docArea');
                docArea.innerHTML += '<h1>Title</h1>';
              }
            }
          >Title</button>
          <button className='btn prm-btn'
            onClick={
              (e) => {
                e.preventDefault();
                const docArea = document.getElementById('docArea');
                docArea.innerHTML += '<h2>Sub-Title</h2>';
              }
            }

          >Sub-title</button>
          <button className="btn prm-btn"
            onClick={
              (e) => {
                e.preventDefault();
                const docArea = document.getElementById('docArea');
                docArea.innerHTML += '<b>Bold</b>';
              }
            }
          ><b>B</b></button>
          <button className="btn prm-btn"><i>I</i></button>
          <div
            className="d-flex flex-column"
            style={{
              overflow: "hidden",
              backgroundColor: "var(--color-1)",
              padding: "10px",
              borderRadius: "7px",
              
            }}
            contentEditable={true}
            id='docArea'>  
          </div>
          <button
            onClick={handleSave}

            className="btn btn-primary mt-3"
            style={{ backgroundColor: "var(--color-5)", border: "none" }}
          >
            Save Changes
          </button>

        </form>
      </div>

    </>
  )
}
