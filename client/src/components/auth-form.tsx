import {useState} from 'react'
import {Input} from '@nextui-org/input'
import {Button} from "@nextui-org/button";
import {Radio, RadioGroup} from "@nextui-org/radio";
import {Spacer} from "@nextui-org/spacer";

type UserType = 'patient' | 'doctor'

interface AuthFormProps {
  isLogin: boolean
  onSubmit: (email: string, password: string, userType: UserType) => void
}

export default function AuthForm({isLogin, onSubmit}: AuthFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState<UserType>('patient')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(email, password, userType)
  }

  return (
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <Input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <RadioGroup
            label="I am a"
            value={userType}
            onValueChange={val => setUserType(val as UserType)}
            orientation="horizontal"
        >
          <Radio value="patient">Patient</Radio>
          <Radio value="doctor">Doctor</Radio>
        </RadioGroup>
        <Spacer y={1}/>
        <Button type="submit" color="primary" fullWidth>
          {isLogin ? 'Login' : 'Sign Up'}
        </Button>
      </form>
  )
}
