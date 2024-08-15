interface SeparatorProps {
    src: string;
    alt: string;
}

export default function Separator({ src, alt }: SeparatorProps) {
    return <img src={src} alt={alt} className='w-full' />;
}
