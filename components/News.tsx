import React from 'react'
import Section from './Section'

// Try 3x to get news & then display "Sorry, Can't Get News" with a circular arrow and the bigger, bolder text "Retry"
// Show Shadcn skeleton when loading news
// Use very-slightly visible Shadcn seperators between same-day news and much more visible separators between days (have ability to choose which days' news to show)
// + Make Shadcn inter-day news seperators go all the way to the edge (no padding) and intra-day enws seperators have, like 5/10% gap each side
// Have some sort of way to show that there's "No News Today :-)"

const News = () => {
  return (
    <Section caption='News & Data'>
      <p>- <a className='italic' href='https://docs.benzinga.com/benzinga-apis/calendar/get-economics' target='_blank'>Benzinga API</a></p>
      <p>- <a className='italic' href='https://www.youtube.com/watch?v=ssRo5nVOvrQ&t=2s' target='_blank'>Build a webscraper for ForexFactory</a></p>
    </Section>
  )
}

export default News