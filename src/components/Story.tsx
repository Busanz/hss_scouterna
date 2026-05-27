import Image from 'next/image';

const historyImages = [
  '/img/history/mysetgrundsattning1965.png',
  '/img/history/myset.png',
  '/img/history/myset1.png',
  '/img/history/myset2.png',
];

const Story = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-lg my-8 text-text-secondary">Från då till nu</h1>
        <p className="sm:text-lg">
          Söndagen den 28 Januari 1968 invigdes Myset.
        </p>
        <p className="sm:text-lg">
          Under tre år hade då HSS&rsquos Föräldraförening arbetat på stugan.
        </p>
        <br />
        <p className="sm:text-lg w-full max-w-5xl">
          Bygget kostade nära 50.000 kr, dessa pengar hade samlats in på basarer
          och lotterier. På invigningsdagen närvarade nära 400 förväntansfulla
          scouter och föräldrar. De fick bevittna när FF&rsquos ordförande Agne
          Stavegren formellt lämnade över nyckeln till HSS&rsquos ordförande
          Lennart Carlbom.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {historyImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Historisk bild"
            width={250}
            height={150}
            className="h-auto w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Story;
