import React from 'react'
import Swal from 'sweetalert2';

export default function Host() {

  const url = 'http://127.0.0.1:8000/posts/';
  const fileUrl = 'http://127.0.0.1:8000/posts/savefile';



  const form = document.querySelector('form');

  const fileInput = document.querySelector('input[type="file"]');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);

      fetch(fileUrl, {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);


    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user_id : 1, 
        title: data.get('title'),
        likes_count: 0,
        share_count: 0,
        type: data.get('type'),
        file: data.get('file'),
      }),
    })


    .then(response => response.json())
    .then(data => {
      if (data === "Added Successfully") {
        Swal.fire({
          title: 'Post Added Successfully!',
          color: 'var(--color-5)',
          background: 'var(--color-2)',
          icon: 'success',
          confirmButtonColor: 'var(--color-5)',
          confirmButtonText: 'Okay!',
          iconColor: 'var(--color-5)',
        })
        .then(() => {
          window.location = '/dashboard';
          if (form) {
            form.reset();
          }
        })
      }

    })
    .catch(error => console.log(error));
  }

  return (
    <>
      <h1 className='ml-4 mt-4 font-weight-bolder ' style={{ fontSize: "40px" }}>Host now</h1>
      <hr style={{backgroundColor: "var(--color-5)",height: "2px",border: "none",borderRadius: "10px",margin: "0",marginBottom:'15px'}} />

      <div className="container">
      <form onSubmit={handleSubmit}>
        <div className='d-flex flex-column' style={{overflow:'hidden',backgroundColor:'var(--color-2)',padding:'10px',borderRadius:'7px'}}>
          <select name="type" className="type-select" required>
            <option disabled>---Select type of Post---</option>
            <option value="Professional">Professional</option>
            <option value="Funny">Funny</option>
          </select>
          <textarea name="title" className='w-100' id="" cols="30" rows="10" style={{backgroundColor:'var(--color-2)',color:'var(--color-5)',border:'none',resize:'none',padding:'15px'}} required></textarea>
          <br />
          <label htmlFor="file-upload">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cloud-upload" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"/>
              <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"/>
            </svg><br /><br />
            Add media file (optional)
          </label><br />
          <input type="file" id='file-upload' name='file' />
          <button className="btn" type="submit" style={{backgroundColor: 'var(--color-4)',color: 'var(--color-1)',padding: '10px',borderRadius: '5px',fontSize: '20px',marginTop: '10px'}}>Add</button>
        </div>
      </form>
      </div>
    </>
  );

}
