import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import SocialSignIn from './components/SocialSignIn';
import OrSeparator from '../../images/auth-or.svg';
import signWithGoogle from '../../images/signin-with-google.svg';
import signWithApple from '../../images/signin-with-apple.svg';
import { useState } from 'react';
import FormContainer from './components/FormContainer';
import FormField from './components/FormField';
import FormHeader from './components/FormHeader';
import FormLink from './components/FormLink';
import { onSubmit } from './components/OnSubmit';
import Separator from './components/Separator';
import SubmitButton from './components/SubmitButton';

export default function SignupForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const fetchTo = 'http://localhost:3000/auth/signup'
    const [errorData, setErrorData] = useState<{ message: string; error: string; statusCode: number }>();
    const handleFormSubmit = (formData: object) => {
        onSubmit(fetchTo, {formData, navigate, navigateTo: '/shop', setErrorData});
    };

    return (
        <FormContainer>
            <FormHeader
                title="Get Started Now"
                subtitle="Enter your Credentials to access your account"
            />
            <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col w-full space-y-4'>
                <FormField
                    id='name'
                    type='text'
                    placeholder='Enter your name'
                    register={register}
                />
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
                <SubmitButton label="Sign up" />
                <span className='text-red-500 text-xs'>{errorData?.message || ''}</span>
                <Separator src={OrSeparator} alt="" />
                <SocialSignIn googleSrc={signWithGoogle} appleSrc={signWithApple} />
                <div className='flex w-full justify-center'>
                    <p className='text-sm text-center'>
                        Have an account? <FormLink to="/auth/login" text="Sign in" className='text-sm text-blue-800' />
                    </p>
                </div>
            </form>
        </FormContainer>
    );
}
