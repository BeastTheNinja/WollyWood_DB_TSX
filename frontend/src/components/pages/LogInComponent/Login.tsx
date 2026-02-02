import { useContext, useState } from "react";
import type { FormEvent } from "react";
import { AuthContext } from "../../context/AuthContext";




export const LogIn = () => {

    const [error, setError] = useState<string | null>(null)
    const { userData, setUserData } = useContext(AuthContext)

    function postLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        // Gem input values
        const form = e.target as HTMLFormElement
        const userName = (form.elements.namedItem('email') as HTMLInputElement).value
        const passWord = (form.elements.namedItem('password') as HTMLInputElement).value

        // Opret body (URLSearchParams)
        const body = new URLSearchParams()

        // append input values til body
        body.append('username', userName)
        body.append('password', passWord)

        const url = 'http://localhost:3000/login'

        // POST body til backend server og håndter response (success/error)
        fetch(url, { method: 'POST', body: body })
            .then((res) => res.json())
            .then((data) => {
                setUserData(data)
                setError('')
            })
            .catch((error) => {
                console.error('Error logging in: ', error)
                setError('Der opstod en fejl - prøv igen')
            })
    }





    return (
        <>
            <div className="px-4 p-5">
            {userData && (
                <b className="font-semibold font-[OpenSans] text-[#524641]">
                    Velkommen {userData.user.firstname} {userData.user.lastname}
                </b>
            )}
            </div>
            <div className="flex px-4 gap-6">
                {error && <b className="ml-5 font-normal ">{error}</b>}
                <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={(e) => postLogin(e)}>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold font-[OpenSans] text-[#524641]">
                            Brugernavn: <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            className="bg-white border border-gray-300 shadow-inner px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
                            name="email"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold font-[OpenSans] text-[#524641]">
                            Password: <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="password"
                            autoComplete="auto"
                            className="bg-white border border-gray-300 shadow-inner px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
                            name="password"
                        />
                    </div>

                    <button type="submit" className="bg-[#D1B3A7] border border-[#524641] rounded w-18.75 h-8.5 flex items-center justify-center self-star text-[#524641] font-semibold font-[OpenSans]">
                        Send
                    </button>

                </form>
            </div>
        </>
    );
};