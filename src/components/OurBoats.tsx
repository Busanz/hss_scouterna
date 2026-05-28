import Image from 'next/image';

const boats = [
  '/img/ourboats-section/vendela.jpg',
  '/img/ourboats-section/cephalea.jpg',
];

const OurBoats = () => {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-center text-xl sm:text-2xl">Våra båtar</h2>
      <p className="my-10 mx-5">
        Kåren äger fem segelbåtar, tio optimistjollar, två 2-kronor, och en
        snabb följebåt. Många HSS:are har lärt sig att segla på någon av våra
        båtar. Allt för att kunna stegra utbildningen på ett utmanande och
        äventyrligt sätt.
      </p>
      <div className="grid grid-cols-1 m-5 gap-6 sm:grid-cols-2">
        {boats.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="båt"
            width={250}
            height={150}
            className="h-auto w-full rounded-[5px]"
          />
        ))}
      </div>
    </div>
  );
};

export default OurBoats;
