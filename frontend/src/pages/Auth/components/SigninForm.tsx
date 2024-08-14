import OrSeparator from '../../../images/auth-or.svg';
import signWithGoogle from '../../../images/signin-with-google.svg';
import signWithApple from '../../../images/signin-with-apple.svg';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

export default function SigninForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data: object) => {
        try {
          const response = await fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(data),
          });
      
          if (!response.ok) {
            const errorData = await response.json();
            console.error('sign up failed:', errorData);
          } else navigate("/shop")
        } catch (error) {
          console.error('error during sign up:', error);
        }
      };


    return (
       <>
        <div className='text-center'>
          <h1 className='text-black text-xl md:text-2xl font-bold'>Get Started Now</h1>
          <h2 className='text-black text-sm md:text-lg'>Enter your Credentials to access your account</h2>
       </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full space-y-4'>
        <div className='flex flex-col'>
            <label htmlFor="name" className='text-black mb-2 text-sm md:text-base'>Name</label>
            <input 
                type="text" 
                placeholder='Enter your name' 
                className='w-full p-2 border border-gray-300 rounded-lg'
                {...register('name')}
            />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="email" className='text-black mb-2 text-sm md:text-base'>Email address</label>
            <input 
                type="text" 
                placeholder='Enter your email' 
                className='w-full p-2 border border-gray-300 rounded-lg'
                {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' }})} 
            />
            {errors.email && <span className='text-red-500 text-xs'>{errors.email.message?.toString()}</span>}
        </div>

        <div className='flex flex-col'>
            <label htmlFor="password" className='text-black mb-2 text-sm md:text-base'>Password</label>
           
            <input 
                type="password" 
                placeholder='Enter your password' 
                className='w-full p-2 border border-gray-300 rounded-lg'
                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' }})}
            />

            {errors.password && <span className='text-red-500 text-xs'>{errors.password.message?.toString()}</span>}
        </div>

        <input 
            type="submit" 
            value="Sign up" 
            className='w-full p-2 bg-[#3A5B22] text-white font-semibold rounded-lg cursor-pointer hover:bg-[#33511e]'
        />
        
        <img src={OrSeparator} alt="" className='w-full' />
        
        <div className='flex justify-between'>
          <img src={signWithGoogle} alt="Sign in with Google" className='ml-[-1rem]'/>
          <img src={signWithApple} alt="Sign in with Apple" className='ml-4'/>
        </div>

        <div className='flex w-full justify-center'>
        <p className='text-sm text-center'> 
            Have an account?
            <span> <Link to="/auth/login" className='text-sm text-blue-800'> Sign in</Link> </span>
        </p>
        </div>
    </form>
    </>
 )
}