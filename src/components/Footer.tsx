import { Facebook,Youtube,Instagram,Linkedin,Mail, MapPinHouse, Phone} from "lucide-react"

function Footer() {
  return (
    <footer className="w-full bg-slate-950 h-fit text-white p-4">
        <div className="md:flex-row justify-around flex flex-col">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-xl text-center">Contact</h1>
                <hr />
                <address><MapPinHouse className="inline mr-2"/> Address:Lorem ipsum dolor sit j<br/>amet consectetur adipisicing.
                </address>
                <span><Phone className="inline mr-2" />Telephone:<a href="tel:+1234567890" className="hover:underline">123-456-7890</a></span>
                <span><Mail className="inline mr-2"/> Email:<a href="mailto:abcdefg@gmail.com" className="hover:underline">abcdefg@gmail.com</a></span>
            </div>
            <div >
                <h1 className="text-xl text-center items-center">Connect with Us</h1>
                <hr />
                <div className="flex gap-4 my-4 justify-center">
                <Facebook />
                <Youtube/>
                <Instagram/>
                <Linkedin/>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-xl text-center">Our Services</h1>
                <hr />
                <ul>
                    <li>Residential Pest Control</li>
                    <li>Commercial Pest Control</li>
                </ul>

                </div>
        </div>


        <p className="text-center">Pest Control © 2025.</p>
    </footer>
  )
}
export default Footer