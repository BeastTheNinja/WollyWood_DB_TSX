export const LogIn = () => {

    return (
        <>

            <div className="flex px-4 gap-6">
                <form className="flex flex-col gap-4 w-full max-w-md">
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold">
                            Brugernavn: <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            className="bg-white border border-gray-300 shadow-inner px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold">
                            Password: <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="password"
                            className="bg-white border border-gray-300 shadow-inner px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
                        />
                    </div>

                    <button type="submit" className="bg-[#D1B3A7] border border-[#524641] px-4 py-2 w-fit self-start">
                        Send
                    </button>

                </form>
            </div>
        </>
    );
};