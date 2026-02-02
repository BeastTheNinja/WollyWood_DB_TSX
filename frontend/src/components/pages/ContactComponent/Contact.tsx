import { useState } from "react";
import type { FormEvent } from "react";
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkmodeContext'

export const ContactForm = () => {
    // Form state management
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

    // Error state for validation messages
    const [nameError, setNameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [messageError, setMessageError] = useState<string>("");

    // Email validation pattern
    const emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";

    // Handle form submission with validation
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setHasSubmitted(false);

        let isValid = true;

        // Validate full name (must include first and last name)
        if (!fullName.trim()) {
            setNameError("Fulde navn er påkrævet");
            isValid = false;
        } else if (!fullName.includes(" ")) {
            setNameError("Fulde navn skal indeholde efternavn");
            isValid = false;
        } else {
            setNameError("");
        }

        // Validate email format
        if (!email.trim()) {
            setEmailError("Email er påkrævet");
            isValid = false;
        } else if (!new RegExp(emailPattern).test(email)) {
            setEmailError("Email skal matche mønsteret");
            isValid = false;
        } else {
            setEmailError("");
        }

        // Validate message is not empty
        if (!message.trim()) {
            setMessageError("Kommentar er påkrævet");
            isValid = false;
        } else {
            setMessageError("");
        }

        // If all validations pass, submit form and clear fields
        if (isValid) {
            setHasSubmitted(true);
            setFullName("");
            setEmail("");
            setMessage("");
        }
    };
        // Get dark mode state from context
    const darkModeContext = useContext(DarkModeContext)
    const isDarkMode = darkModeContext?.isDarkMode ?? false

    return (
        <>
            <div className={`flex px-4 gap-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                {/* Contact form with validation */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                    {/* Success message after form submission */}
                    {hasSubmitted && <p className="text-green-600 font-semibold">Formularen er sendt!</p>}

                    {/* Full name input with validation */}
                    <div className="flex flex-col gap-1">
                        <label className={`font-semibold font-[OpenSans] ${isDarkMode ? 'text-gray-200' : 'text-[#524641]'}`}>
                            Fulde navn: <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className={`shadow-inner px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFFFFF] ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-gray-200' : 'bg-white border border-gray-300'}`}
                        />
                        {nameError && <p className="text-red-600">{nameError}</p>}
                    </div>

                    {/* Email input with validation */}
                    <div className="flex flex-col gap-1">
                        <label className={`font-semibold font-[OpenSans] ${isDarkMode ? 'text-gray-200' : 'text-[#524641]'}`}>
                            Email: <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`shadow-inner px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFFFFF] ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-gray-200' : 'bg-white border border-gray-300'}`}
                        />
                        {emailError && <p className="text-red-600">{emailError}</p>}
                    </div>

                    {/* Message textarea with validation */}
                    <div className="flex flex-col gap-1">
                        <label className={`font-semibold font-[OpenSans] ${isDarkMode ? 'text-gray-200' : 'text-[#524641]'}`}>
                            Besked: <span className="text-red-600">*</span>
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={`shadow-inner px-3 py-2 h-32 w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#FFFFFF] ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-gray-200' : 'bg-white border border-gray-300'}`}
                        />

                        {messageError && <p className="text-red-600">{messageError}</p>}

                    </div>

                    {/* Submit button */}
                    <button type="submit" className={`border rounded w-18.75 h-8.5 flex items-center justify-center self-start font-semibold font-[OpenSans] ${isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-500' : 'bg-[#D1B3A7] text-[#524641] border-[#524641]'}`}>
                        Send
                    </button>

                </form>
            </div>
        </>
    );
};