import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex h-screen bg-gray-800 justify-center items-center text-white text-5xl'>
        <Link className='text-blue-500' href="/login">Login </Link>
        <Link className='text-blue-500' href="/signup">Signup </Link>
        <h1>Welcome to Home page</h1>
    </div>
  )
}
