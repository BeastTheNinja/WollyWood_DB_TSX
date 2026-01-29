import { useState } from "react";
import type { FormEvent } from "react";

export const ContactForm = () => {
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
    const [nameError, setNameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [messageError, setMessageError] = useState<string>("");

    const emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setHasSubmitted(false);

        let isValid = true;

        if (!fullName.trim()) {
            setNameError("Fulde navn er påkrævet");
            isValid = false;
        } else if (!fullName.includes(" ")) {
            setNameError("Fulde navn skal indeholde efternavn");
            isValid = false;
        } else {
            setNameError("");
        }

        if (!email.trim()) {
            setEmailError("Email er påkrævet");
            isValid = false;
        } else if (!new RegExp(emailPattern).test(email)) {
            setEmailError("Email skal matche mønsteret");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (!message.trim()) {
            setMessageError("Kommentar er påkrævet");
            isValid = false;
        } else {
            setMessageError("");
        }

        if (isValid) {
            setHasSubmitted(true);
            setFullName("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 gap-6">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-gray-800">Kontakt Os</h2>

                {hasSubmitted && <p className="text-green-600 font-semibold">Formularen er sendt!</p>}

                <div>
                    <label className="text-sm font-semibold text-gray-700">Fulde Navn</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                            const value = e.target.value;
                            setFullName(value);
                            if (value.trim()) setNameError("");
                        }}
                        className="mt-1 w-full bg-white border border-gray-300 shadow-lg px-3 py-2"
                    />
                    {nameError && <p className="text-red-600 text-sm">{nameError}</p>}
                </div>

                <div>
                    <label className="text-sm font-semibold text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            const value = e.target.value;
                            setEmail(value);
                            if (value.trim() && new RegExp(emailPattern).test(value)) setEmailError("");
                        }}
                        className="mt-1 w-full bg-white border border-gray-300 shadow-lg px-3 py-2"
                    />
                    {emailError && <p className="text-red-600 text-sm">{emailError}</p>}
                </div>
                <div>
                    <label className="text-sm font-semibold text-gray-700">Kommentar</label>
                    <textarea
                        value={message}
                        onChange={(e) => {
                            const value = e.target.value;
                            setMessage(value);
                            if (value.trim()) setMessageError("");
                        }}
                        className="mt-1 w-full bg-white border border-gray-300 shadow-lg px-3 py-2"
                        rows={4}
                    />
                    {messageError && <p className="text-red-600 text-sm">{messageError}</p>}
                </div>

                <div className="flex gap-3">
                    <button type="submit" className="flex-1 rounded-lg bg-blue-600 text-white py-2 font-semibold hover:bg-blue-700 transition">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};