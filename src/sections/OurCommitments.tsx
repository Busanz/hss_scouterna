import Values from '@/components/Values';

const OurCommitments = () => {
  return (
    <section className="flex flex-col w-full h-full items-center my-5 lg:my-10">
      <div className="flex flex-col w-full max-w-360 rounded-sm pb-20 bg-primary">
        <div className="flex flex-col w-full">
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl text-text-primary py-5 md:py-10 ">
            Våra engagemang
          </h1>
          {/* <hr className="flex-1 pb-5 md:pb-10 border-text-primary" /> */}
        </div>

        <Values />
      </div>
    </section>
  );
};

export default OurCommitments;
