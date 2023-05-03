import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'


export default function EventCard({data}) {
  const inputEmail = useRef()
  const router = useRouter()
  const [message, setMessage] = useState()

  async function onSubmit(e) {
    e.preventDefault()
    const emailValue = inputEmail.current.value
    const eventId = router.query.id

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/

    if(!emailValue.match(validRegex)) {
      setMessage('Please use a correct email address')
    }
    try {
      const response = await fetch('/api/EmailRegistration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          email: emailValue,
          eventId
        })
      })
      if(!response.ok) throw new Error(`Error: ${response.status}`)

      const data = await response.json()
      setMessage(data.message)
      inputEmail.current.value = ''
    } catch (e) {
      console.log(e, 'ERROR')
    }
  }
  return ( 
    <div className='event_single_page'>
      <h1>{data.title}</h1>
      <Image 
        src={data.image}
        alt={data.title}
        width={500}
        height={350}  
      /> 
      <p>{data.description}</p>
      <form className='email_registration' action="" onSubmit={onSubmit}>
        <label htmlFor="">Get Registered for this Event</label>
        <input 
          ref={inputEmail} 
          type="email" 
          id='email' 
          placeholder='Please insert your email here'
        /> <button type='submit'>Submit</button>
      </form>
      <p>{message}</p>
    </div>
  )
}
