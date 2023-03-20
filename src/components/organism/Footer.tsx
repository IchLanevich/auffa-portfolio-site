import { footer } from '@/data/pageContent'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-[32px] border-t-2 border-t-[#000]'>
        <div className="flex gap-[40px]">
            {footer.links.map((item) => {
                return (
                    <a className='underline font-medium text-[18px] hover:text-[#5C5C5C]' key={item.name} target='_blank' href={item.url}>{item.name}</a>
                )
            })}
        </div>
    </div>
  )
}

export default Footer