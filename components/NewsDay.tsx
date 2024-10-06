import React from 'react'
import NewsItem from './NewsItem'

type newsSectionProps = {
  date: string;
}

// do getDate() to get the current day of the month and then just check the last two indexes (length & length - 1???) aka numbers of the date (v) and on the far left of that day's gray date rectangle show '* Today'
// Just show text that says 'No news today :-)'

const NewsDay = ({ date }: newsSectionProps) => {
  return (
    <section className='w-full h-fit my-4'>
      <h3 className='w-full h-fit rounded-sm border border-neutral-500/30 bg-neutral-700 px-4 py-1 font-bold'>{date}</h3>
      <NewsItem />
      <NewsItem />
  </section>
  )
}

export default NewsDay