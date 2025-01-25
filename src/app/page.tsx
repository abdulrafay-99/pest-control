import ContactForm from "@/components/ContactForm";
import { CircleCheckBig } from "lucide-react";

export default function Home() {
  return (
    <section className="w-full h-[80vh] bg-services bg-cover bg-center">
      <div className="flex backdrop-brightness-50 h-full px-8 justify-around">
        <div className="text-white flex flex-col justify-around">
          
          <h1 className="text-5xl font-extrabold ">Best Pest Control in Toronto</h1>
          <h2 className="text-4xl font-extralight underline">Your Pest Problem Ends Here</h2>
          <span className="text-3xl font-mono">Our Solution are:</span>
          <ul>
          {['Affordable',"Quick","Efficient"].map((li,index)=>{
            return <li key={index} className="text-xl font-mono"><CircleCheckBig size={20} color='blue' className="inline mr-2"/>{li}</li>
          })}
          </ul>
          <hr />
          <a href="tel:+1234567890" className="bg-red-600 p-4 rounded-lg w-fit">Call +123-456-7890</a>
        </div>
        <div className="hidden md:block h-full w-[30vw] py-4 border-white border-2 bg-black opacity-80">
              <h1 className="text-white text-center text-4xl">Get Free Quote</h1>
              <h2 className="text-white text-center text-2xl">Pest Control Toronto</h2>
              <ContactForm/>
        </div>
      </div>
    </section>
  );
}
 