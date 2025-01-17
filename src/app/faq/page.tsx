import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

function Services() {
  const qaSet={
    'Is it accessible?':' Yes. It adheres to the WAI-ARIA design pattern.',
    'Is it accesible?':' Yes. It adheres to the WAI-ARIA design pattern',
    'Is it accesile?':' Yes. It adheres to the WAI-ARIA design patten.',
    'Is it accssible?':' Yes. It adheres to the WAI-ARIA design patern.'

  }
  console.log(Object.keys(qaSet))

  return (
    <div className="w-full h-[80vh] bg-faq bg-cover bg-center">
      <div className="md:w-[50vw] px-8">
      {Object.keys(qaSet).map((value,index)=>{
        return <Accordion key={index} type="single" collapsible className="bg-blue-950 text-white my-2 rounded-lg px-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>{value}</AccordionTrigger>
          <AccordionContent>
            {qaSet[value]}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      })}
      
      </div>
    </div>
  )
}
export default Services