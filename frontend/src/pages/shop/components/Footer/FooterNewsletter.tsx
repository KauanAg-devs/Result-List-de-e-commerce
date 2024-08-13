import { useState } from 'react';

function FooterNewsletter() {
    const [userEmail, setUserEmail] = useState('');
    const [validateEmailResult, setValidateEmailResult] = useState(true);

    const validateEmail = () => {
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        setValidateEmailResult(emailRegex.test(userEmail));
    };

    return (
        <div className="flex flex-col space-y-4 p-4 text-gray-600">
            <h1 className="text-lg font-bold text-gray-800">Newsletter</h1>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <input 
                    type="email" 
                    placeholder="Enter Your Email Address"
                    className="flex-1 border border-gray-300 rounded py-2 px-3 text-sm outline-none focus:border-gray-500"
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <button 
                    onClick={validateEmail}
                    className="bg-black text-white py-2 px-4 rounded text-sm font-semibold hover:bg-gray-800"
                >
                    Subscribe
                </button>
            </div>
            {!validateEmailResult && (
                <h1 className="text-xs text-red-500">Invalid Email Format</h1>
            )}
        </div>
    );
}

export default FooterNewsletter;
