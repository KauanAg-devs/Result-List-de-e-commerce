interface SubmitButtonProps {
    label: string;
}

export default function SubmitButton({ label }: SubmitButtonProps) {
    return (
        <input
            type="submit"
            value={label}
            className='w-full p-2 bg-[#3A5B22] text-white font-semibold rounded-lg cursor-pointer hover:bg-[#33511e]'
        />
    );
}
