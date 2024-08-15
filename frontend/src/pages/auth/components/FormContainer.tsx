interface FormContainerProps {
    children: React.ReactNode;
}

export default function FormContainer({ children }: FormContainerProps) {
    return (
        <div className='w-full max-w-md mx-auto p-4'>
            {children}
        </div>
    );
}
