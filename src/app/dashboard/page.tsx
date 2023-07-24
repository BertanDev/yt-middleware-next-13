"use client"

import Cookie from "js-cookie"
import { useRouter } from 'next/navigation'

export default function Dashboard() {
	const router = useRouter()

	async function handleLogout() {
		Cookie.remove('auth_token')
		router.push('/')
	}

	return (
		<div className='flex w-full h-screen justify-center items-center flex-col gap-3'>
			<button onClick={handleLogout} className='w-30 h-15 p-2 bg-red-600 rounded'>LOGOUT</button>
    	</div>
	)
}