import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from '@/components/Nav'
import LoginButton from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()
  if(!session) {
    return (
      <div className='flex justify-center items-center h-screen w-screen'>
        <button onClick={ () => signIn('google')} className='button-53'>Login with Google</button>
      </div>
    )
  }
  return(
    <>
      <Nav></Nav>
      <div>Logged In {session.user.email}</div>
      <button onClick={ () => signOut('google')} className='button-53'>Logout</button>
    </>
  )
  
}
