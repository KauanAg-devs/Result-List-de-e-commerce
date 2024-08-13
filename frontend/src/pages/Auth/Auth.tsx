import authImg from '../../images/auth-img.svg';
import LoginForm from './components/LoginForm';

export default function Auth() {


    return (
        <div className='bg-white flex items-center justify-center w-screen h-screen relative'>
            <div className='absolute left-0 h-full w-full md:w-1/2 flex items-center justify-center'>
                <div className='relative flex flex-col items-center justify-evenly h-full max-w-md p-6 md:p-10 rounded-lg bg-white'>
                    <div className='text-center'>
                        <h1 className='text-black text-xl md:text-2xl font-bold'>Welcome Back!</h1>
                        <h2 className='text-black text-sm md:text-lg'>Enter your Credentials to access your account</h2>
                    </div>

                    <LoginForm />                   
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
