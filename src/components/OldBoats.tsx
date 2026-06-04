import BoatCardLeft from './BoatCardLeft';
import BoatCardRight from './BoatCardRight';

const OldBoats = () => {
  return (
    <div className="flex flex-col w-full max-w-360 my-5 md:mt-10">
      <h2 className="text-text-secondary text-xl sm:text-2xl px-4 md:px-0 pb-5">
        Våra gamla båtar
      </h2>

      <div className="ms:text-lg mb-5">
        <BoatCardLeft
          image="/img/history/boats.jpg"
          name="Båtnamn: "
          years="I HSS ägo: xxxx-xxxx"
          description="Ingalunda var en Plymsnäcka byggd på Neglingevarvet gissningsvis på 20- eller 30-talet. Hon köptes 1961 av Drakarna, som hade fått skrota hennes systerfartyg Någorlunda. Hon förde 16 kvadratmeter segel på en gaffelrigg. Hon var byggd på planka och lade sig villigt trots att pikhornet inte var särdeles hög över vattnet. Hon finns förevigad på kort. Hon var den första av kårens båtar som försågs med motor, det var 1963. Samma år fick också Rubinen motor. De flesta av båtarna var således motorlösa långt in på 70-talet."
        />
        <BoatCardRight
          image="/img/history/oldBoat.jpg"
          name="Båtnamn: "
          years="I HSS ägo: xxxx-xxxx"
          description="Ingalunda var en Plymsnäcka byggd på Neglingevarvet gissningsvis på 20- eller 30-talet. Hon köptes 1961 av Drakarna, som hade fått skrota hennes systerfartyg Någorlunda. Hon förde 16 kvadratmeter segel på en gaffelrigg. Hon var byggd på planka och lade sig villigt trots att pikhornet inte var särdeles hög över vattnet. Hon finns förevigad på kort. Hon var den första av kårens båtar som försågs med motor, det var 1963. Samma år fick också Rubinen motor. De flesta av båtarna var således motorlösa långt in på 70-talet."
        />

        <BoatCardLeft
          image="/img/history/boats.jpg"
          name="Båtnamn: "
          years="I HSS ägo: xxxx-xxxx"
          description="Ingalunda var en Plymsnäcka byggd på Neglingevarvet gissningsvis på 20- eller 30-talet. Hon köptes 1961 av Drakarna, som hade fått skrota hennes systerfartyg Någorlunda. Hon förde 16 kvadratmeter segel på en gaffelrigg. Hon var byggd på planka och lade sig villigt trots att pikhornet inte var särdeles hög över vattnet. Hon finns förevigad på kort. Hon var den första av kårens båtar som försågs med motor, det var 1963. Samma år fick också Rubinen motor. De flesta av båtarna var således motorlösa långt in på 70-talet."
        />
      </div>
    </div>
  );
};

export default OldBoats;
