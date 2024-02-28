import React from 'react'
import Message from './inbox-component/Message'

export default function Inbox() {
  return (
    <>
      <h1 className='ml-4 mt-4 font-weight-bolder ' style={{ fontSize: "40px" }}>Messages</h1>
      <hr style={{backgroundColor: "var(--color-5)",height: "2px",border: "none",borderRadius: "10px",margin: "0",marginBottom:'15px'}} />

      <Message user="Humanshu" />
      <Message user="Raj" />
      <Message user="Kaushik" />
      <Message user="Shyam" />
      <Message user="John Deo" />


    </>
  )
}
