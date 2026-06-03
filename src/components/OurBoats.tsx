import Image from 'next/image';

const boats = [
  '/img/ourboats-section/fiveBoats.jpg',
  '/img/ourboats-section/vendela.jpg',
  '/img/ourboats-section/cephalea.jpg'
];

const OurBoats = () => {
  return (
    <div className="w-full pt-5 md:pt-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col justify-start">
          <h2 className="text-center text-xl sm:text-2xl my-5">Våra båtar</h2>
          <p className="sm:text-lg my-10">
            Kåren äger fem segelbåtar, tio optimistjollar, två 2-kronor, och en
            snabb följebåt. Många HSS:are har lärt sig att segla på någon av våra
            båtar. Allt för att kunna stegra utbildningen på ett utmanande och
            äventyrligt sätt.
          </p>
        </div>
        {boats.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="båt"
            width={250}
            height={150}
            className="h-auto w-full rounded-sm"
          />
        ))}
      </div>
    </div>
  );
};

export default OurBoats;
