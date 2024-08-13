import OrSeparator from '../../../images/auth-or.svg';
import signWithGoogle from '../../../images/signin-with-google.svg';
import signWithApple from '../../../images/signin-with-apple.svg';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: object) => {
        console.log(data);
    };

    return (
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
        
        <img src={OrSeparator} alt="" className='w-full' />
        
        <div className='flex justify-between'>
          <img src={signWithGoogle} alt="Sign in with Google" className='ml-[-1rem]'/>
          <img src={signWithApple} alt="Sign in with Apple" className='ml-4'/>
        </div>
        
    </form>
    )
}