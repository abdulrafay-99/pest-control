import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

function Services() {
  const services={
    'Ant Control':' Ants are small in size but big in irritation. From carpenter ants to pavement ants, our ant exterminators know what it takes to wipe out ant nests and ant colonies for good.',

    'Fly Control':'Food preparation and disposal, along with air currents, attracts flies into homes. Professional fly control helps you get rid of flies permanently. Let us help you maintain a fly-free home.',

    'Bed Bug Control':'Once near extinction, bed bugs are back in full flight. We use chemical and steam treatments that deeply penetrate the tiniest crevices, ensuring all bed bugs and eggs are wiped out.',

    'Cockroach Control':'Cockroaches are nocturnal so roach infestations might not reveal themselves until you’ve got a full-blown problem. Carrying bacteria into food-dense areas, remove these crawling health hazards now',

    'Termite Control': "Termites can breach cracks as thin as your credit card. Therefore, termite removal is tricky. Not for our termite control team however. We’ll use tried and tested techniques to liberate your space."




  }
  return (
    <div className="w-full h-[80vh] bg-services bg-cover bg-center">
      <div className="backdrop-brightness-50 w-full h-full pt-4">
      <h1 className="text-white text-4xl text-center">"Our Services"</h1>
      <a href='tel:+123-456-7890' className='block md:hidden mx-auto my-2 bg-red-600 p-2 rounded-full w-fit'>Call +123-456-7890</a>
      <Link href='/contact' className='block md:hidden bg-green-600 p-2 mx-auto rounded-full w-fit'>Get Free Quote</Link>
      <div className="p-12">
      {Object.keys(services).map((value,index)=>{
        return <Accordion key={index} type="single" collapsible className="bg-transparent text-white my-2 rounded-lg px-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>{value}</AccordionTrigger>
          <AccordionContent>
            {services[value]}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      })}
      </div>

      </div>
    </div>
  )
}
export default Services