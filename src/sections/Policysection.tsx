const PolicySection = () => {
  return (
    <section className="flex flex-col items-center w-full px-6 md:px-12 my-10 md:my-20 text-text-secondary">
      <h1 className="text-center text-4xl font-extrabold pb-5">Policys</h1>
      <hr className="mb-5 md:mb-10 border-primary h-px w-full max-w-360" />
      <div className="flex flex-col w-full px-4 md:px-6 lg:px-10  max-w-360">
        <div className="space-y-4 w-full max-w-5xl">
          <h3 className="sm:mb-6 text-xl sm:text-2xl pb-5">Fotopolicy</h3>
          <p className="sm:text-lg">
            Vi använder bilder från verksamheten i syfte att marknadsföra
            scouting och vår kår. Om du eller ditt barn inte vill vara med på
            bild kan ni meddela oss så tar vi bort eller undviker publicering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
