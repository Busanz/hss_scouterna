import Maps from "@/components/Maps"

const ContactInfosection = () => {
  return <div className="flex">
    <Maps />
    <div className="space-y-3">

      <h3 className="text-2xl font-semibold mb-4">E-post</h3>
      <p>
        <span className="font-medium">Address:</span>{" "}
        <a href="mailto:info@hss-scout.org" className="underline" aria-label="Email info@hss-scout.org">
          info@hss-scout.org
        </a>
      </p>

      <p>
        <span className="font-medium">För medlemsärenden:</span>{" "}
        <a href="mailto:register@hss-scout.org" className="underline">
          register@hss-scout.org
        </a>
      </p>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-4">Adress</h3>
        <p>Myset:</p>
        <p>Ruffen:</p>
      </div>
    </div>
  </div>
}

export default ContactInfosection