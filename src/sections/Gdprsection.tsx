const GdprSection = () => {
  return (
    <section className="w-full max-w-360 py-12 px-6 md:px-12 bg-primary text-text-primary">
      <div className="max-w-4xl mx-auto">

        <h3 className="text-xl font-semibold mb-4">GDPR</h3>

        <p className="leading-relaxed mb-6">
          GDPR kräver att vi talar om för våra medlemmar att vi samlar in uppgifter, vilka uppgifter vi samlar in och varför vi gör det.
        </p>

        <h3 className="text-xl font-semibold mb-4">Scoutnet</h3>

        <p className="leading-relaxed mb-4">
          Scoutnet är Scouternas gemensamma medlemsregister och där samlar vi följande information om varje medlem:
        </p>

        <ul className="list-disc ml-6 space-y-1 mb-6">
          <li>Namn*</li>
          <li>Personnummer*</li>
          <li>Adress*</li>
          <li>Telefonnummer*</li>
          <li>E-postadress*</li>
          <li>Avdelning</li>
          <li>Patrull</li>
          <li>Startdatum i kåren</li>
          <li>Medlemsavgift</li>
          <li>Ev. om föräldrar har roll i kåren*</li>
          <li>Ev. om syskon är medlemmar i kåren*</li>
          <li>Genomförda utbildningar</li>
          <li>Roll i kåren</li>
          <li>Eventuella utmärkelser</li>
        </ul>

        <p className="leading-relaxed mb-6">
          *Dessa uppgifter samlas även in för barn i anmälningsregistret (kölistan). Informationen om syskon och föräldrar används för syskonförtur och prioritering.
        </p>

        <p className="leading-relaxed mb-6">
          Syftet med uppgiftssamlingen i Scoutnet är att veta vilka våra medlemmar är, kunna nå ut med information, närvaroregistrering, avdelnings- och patrulltillhörighet samt fakturering. Vi skriver aldrig in hälsouppgifter i Scoutnet.
        </p>

        <p className="leading-relaxed mb-6">
          Ledare och styrelse kan ta ut rapporter, men inga personer utanför HSS har tillgång till matrikeln. Uppgifter delas med kommunen för närvarorapportering. När en medlem avslutar sitt medlemskap raderas uppgifterna från HSS:s vy.
        </p>

        <p className="leading-relaxed mb-10">
          Försäkringsbolaget kräver att uppgifter sparas i upp till tio år.
        </p>

        <h3 className="text-xl font-semibold mb-4">
          Insamling av uppgifter i samband med hajker och läger
        </h3>

        <p className="leading-relaxed mb-4">
          Anmälning sker via mejl eller webbformulär. Namn och telefonnummer till föräldrar samlas in av ledaren.
        </p>

        <p className="leading-relaxed mb-4">
          Vid hajker och läger samlar vi även in:
        </p>

        <ul className="list-disc ml-6 space-y-1 mb-6">
          <li>matrelaterad information (t.ex. allergier)</li>
          <li>hälsouppgifter relevanta för planering och genomförande</li>
        </ul>

        <p className="leading-relaxed mb-6">
          Exempel: allergier, medicinering, sömnsvårigheter, rädslor, diagnoser eller annat som ledarna behöver känna till för att kunna stödja barnet.
        </p>

        <p className="leading-relaxed mb-10">
          Uppgifterna förvaras ansvarsfullt under aktiviteten och raderas direkt efteråt.
        </p>

        <h3 className="text-xl font-semibold mb-4">Övrigt</h3>

        <p className="leading-relaxed mb-6">
          På HSS webbplats används eventuellt cookies för att analysera besökarens beteende.
        </p>

        <p className="leading-relaxed mb-10">
          Läs mer om GDPR inom scouterna på{" "}
          <a
            href="https://www.scouterna.se"
            className="underline hover:text-text-subtitle-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            scouternas hemsida
          </a>.
        </p>

       <div className="mt-8">
          <a
            href="/gdpr_begaran.pdf"
            download
            className="inline-block w-full md:w-auto bg-text-subtitle text-text-primary font-medium px-5 py-3 rounded-md shadow hover:bg-text-secondary transition"
          >
            Ladda ner GDPR-blanketten (PDF)
          </a>
        </div>

      </div>
    </section>
  );
};

export default GdprSection;
