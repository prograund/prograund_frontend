import React from 'react'
import { useState, useEffect } from 'react'
import DocsItem from '../docs-component/DocsItem';

export default function MyDocs() {
  const url = "https://foolish-moth-88.telebit.io/docs/";
  // const url = "http://127.0.0.1:8000/docs/";

  const [docs, setDocs] = useState([{}]);

  const getDocs = ()=>
  {
    fetch(url,{
      method: 'GET',
      headers: {
        "ngrok-skip-browser-warning": "1", // Add this header
        // Include other headers as needed
      }
    
    })
    
    .then(response => response.json())
    .then(data => {
      setDocs(data.filter(doc => doc.user_id == sessionStorage.getItem("sessionId")));
      // setDocs(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }
    )
  }

  useEffect(() => {
    getDocs();
  }
  ,[]);

  return (
    <>
       
        <div className="row p-auto m-auto d-flex justify-content-center">
          {docs.map((doc,index) => (
            <DocsItem title={doc.title} content={doc.content} key={index} id={doc.article_id} />
          ))}
        </div>
   
    </>
  )
}
