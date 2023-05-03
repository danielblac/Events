import EventPerCity from '@/src/components/events/EventPerCity'

export default function EventsCategoryPage({ data, pageName }) {
    return (
      <EventPerCity 
        data={data}
        pageName={pageName}
      />
    )
}

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json')

  const allPaths = events_categories.map(event => {
    return {
      params: {
        categories: event.id.toString(),
      },
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context?.params.categories
  const { allEvents } = await import('/data/data.json')

  const data = allEvents.filter(event => event.city === id)
  return {
    props: {
      data,
      pageName: id
    } 
  }
}

  