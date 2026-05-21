import Values from '@/components/Values';

const OurCommitments = () => {
  return (
    <section className="flex flex-col w-full h-full items-center my-10 lg:my-20">
      <div className="flex flex-col w-full max-w-360 rounded-sm pb-20 bg-primary">
        <div className="flex flex-col w-full my-16">
          <h1 className="text-center text-text-primary mt-8">
            Våra engagemang
          </h1>
          <hr className="flex-1 my-8 h-[0.5px border-text-primary" />
        </div>

        <Values />
      </div>
    </section>
  );
};

export default OurCommitments;
