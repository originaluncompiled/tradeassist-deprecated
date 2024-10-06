import React from 'react'
import Section from './Section'
import NewsDay from './NewsDay'

// Try 3x to get news & then display "Sorry, Can't Get News" with a circular arrow and the bigger, bolder text "Retry"
// Show Shadcn skeleton when loading news
// Use very-slightly visible Shadcn seperators between same-day news and much more visible separators between days (have ability to choose which days' news to show)
// + Make Shadcn inter-day news seperators go all the way to the edge (no padding) and intra-day enws seperators have, like 5/10% gap each side
// Have some sort of way to show that there's "No News Today :-)"

const News = () => {
  return (
    <Section caption='News & Data'>
      <NewsDay date='Thu, Oct 10' />
      <NewsDay date='Fri, Oct 11' />
      <p className='text-xs text-neutral-500'>* Newsdata from <a className='cursor-pointer italic font-semibold' href='https://www.forexfactory.com/' target='_blank'>ForexFactory</a></p>
    </Section>
  )
}

export default News