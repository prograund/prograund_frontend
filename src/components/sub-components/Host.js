import React from 'react'

export default function Host() {

  const url = 'http://127.0.0.1:8000/posts/';
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    fetch(url, {
      method: 'POST',
      body: data,
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

  return (
    <>
      <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <div className="input-group" style={{overflow:'hidden'}}>
          <textarea name="post_data" className='form-control' id="" cols="30" rows="10" style={{backgroundColor:'var(--color-2)',color:'var(--color-5)'}}></textarea>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" type="submit">Send</button>
        </div>
      </form>
      </div>
    </>
  );

}
