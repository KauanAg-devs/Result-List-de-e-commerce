interface FormHeaderProps {
    title: string;
    subtitle: string;
}

export default function FormHeader({ title, subtitle }: FormHeaderProps) {
    return (
        <div className='text-center mb-4'>
            <h1 className='text-black text-xl md:text-2xl font-bold'>{title}</h1>
            <h2 className='text-black text-sm md:text-lg'>{subtitle}</h2>
        </div>
    );
}
