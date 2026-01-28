
interface ContactProps {
    Title: string;
}

export const Contact = ({ Title }: ContactProps) => {


    return (
        <>
           <h1>{Title}</h1> 

            <form>
            <label>Name:*</label>
            <input type="text" name="name" required />
            <label>Email: *</label>
            <input type="email" name="email" required />
            <label>Message: *</label>
            <textarea name="message" required />
            <button type="submit">Send</button>
           </form>
        </>
    )
}