import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type InputFormProps = {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
    inputName: string;
    requiredText: string;
    inputRegisterName?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void; 
};

export function InputForm({ inputRegisterName, register, errors, inputName, requiredText, onBlur, onChange, onKeyDown }: InputFormProps) {
    const fieldName = inputName.toLowerCase().replace(/ /g, '');

    return inputName.toLowerCase() === 'additional information' ? (
        <div className="flex flex-col mr-8 mb-9">
            <label className="text-sm mb-2">{inputName}</label>
            <input
                type="text"
                placeholder="Additional information"
                {...register("additionalInfo")}
                className="text-center h-16 border border-gray-500 rounded-md"
                onBlur={onBlur}
                onChange={onChange} 
                onKeyDown={onKeyDown} 
            />
        </div>
    ) : (
        <div className="flex flex-col mr-8 mb-9">
            <label className="text-sm mb-2">{inputName}</label>
            <input
                className={`${inputName === "First name" || inputName === 'Last name' ? 'w-48' : 'w-[26rem]'} text-center h-16 border border-gray-500 rounded-md`}
                type="text"
                {...register(inputRegisterName || fieldName, { required: requiredText })}
                onBlur={onBlur}
                onChange={onChange}
                onKeyDown={onKeyDown} 
            />
            {errors[fieldName] && <p>{String(errors[fieldName]?.message)}</p>}
        </div>
    );
}
