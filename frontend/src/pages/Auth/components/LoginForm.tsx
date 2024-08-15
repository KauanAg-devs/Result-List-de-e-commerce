import OrSeparator from '../../../images/auth-or.svg';
import signWithGoogle from '../../../images/signin-with-google.svg';
import signWithApple from '../../../images/signin-with-apple.svg';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorData, setErrorData] = useState<{
      message: string, 
      error: string, 
      statusCode: number
    }>()
    const navigate = useNavigate();
    
    const onSubmit = async (data: object) => {
        try {
          const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(data),
          });
      
          if (!response.ok) {
            const errorData = await response.json();
            setErrorData(errorData);
            console.log(errorData);
            
          } else navigate("/shop")
        } catch (error) {
          console.error('error during login:', error);
        }
      };

    return (
    <>
        <div className='text-center'>
          <h1 className='text-black text-xl md:text-2xl font-bold'>Welcome Back!</h1>
          <h2 className='text-black text-sm md:text-lg'>Enter your Credentials to access your account</h2>
       </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full space-y-4'>

        <div className='flex flex-col'>
            <label htmlFor="email" className='text-black mb-2 text-sm md:text-base'>Email address</label>
            <input 
                {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' }})} 
                type="text" 
                placeholder='Enter your email' 
                className='w-full p-2 border border-gray-300 rounded-lg'
            />
            {errors.email && <span className='text-red-500 text-xs'>{errors.email.message?.toString()}</span>}
        </div>

        <div className='flex flex-col'>
            <div className='flex w-full justify-between items-center'>
                <label htmlFor="password" className='text-black mb-2 text-sm md:text-base'>Password</label>
                <h5 className='text-blue-900 mb-2 text-xs md:text-sm'>forgot password</h5>
            </div>
            <input 
                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' }})}
                type="password" 
                placeholder='Enter your password' 
                className='w-full p-2 border border-gray-300 rounded-lg'
            />
            {errors.password && <span className='text-red-500 text-xs'>{errors.password.message?.toString()}</span>}
        </div>

        <input 
            type="submit" 
            value="Login" 
            className='w-full p-2 bg-[#3A5B22] text-white font-semibold rounded-lg cursor-pointer hover:bg-[#33511e]'
        />
        <span className='text-red-500 text-xs'>{errorData ? errorData.message : ''}</span>
        <img src={OrSeparator} alt="" className='w-full' />
        
        <div className='flex justify-between'>
          <img src={signWithGoogle} alt="Sign in with Google" className='ml-[-1rem]'/>
          <img src={signWithApple} alt="Sign in with Apple" className='ml-4'/>
        </div>

        <div className='flex w-full justify-center'>
        <p className='text-sm text-center'> 
         Don't have an account?
            <span> <Link to="/auth/signup" className='text-sm text-blue-800'> Sign up</Link> </span>
        </p>
        </div>
    </form>
    </>
  )
}