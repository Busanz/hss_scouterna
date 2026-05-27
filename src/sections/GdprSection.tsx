const GdprSection = () => {
  return <section
    className="w-full py-16 px-6 md:px-12 text-#003660"
    style={{ backgroundColor: "#FFFFFF" }}
  >
    <div className="max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl my-5">GDPR</h2>

      <p className="mb-6 text-DarkBlue-100">
        GDPR kräver att vi informerar våra medlemmar om att vi samlar in
        personuppgifter, vilka uppgifter det gäller och varför vi gör det.
      </p>

      {/* --- SCOUTNET --- */}
      <h3 className="text-xl font-medium mt-8">Scoutnet</h3>
      <p className="mt-2 text-DarkBlue-100">
        Scoutnet är Scouternas gemensamma medlemsregister. Där lagras följande
        uppgifter om varje medlem:
      </p>

      <ul className="list-disc ml-6 mt-4 space-y-1 text-#003660-100">
        <li>Namn*</li>
        <li>Personnummer*</li>
        <li>Adress*</li>
        <li>
          Telefonnummer* (minst ett nummer till föräldrar för omyndig scout, och
          frivilligt till scout)
        </li>
        <li>
          E-postadress* (minst en adress till föräldrar för omyndig scout, och
          frivilligt till scout)
        </li>
        <li>Avdelning</li>
        <li>Patrull</li>
        <li>Startdatum i kåren</li>
        <li>Medlemsavgift</li>
        <li>Ev om förälder har roll i kåren*</li>
        <li>Ev om syskon är medlemmar i kåren*</li>
        <li>Genomförda utbildningar (främst för ledare)</li>
        <li>Roll i kåren (endast för ledare)</li>
        <li>Eventuella utmärkelser</li>
      </ul>

      <p className="mt-4 text-DarkBlue-100">
        * Dessa uppgifter samlas även in för barn i anmälningsregistret
        (kölistan), som är en del av Scoutnet. Uppgifter om syskon och föräldrar
        används för att kunna ge syskonförtur och prioritera barn vars föräldrar
        har en roll i kåren.
      </p>

      <h4 className="text-lg font-medium mt-6">Syfte med insamlingen</h4>
      <ul className="list-disc ml-6 mt-2 space-y-1 text-#003660-100">
        <li>Att veta vilka våra medlemmar är</li>
        <li>Att kunna nå ut med information</li>
        <li>Närvaroregistrering</li>
        <li>Se avdelnings- och patrulltillhörighet</li>
        <li>Fakturering</li>
      </ul>

      <p className="mt-4 text-#003660-100">
        Vi registrerar aldrig hälsouppgifter i Scoutnet.
      </p>

      <h4 className="text-lg font-medium mt-6">Åtkomst och hantering</h4>
      <p className="mt-2 text-DarkBlue-100">
        Ledare och styrelse kan ta ut rapporter ur registret. Ingen utanför HSS
        har tillgång till matrikeln och den kan inte laddas ned från hemsidan. All
        e-postkorrespondens som innehåller medlemsuppgifter raderas efter att
        uppgifterna lagts in i Scoutnet.
      </p>

      <h4 className="text-lg font-medium mt-6">Delning av uppgifter</h4>
      <p className="mt-2 text-DarkBlue-100">
        Relevanta uppgifter delas med kommunen i samband med
        närvarorapportering, för att vi ska kunna få bidrag till verksamheten.
      </p>

      <h4 className="text-lg font-medium mt-6">När medlemskap avslutas</h4>
      <p className="mt-2 text-DarkBlue-100">
        När en medlem avslutar sitt medlemskap försvinner alla uppgifter från
        HSS:s vy i Scoutnet. Uppgifterna finns dock kvar i systemet, men endast
        ett fåtal anställda på Scouternas kansli kan se dem. Försäkringsbolaget
        kräver att uppgifter sparas i upp till tio år, vilket motsvarar tiden då
        ersättning kan begäras för ett försäkringsärende.
      </p>

      {/* --- HAJKER & LÄGER --- */}
      <h3 className="text-xl font-medium mt-10">
        Insamling av uppgifter vid hajker och läger
      </h3>

      <p className="mt-2 text-DarkBlue-100">
        Anmälan sker via mejl eller webbformulär. Då samlas följande in:
      </p>

      <ul className="list-disc ml-6 mt-4 space-y-1 text-#003660-100">
        <li>Namn på scout</li>
        <li>Telefonnummer till föräldrar under hajken</li>
        <li>Specialkost</li>
        <li>Allergier</li>
        <li>Hälsouppgifter</li>
        <li>Övrig relevant information</li>
      </ul>

      <h4 className="text-lg font-medium mt-6">Syfte</h4>
      <p className="mt-2 text-DarkBlue-100">
        Syftet är att kunna planera mat, hantera allergier, säkerställa
        medicinering och ge ledarna kännedom om rädslor, diagnoser eller andra
        viktiga förhållanden. Informationen används även för att snabbt kunna
        kontakta föräldrar.
      </p>

      <p className="mt-4 text-DarkBlue-100">
        All information förvaras ansvarsfullt under aktiviteten och är endast
        tillgänglig för ledarna på berörd avdelning. Efter avslutad hajk eller
        läger raderas/kastas all information direkt.
      </p>

      {/* --- ÖVRIGT --- */}
      <h3 className="text-xl font-medium mt-10">Övrigt</h3>
      <p className="mt-2 text-DarkBlue-100">
        På HSS webbplats används cookies för att analysera besökarnas beteende.
        Läs mer om GDPR inom scouterna på Scouternas hemsida.
      </p>
    </div>
  </section>
}

export default GdprSection