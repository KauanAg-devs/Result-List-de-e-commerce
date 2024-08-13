import authImg from '../../images/auth-img.svg'
import './login.css'
import OrSeparator from '../../images/auth-or.svg'
import signWithGoogle from '../../images/signin-with-google.svg'
import signWithApple from '../../images/signin-with-apple.svg'

export default function Login() {
    return (
        <div className='bg-white flex items-center justify-center w-full h-full relative'>
            <div className='absolute left-0 h-full w-full md:w-1/2 flex items-center justify-center'>
                <div className='relative flex flex-col items-center justify-evenly h-full max-w-md p-6 md:p-10 rounded-lg bg-white'>
                    <div className='text-center'>
                        <h1 className='text-black text-xl md:text-2xl font-bold'>Welcome Back!</h1>
                        <h2 className='text-black text-sm md:text-lg'>Enter your Credentials to access your account</h2>
                    </div>
                    
                    <form className='flex flex-col w-full space-y-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='text-black mb-2 text-sm md:text-base'>Email address</label>
                            <input 
                                name='email' 
                                type="text" 
                                placeholder='Enter your email' 
                                className='w-full p-2 border border-gray-300 rounded-lg'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <div className='flex w-full justify-between items-center'>
                                <label htmlFor="password" className='text-black mb-2 text-sm md:text-base'>Password</label>
                                <h5 className='text-blue-900 mb-2 text-xs md:text-sm'>forgot password</h5>
                            </div>
                            <input 
                                name="password" 
                                type="text" 
                                placeholder='Enter your password' 
                                className='w-full p-2 border border-gray-300 rounded-lg'
                            />
                        </div>

                        <input 
                            type="submit" 
                            value="Login" 
                            className='w-full p-2 bg-[#3A5B22] text-white font-semibold rounded-lg cursor-pointer hover:bg-[#33511e]'
                        />
                        
                        <img src={OrSeparator} alt="" className='w-full' />
                        <div className='flex justify-between'>
                          <img src={signWithGoogle} alt="" className='ml-[-1rem]'/>
                          <img src={signWithApple} alt="" className='ml-4'/>
                        </div>
                        
                    </form>
                </div>
            </div>

            <div className='hidden md:flex absolute right-0 w-full md:w-1/2 h-full items-center justify-center'>
                <img 
                    src={authImg} 
                    alt="auth-img" 
                    className='w-full h-auto md:w-full md:h-full object-cover'
                />
            </div>
        </div>
    )
}
