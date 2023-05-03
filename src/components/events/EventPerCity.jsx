import Image from 'next/image'
import Link from 'next/link'

export default function EventPerCity({ data, pageName }) {
  return (
    <div className='cat_events'>
        <h1>Events in {pageName}</h1>
        <div className='content'>
            {data.map(event => {
                return (
                    <Link className='card' key={event.id} href={`/events/${event.city}/${event.id}`}>
                        <Image 
                        src={event.image}
                        alt={event.title}
                        width={230}
                        height={230} 
                        />
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>
                    </Link>
                )
            })}
        </div> 
    </div>
  )
}
