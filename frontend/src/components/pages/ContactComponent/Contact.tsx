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
        <>
            <h2 className="text-[#D97852] text-[32px] font-[TitilliumWeb] ml-5" >Kontakt os</h2>

            <div className="flex px-4 gap-6">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                    {hasSubmitted && <p className="text-green-600 font-semibold">Formularen er sendt!</p>}

                    <div className="flex flex-col gap-1">
                        <label className="font-semibold">
                            Fulde navn: <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="bg-white border border-gray-300 px-3 py-2"
                        />
                        {nameError && <p className="text-red-600">{nameError}</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-semibold">
                            Email: <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white border border-gray-300 px-3 py-2"
                        />
                        {emailError && <p className="text-red-600">{emailError}</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-semibold">
                            Besked: <span className="text-red-600">*</span>
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="
                            bg-white border 
                            border-gray-300 
                            px-3 
                            py-2
                            h-32
                            w-full
                            resize-none"/>

                        {messageError && <p className="text-red-600">{messageError}</p>}

                    </div>

                    <button type="submit" className="bg-[#D1B3A7] border border-[#524641] px-4 py-2 w-fit self-start">
                        Send
                    </button>

                </form>
            </div>
        </>
    );
};