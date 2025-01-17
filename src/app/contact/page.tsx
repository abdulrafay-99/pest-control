import ContactForm from "@/components/ContactForm"

function Services() {
  return (
    <div className="w-full h-[80vh] bg-contact bg-cover bg-center ">
      <div className="backdrop-brightness-50 w-full md:w-[50vw] h-full mx-auto flex items-center">
        <ContactForm />
      </div>
    </div>
  )
}
export default Services