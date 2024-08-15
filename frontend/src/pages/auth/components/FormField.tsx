import { FieldError, FieldErrorsImpl, Merge, Path } from 'react-hook-form';

interface FormFieldProps<T> {
    id: Path<T>;
    type: string;
    placeholder: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error?: FieldError  | Merge<FieldError, FieldErrorsImpl<any>>
};


export default function FormField<T>({ id, type, placeholder, register, error }: FormFieldProps<T>) {
    return (
        <div className='flex flex-col'>
            <label htmlFor={id} className='text-black mb-2 text-sm md:text-base'>{placeholder}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className='w-full p-2 border border-gray-300 rounded-lg'
                {...register(id)}
            />
            {error && <span className='text-red-500 text-xs'>{error.message as string}</span>}
        </div>
    );
}
