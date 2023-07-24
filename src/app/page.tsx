"use client"

import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  async function handleLogin() {
    Cookie.set('auth_token', '1h2u31yu7878fdsuisojfojk91938r9812fkjlszfdsfhhg')
    router.push('/dashboard')
  }

  return (
    <div className='flex w-full h-screen justify-center items-center flex-col gap-3'>
      <button onClick={handleLogin} className='w-1/4 h-15 p-2 bg-green-600 rounded'>LOGIN</button>
    </div>
  )
}
