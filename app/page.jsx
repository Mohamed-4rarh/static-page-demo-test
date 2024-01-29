import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return(
    <div className='flex flex-col justify-center text-center h-[100vh]'>
      <h1 className='text-[48px] font-bold'>Static Page Test</h1>
      <h3 className='text-[34px] font-medium'>Home Screen</h3>
      <Link href={'/nested'} className='p-3 border border-[#f9f9f9] mt-[30px] mx-auto rounded-lg transition hover:scale-105'>Move To Nested Page</Link>
    </div>
  )
}
