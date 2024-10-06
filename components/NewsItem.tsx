import React from 'react'
import { Separator } from './ui/separator'
import Image from 'next/image'

// CHANGE TITLE ATTRIBUTE OF EVENT NAME TO 'USUAL EFFECT' FROM FF
// BASED ON ^ CHANGE 'ACTUAL' VALUE'S TEXT COLOUR TO EITHER GREEN/RED IF BULLISH/BEARISH FOR CURRENCY

const NewsItem = () => {
  return (
    <section className='grid grid-rows-3 gap-1 p-1 w-full'>

      <div>
        <div className='grid grid-cols-10'>
          <div className='col-span-2 text-center'>
            <p className='text-sm'>2:30pm</p>
          </div>
          <div className='col-span-7'>
            <p className='text-sm font-medium cursor-help underline decoration-dotted' title='"Actual" greater than "Forecast" is good for currency;'>Core CPI m/m</p>
          </div>
          <div className='col-span-1'>
            <Image title='High Impact Expected' src='/images/red-folder.png' className='mx-auto cursor-help' alt='Impact Rating' width={20} height={20} />
          </div>
        </div>

        <Separator className='bg-neutral-600 w-[95%] ml-auto mr-auto'/>
      </div>

      <div className='grid grid-cols-3 text-center'>
        <p className='text-sm font-bold'>Actual</p>
        <p className='text-sm font-bold'>Forecast</p>
        <p className='text-sm font-bold'>Previous</p>
      </div>

      <div className='grid grid-cols-3 text-center'>
        <p className='text-sm font-medium italic'>TBD</p>
        <p className='text-sm font-medium italic'>0.2%</p>
        <p className='text-sm font-medium italic'>0.3%</p>
      </div>

    </section>
  )
}

export default NewsItem