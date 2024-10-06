import React, { ReactNode } from 'react'

type SectionProps = {
  caption: string,
  children: ReactNode
}

const Section = ({ caption, children }: SectionProps) => {
  return (
    <section className='bg-zinc-700/15 border border-neutral-800 rounded-lg p-4 pt-2 m-2 w-[95%] max-w-[550px]'>
      <h2 className='text-center font-extrabold underline mb-2'>{caption}</h2>
      {children}
    </section>
  )
}

export default Section