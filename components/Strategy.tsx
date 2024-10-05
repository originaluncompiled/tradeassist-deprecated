import React from 'react'
import Section from './Section'
import { strategyChecklist } from '@/constants'

const Strategy = () => {
  return (
    <Section caption='Trading Strategy Checklist'>
      {strategyChecklist.map((strategyGroup, i) => {
        return (
          <section key={i} className='m-2'>
            <h3 className='font-bold'>{strategyGroup.title}</h3>
          </section>
        )
      })}
    </Section>
  )
}

export default Strategy