import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormContainer from './FormContainer';
import FormHeader from './FormHeader';
import FormField from './FormField';
import SubmitButton from './SubmitButton';
import Separator from './Separator';
import SocialSignIn from './SocialSignIn';
import FormLink from './FormLink';
import OrSeparator from '../../../images/auth-or.svg';
import signWithGoogle from '../../../images/signin-with-google.svg';
import signWithApple from '../../../images/signin-with-apple.svg';
import { onSubmit } from './OnSubmit';

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [errorData, setErrorData] = useState<{ message: string; error: string; statusCode: number }>();
    const fetchTo = 'http://localhost:3000/auth/login'
    
    const handleFormSubmit = (formData: object) => {
        onSubmit(fetchTo, {formData, setErrorData, navigate, navigateTo: '/shop'});
    };

    return (
        <FormContainer>
            <FormHeader
                title="Welcome Back!"
                subtitle="Enter your Credentials to access your account"
            />
            <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col w-full space-y-4'>
                <FormField
                    id='email'
                    type='text'
                    placeholder='Enter your email'
                    register={register}
                    error={errors.email}
                />
                <FormField
                    id='password'
                    type='password'
                    placeholder='Enter your password'
                    register={register}
                    error={errors.password}
                />
                <SubmitButton label="Login" />
                <span className='text-red-500 text-xs'>{errorData?.message || ''}</span>
                <Separator src={OrSeparator} alt="" />
                <SocialSignIn googleSrc={signWithGoogle} appleSrc={signWithApple} />
                <div className='flex w-full justify-center'>
                    <p className='text-sm text-center'>
                        Don't have an account? <FormLink to="/auth/signup" text="Sign up" className='text-sm text-blue-800' />
                    </p>
                </div>
            </form>
        </FormContainer>
    );
}
