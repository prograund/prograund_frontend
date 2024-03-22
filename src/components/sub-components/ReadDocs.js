import React from 'react'
import { useState,useEffect } from 'react';


export default function ReadDocs() {
    const id = window.location.href.split("/").pop();

    const [docs, setDocs] = useState([]);

    const url = `https://mink-keen-equally.ngrok-free.app/docs/`;
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setDocs(data.filter((item) => item.article_id === id));

        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, [id,url]); 
return (
    <>
        <div>
            <div className="container p-4">
                <div className="row p-auto m-auto d-flex justify-content-center">
                    <div className="col-md-12" id='article'>
                        {docs.map((doc,index) => (
                            <div key={index}>
                                    <h1 style={{fontSize:'50px'}} dangerouslySetInnerHTML={{ __html: doc.title }}></h1>
                                    <p dangerouslySetInnerHTML={{ __html: doc.content }}></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
