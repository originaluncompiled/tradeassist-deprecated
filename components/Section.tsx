'use client'

import { cn } from '@/lib/utils'
import { Triangle } from 'lucide-react'
import React, { ReactNode, useState } from 'react'

type SectionProps = {
  caption: string,
  children: ReactNode
}

const Section = ({ caption, children }: SectionProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true);

  const openCloseDropdown = (): void => {
    setIsDropdownOpen((prev) => !prev);
  }

  return (
    <section className='bg-zinc-700/15 border border-neutral-800 rounded-lg p-4 py-2 m-2 w-[95%] max-w-[550px]'>
      <div onClick={() => openCloseDropdown()} className='flex flex-row justify-center items-center cursor-pointer'>
        <Triangle
          size={10}
          strokeWidth={3}
          fill='white'
          className={cn('mr-2', !isDropdownOpen && 'rotate-180')}
        />
        <h2 className='text-center font-extrabold underline'>{caption}</h2>
      </div>
      {isDropdownOpen ? children : <></>}
    </section>
  )
}

export default Section