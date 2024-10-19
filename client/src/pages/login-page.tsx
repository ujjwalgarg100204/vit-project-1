import {useState} from 'react'
import {Card, CardBody, CardHeader} from '@nextui-org/card'
import {Link} from "@nextui-org/link";

import AuthForm from '@/components/auth-form'

export default function LoginPage() {
  const [message, setMessage] = useState('')

  const handleLogin = (email: string, _password: string, userType: 'patient' | 'doctor') => {
    // Here you would typically make an API call to authenticate the user
    console.log(`Logging in ${userType} with email: ${email}`)
    setMessage(`${userType} logged in successfully!`)
  }

  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-md">
          <CardHeader className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Login</h1>
          </CardHeader>
          <CardBody>
            <AuthForm isLogin={true} onSubmit={handleLogin}/>
            {message && <p className="mt-4 text-center text-green-600">{message}</p>}
            <p className="mt-4 text-center">
              Don't have an account?{' '}
              <Link href="/signup" color="primary">
                Sign up
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
  )
}
