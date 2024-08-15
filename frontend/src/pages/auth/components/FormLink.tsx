import { Link } from 'react-router-dom';

interface FormLinkProps {
    to: string;
    text: string;
    className?: string;
}

export default function FormLink({ to, text, className }: FormLinkProps) {
    return <Link to={to} className={className}>{text}</Link>;
}
