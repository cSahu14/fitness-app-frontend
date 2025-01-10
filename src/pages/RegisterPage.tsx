
import { RegisterForm } from '../components/register-form'

type Props = {}

const RegisterPage = (props: Props) => {
  return (
    <main className='min-h-svh w-full flex justify-center items-center p-6 md:p-10'>
        <div className='w-full max-w-sm'>
            <RegisterForm />
        </div>
    </main>
  )
}

export default RegisterPage