'use client';

import { motion } from 'motion/react';
import { fadeUpAnimation } from '@/utils/animation';
import LocationCard from '@/components/LocationCard';

const ContactInfosection = () => {
  return (
    <div className="flex flex-col w-full max-w-360 h-full bg-bg-light mt-10 md:mt-20 px-4 md:px-6 lg:px-10 py-5 md:py-10 mb-5 md:mb-10 rounded-sm">

      <motion.h1
        {...fadeUpAnimation}
        className="text-center text-2xl sm:text-3xl lg:text-4xl text-text-secondary px-1 py-5"
      >
        Äventyr och kompisar!
      </motion.h1>

      <p className="text-center sm:text-lg pb-5">
        Har du några funderingar eller behöver du komma i kontakt med oss?
      </p>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-14">

        <div className="flex-1 space-y-6">

          <div className="bg-background rounded-md shadow-md p-4 md:p-5 lg:p-6">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span aria-hidden="true">📧</span>E-post
            </h3>

            <p className="mb-2">
              <span className="font-medium">Adress: </span>
              <a href="mailto:info@hss-scout.org" className="underline">
                info@hss-scout.org
              </a>
            </p>

            <p className="mb-4">
              <span className="font-medium">För medlemsärenden: </span>
              <a href="mailto:register@hss-scout.org" className="underline">
                register@hss-scout.org
              </a>
            </p>

            <p className="mb-1">
              <span className="font-medium">Bokningsförfrågan Myset: </span>
              <a href="mailto:myset.hss.scout@gmail.com" className="underline">
                myset.hss.scout@gmail.com
              </a>
            </p>
          </div>

          <div className="bg-background rounded-md shadow-md p-4 md:p-5 lg:p-6 flex flex-col gap-3">
            <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2 text-text-secondary">
              <span aria-hidden="true">📍</span>Hitta oss
            </h3>
            <p className="text-sm md:text-base">
              Våra lokaler ligger vid Hässelby Strandbad och i skogen mellan Lövsta och Gåseborg.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Bruksvägen+27,+165+65+Hässelby"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-primary text-text-primary hover:opacity-90 inline-flex items-center gap-2"
            >
              🗺️ Hässelby Strands Sjöscoutkår i Google Maps
            </a>
          </div>
        </div>

        <div className="flex-1 space-y-6">

          <p className="text-base md:text-lg font-semibold">
            Trevliga lokaler är en grundförutsättning för bra möten. Våra
            lokaler kan du läsa om genom att följa länkarna nedan.
          </p>

          <LocationCard
            image="/img/history/myset.png"
            title="Myset"
            icon="🌲"
            description="I skogen mellan Lövsta och Gåseborg ligger Myset, vår stora och fina scoutstuga. Här har kåren en mängd aktiviteter såsom lägeråterträff, KårMästerskapen (KM), övernattningar och hajker."
            extra="Myset består av ett stort samlingsrum med brasa, ett väl tilltaget kök och två mindre ledarrum. Köket är utrustat med el- och vedspis, diskmaskin, mikrovågsugn och stort kylskåp — ett komplett kök som kan serva upp till 30 personer. Koordinater: N 59°23.816′ E 017°46.230′"
            mapLink="https://www.google.com/maps/search/?api=1&query=59.396933,17.770500"
          />

          <LocationCard
            image="/img/history/boats.jpg"
            title="Ruffen"
            icon="⛵"
            description="Ruffen är vår lokal vid Hässelby Strandbad. Här har vi våra avdelningsmöten och den huserar även våra optimistjollar."
            extra="Vägbeskrivning: Från Sandviksvägen sväng ner på Hässelby Strandväg. Vid badet finns en parkering. Gå ner mot vattnet och vik av mot vänster (mot kraftvärmeverket). Den grågröna stugan (Ruffen) ligger snett mittemot bryggan."
            mapLink="https://www.google.com/maps/place/H%C3%A4sselby+Strandbad"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfosection;
