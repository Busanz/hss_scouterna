import Link from 'next/link';
import Image from 'next/image';
import clothes from '@/data/clothes';

const ClubClothes = () => {
  return (
    <section className="flex flex-col w-full h-full items-center my-10 lg:my-20">
      <div className="flex flex-col w-full max-w-360 rounded-sm pb-20 bg-primary text-text-primary px-4 md:px-6 lg:px-10 ">
        <h2 className="text-center  text-xl sm:text-xl lg:text-3xl pt-6">
          Klubbkläder
        </h2>

        <div className="mt-6 text-center text-sm text-text-subtitle sm:mt-4 sm:text-lg">
          <h4 className="mt-2 sm:mt-3">
            Hur skiljer sig HSS från andra scoutkårer?
          </h4>
          <h4 className="mt-2 sm:mt-3">
            Hur känner man igen en HSS-scout bland 2000 andra scouter?
          </h4>
        </div>

        <div className="mx-auto my-8 h-0.5 w-full sm:my-12 bg-text-subtitle" />

        <p className="mb-10 text-sm sm:mb-12 sm:text-base ">
          Det finns få scoutkårer som har en lika snygg logga som vi på HSS och därför vill vi att den ska synas!
          <br />
          Nedan hittar ni alla våra produkter som är tryckt med vår logga.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7">
          {clothes.map((product) => (
            <div key={product.name} className="flex flex-col">
              <div className="overflow-hidden rounded-sm bg-background">
                <Image
                  src={product.image}
                  alt={product.alt}
                  className="h-full w-full object-cover"
                  width={200}
                  height={250}
                />
              </div>
              <p className="mt-2 text-right text-sm  sm:text-base">
                {product.price}
              </p>
              <p className="mt-1 text-sm  sm:text-lg">{product.name}</p>
              <p className="mt-1 text-sm text-text-primary sm:text-base">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-sm sm:text-base">
          <p className="mb-6 sm:mb-7">
            Tröjorna köps enklast på kårdiscot i november eller på sommaravslutningen i juni.
            <br />
            Du kan självklart också mejla{' '}
            <Link
              href="mailto:hsstrojan@hss-scout.org"
              className="font-bold text-text-primary hover:underline"
            >
              hsstrojan@hss-scout.org
            </Link>
          </p>
          <p>
            <span className="font-bold">OBS!</span>
             Tänk på att när en HSS-tröja har tjänat ut skall den slängas och inte lämnas till klädinsamling. 
            <br />
            HSS-tröjor är till för medlemmar i HSS och ingen annan!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClubClothes;
