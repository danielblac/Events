import Image from 'next/image'
import Link from 'next/link'

export default function AllEvents({data}) {
  return (
    <div className='events_page'>
        {data.map(event => {
        return (
            <Link className='card' key={event.id} href={`/events/${event.id}`}> 
            <Image 
                alt={event.title} 
                src={event.image}
                width={200}
                height={220}
            />
            <h2>{event.title}</h2>
            </Link>
        )
        })}
    </div>
  )
}
