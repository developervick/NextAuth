import { Logout } from '@/components/logout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col h-screen bg-gray-800 justify-center items-center text-white text-5xl'>

        <div className='bg-gray-200 w-fit flex m-2 px-6 py-4'>
          <h1 className='text-stone-800 font-bold'>This is super secret TechJokeys Dashboard</h1>
        </div>
        <Logout></Logout>
        
    </div>
  )
}
