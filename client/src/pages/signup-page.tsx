'use client'

import {useState} from 'react'
import {Card, CardBody, CardHeader} from '@nextui-org/card'
import {Link} from "@nextui-org/link";
import AuthForm from '@/components/auth-form'

export default function SignupPage() {
  const [message, setMessage] = useState('')

  const handleSignup = (email: string, _password: string, userType: 'patient' | 'doctor') => {
    // Here you would typically make an API call to register the user
    console.log(`Signing up ${userType} with email: ${email}`)
    setMessage(`${userType} signed up successfully!`)
  }

  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-md">
          <CardHeader className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Sign Up</h1>
          </CardHeader>
          <CardBody>
            <AuthForm isLogin={false} onSubmit={handleSignup}/>
            {message && <p className="mt-4 text-center text-green-600">{message}</p>}
            <p className="mt-4 text-center">
              Already have an account?{' '}
              <Link href="/login" color="primary">
                Login
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
  )
}
