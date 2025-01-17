import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

function ContactForm() {
    const inputStyle = "w-full rounded-md p-2 bg-transparent border-2 border-white caret-white text-white my-2"
    return (
        <form action="" className="p-8">
            <input type="text" required placeholder="Full Name" name="fullName" className={inputStyle} />
            <input type="email" required placeholder="Email" name="email" className={inputStyle} />
            <input type="tel" required placeholder="Telephone" name="tel" className={inputStyle} />
            <Select >
                <SelectTrigger className={inputStyle}>
                    <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Residential">Residential Service</SelectItem>
                    <SelectItem value="Commercial">Commercial Service</SelectItem>
                </SelectContent>
            </Select>

            <input type="Submit" value="Get Free Quote" className="bg-red-600 text-white my-2 p-2 rounded-md"/>




        </form>
    )
}
export default ContactForm




