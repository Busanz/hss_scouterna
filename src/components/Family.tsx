const Family = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 mt-5">
      <div className="flex flex-col justify-start flex-1/2 order-2 px-4 md:px-0 lg:order-1">
        <h2 className=" text-xl sm:text-2xl md:text-3xl">
          Scouting handlar om att växa
        </h2>
        <div className="my-5 space-y-3">
          <p className="sm:text-lg/relaxed">
            I Scouterna får barn och unga träna på att ta ansvar, samarbeta och våga prova nya saker. 
            Det handlar inte om att vara bäst, snabbast eller mest erfaren. 
            Det handlar om att utvecklas tillsammans med andra.
          </p>
          <p className="sm:text-lg/relaxed">
            Barnen får stegvis mer ansvar utifrån ålder och mognad. 
            De yngre scouterna får upptäcka scouting genom lek och enkla utmaningar. 
            De äldre scouterna får större möjlighet att planera, 
            leda och ta ansvar för sig själva och sin patrull.
          </p>
          <p className="sm:text-lg/relaxed">
            Som förälder kan det ibland kännas ovant att se sitt barn packa själv, 
            lösa problem själv eller komma hem från en hajk med både smutsiga kläder och ett stort leende. 
            Men just det är en viktig del av scoutmetoden: 
            barn växer när de får prova, öva och lyckas tillsammans.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start flex-1/2 order-2 md:px-0 lg:order-1">
        <div className="px-4 md:px-0 order-2 lg:order-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl">
            Familjescouting
          </h2>
          <div className="my-5 space-y-3">
            <p className="sm:text-lg/relaxed">
              För yngre barn kan scouting vara något man upptäcker tillsammans med en vuxen. Familjescouting bygger på lek, nyfikenhet, 
              naturupplevelser och gemenskap.
            </p>
            <p className="sm:text-lg/relaxed">
              Här deltar barnet tillsammans med en trygg vuxen, till exempel en förälder, 
              mor- eller farförälder, släkting eller annan vuxen som barnet känner väl. 
              Den vuxna är med under aktiviteten och ansvarar för sitt barn.
            </p>
            <p className="sm:text-lg/relaxed">
              Familjescouting är ett fint sätt att lära känna scouting, kåren och andra familjer. 
              Det är också ett sätt för
              vuxna att upptäcka hur roligt och meningsfullt scoutlivet kan vara.
            </p>
          </div>
        </div>         
      </div>
    </section>
  );
};

export default Family;