const ProtokollSection = () => {
  return (
    <section className="flex flex-col w-full h-full items-center justify-center text-text-secondary py-10 md:py-20 px-4 md:px-6 lg:px-10">
      <div className="flex flex-col max-w-360 w-full">
        <h2 className="text-xl sm:text-2xl pb-5">Protokoll and Stadgar</h2>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-medium pb-5">Kårstämma</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>2020-04-20</li>
              <li>2020-05-15</li>
              <li>2023-11-22</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium pb-5">Styrelsemöten</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>2020-04-20</li>
              <li>2020-05-15</li>
              <li>2023-11-22</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtokollSection;
