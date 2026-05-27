const PolicySection = () => {
  return <section
    className="w-full py-16 px-6 md:px-12 text-white"
    style={{ backgroundColor: "#003660" }}
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl sm:text-2xl my-5">Policys</h2>

      <div className="space-y-4">
        <h3 className="text-xl font-medium">Fotopolicy</h3>
        <p>
          Vi använder bilder från verksamheten i syfte att marknadsföra
          scouting och vår kår. Om du eller ditt barn inte vill vara med på
          bild kan ni meddela oss så tar vi bort eller undviker publicering.
        </p>
      </div>
    </div>
  </section>
}

export default PolicySection