const ProtokollSection = () => {
  return (
    <section className="w-full max-w-360 py-16 px-6 md:px-12 mb-10 md:mb-20 text-text-secondary bg-text-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl pb-5">Protokoll and Stadgar</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium">Kårstämma</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>2020-04-20</li>
              <li>2020-05-15</li>
              <li>2023-11-22</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">Styrelsemöten</h3>
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
