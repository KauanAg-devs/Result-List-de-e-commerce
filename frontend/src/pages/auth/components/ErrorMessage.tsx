interface ErrorMessageProps {
    message?: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
    return message ? <span className='text-red-500 text-xs'>{message}</span> : null;
}
