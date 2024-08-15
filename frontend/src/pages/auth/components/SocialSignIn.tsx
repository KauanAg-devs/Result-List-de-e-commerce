interface SocialSignInProps {
    googleSrc: string;
    appleSrc: string;
}

export default function SocialSignIn({ googleSrc, appleSrc }: SocialSignInProps) {
    return (
        <div className='flex justify-between'>
            <img src={googleSrc} alt="Sign in with Google" className='ml-[-1rem]' />
            <img src={appleSrc} alt="Sign in with Apple" className='ml-4' />
        </div>
    );
}
