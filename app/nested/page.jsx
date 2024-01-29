import Link from 'next/link'
import React from 'react'

export default function page() {
    return(
        <div className='flex flex-col justify-center text-center h-[100vh]'>
          <h1 className='text-[48px] font-bold'>Static Page Test</h1>
          <h3 className='text-[34px] font-medium'>Nested Screen</h3>
          <Link href={'/'} className='p-3 border border-[#f9f9f9] mt-[30px] mx-auto rounded-lg transition hover:scale-105'>Back To Home Page</Link>
        </div>
      )
}
