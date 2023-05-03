import Link from "next/link"
import Image from "next/image"

export default function HomePage({data}) {
  return (
    <div className="home_body">
        {data.map(event => {
          return (
            <Link className="card" key={event.id} href={`/events/${event.id}`}>
              <div className="image">
                <Image 
                  alt={event.title} 
                  src={event.image}
                  width={300}
                  height={250}
                />
              </div>
              <div className="content">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
  )
}
