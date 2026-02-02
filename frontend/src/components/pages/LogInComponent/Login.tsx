import { useContext, useState } from "react";
import type { FormEvent } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DarkModeContext } from '../../context/darkmodeContext'

export const LogIn = () => {
    // State for error messages and authentication context
    const [error, setError] = useState<string | null>(null)
    const { userData, setUserData } = useContext(AuthContext)

    // Handle login form submission
    function postLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        // Extract form values using proper TypeScript casting
        const form = e.target as HTMLFormElement
        const userName = (form.elements.namedItem('email') as HTMLInputElement).value
        const passWord = (form.elements.namedItem('password') as HTMLInputElement).value

        // Create URLSearchParams body for POST request
        const body = new URLSearchParams()
        body.append('username', userName)
        body.append('password', passWord)

        const url = 'http://localhost:3000/login'

        // POST credentials to backend and handle response
        fetch(url, { method: 'POST', body: body })
            .then(async (res) => {
                if (!res.ok) {
                    const msg = await res.text()
                    throw new Error(msg)
                }
                return res.json()
            })
            .then((data) => {
                setUserData(data)
                setError('')
            })
            .catch((error) => {
                console.error('Error logging in: ', error)
                setError('Der opstod en fejl - prøv igen')
            })
    }
        // Get dark mode state from context
    const darkModeContext = useContext(DarkModeContext)
    const isDarkMode = darkModeContext?.isDarkMode ?? false
    return (
        <>
            {/* Welcome message displayed when user is logged in */}
            <div className={`px-4 p-5 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                {userData && (
                    <b className={`font-semibold font-[OpenSans] ${isDarkMode ? 'text-gray-200' : 'text-[#524641]'}`}>
                        Velkommen {userData.user.firstname} {userData.user.lastname}
                    </b>
                )}
            </div>

            {/* Login form */}
            <div className={`flex px-4 gap-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={(e) => postLogin(e)}>
                {/* Display error message if login fails */}
                {error && <b className={`font-normal ${isDarkMode ? 'text-red-300' : ''}`}>{error}</b>}
                    {/* Username input field */}
                    <div className="flex flex-col gap-1">
                        <label className={`font-semibold font-[OpenSans] ${isDarkMode ? 'text-gray-200' : 'text-[#524641]'}`}>
                            Brugernavn: <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            className={`shadow-inner px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFFFFF] ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-gray-200' : 'bg-white border border-gray-300'}`}
                            name="email"
                        />
                    </div>

                    {/* Password input field */}
                    <div className="flex flex-col gap-1">
                        <label className={`font-semibold font-[OpenSans] ${isDarkMode ? 'text-gray-200' : 'text-[#524641]'}`}>
                            Password: <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="password"
                            autoComplete="auto"
                            className={`shadow-inner px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFFFFF] ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-gray-200' : 'bg-white border border-gray-300'}`}
                            name="password"
                        />
                    </div>

                    {/* Submit button */}
                    <button type="submit" className={`border rounded w-18.75 h-8.5 flex items-center justify-center self-star font-semibold font-[OpenSans] ${isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-500' : 'bg-[#D1B3A7] text-[#524641] border-[#524641]'}`}>
                        Send
                    </button>

                </form>
            </div>
        </>
    );
};