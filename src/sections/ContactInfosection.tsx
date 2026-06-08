'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Building, TreePine, Sailboat } from 'lucide-react';
import { fadeUpAnimation } from '@/utils/animation';
import LocationCard from '@/components/LocationCard';
import StaticMap from '@/components/Maps';

const ContactInfosection = () => {
  return (
    <div className="flex flex-col w-full max-w-360 h-full bg-primary text-text-primary my-10 md:my-20 px-4 md:px-6 lg:px-10 py-5 md:py-10  rounded-sm">
      <motion.h1
        {...fadeUpAnimation}
        className="text-center text-2xl sm:text-3xl lg:text-4xl text-text-primary px-1 py-5"
      >
        Äventyr och kompisar!
      </motion.h1>

      <h2 className="text-center text-xl sm:text-2xl pb-5 font-light">
        Har du några funderingar eller behöver du komma i kontakt med oss?
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-14">
        <div className="flex-1 min-h-0 space-y-6">
          <div className="bg-background rounded-sm p-4 md:p-5 lg:p-10 flex flex-col gap-5">
            <StaticMap src="/img/maps/hss-map.jpg" alt="HSS map" />
            <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2 text-text-secondary">
              <span
                className="
                w-7 h-7 flex items-center justify-center text-text-secondary
                transition-all duration-300
                group-hover:scale-110 group-hover:rotate-3 group-hover:animate-pulse
                group-hover:drop-shadow-[0_0_10px_rgba(30,144,255,0.6)]
              "
              >
                <MapPin className="w-6 h-6" />
              </span>
              Hitta oss
            </h3>
            <p className="sm:text-lg text-text-secondary">
              Våra lokaler ligger vid Hässelby Strandbad och i skogen mellan
              Lövsta och Gåseborg.
            </p>
            <a
              href="https://maps.app.goo.gl/UnkzfdoqAYyeze3c8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-primary text-text-primary transition duration-400 hover:bg-secondary hover:text-primary inline-flex items-center gap-2 rounded-sm"
            >
              <Building className="w-6 h-6" /> Hässelby Strands Sjöscoutkår i
              Google Maps
            </a>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="bg-background text-text-secondary rounded-sm p-4 md:p-5 lg:p-6">
            <h3 className="text-2xl font-semibold pb-5 flex items-center gap-2">
              <span aria-hidden="true">
                <Mail className="w-6 h-6" />
              </span>
              E-post
            </h3>

            <p className="mb-2">
              <span className="font-medium">Allmänt: </span>
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

          <p className="sm:text-lg pb-5 font-light">
            Trevliga lokaler är en grundförutsättning för bra möten. Våra
            lokaler kan du läsa om genom att följa länkarna nedan.
          </p>

          <LocationCard
            image="/img/history/myset.png"
            title="Myset"
            icon={<TreePine className="w-6 h-6" />}
            description="I skogen mellan Lövsta och Gåseborg ligger Myset, vår stora och fina scoutstuga. Här har kåren en mängd aktiviteter såsom lägeråterträff, KårMästerskapen (KM), övernattningar och hajker."
            extra="Myset består av ett stort samlingsrum med brasa, ett väl tilltaget kök och två mindre ledarrum. Köket är utrustat med el- och vedspis, diskmaskin, mikrovågsugn och stort kylskåp — ett komplett kök som kan serva upp till 30 personer. Koordinater: N 59°23.816′ E 017°46.230′"
            mapLink="https://maps.app.goo.gl/NrhJRgKg1e3bMs7m6"
          />

          <LocationCard
            image="/img/contact/ruffen.jpg"
            title="Ruffen"
            icon={<Sailboat className="w-6 h-6" />}
            description="Ruffen är vår lokal vid Hässelby Strandbad. Här har vi våra avdelningsmöten och den huserar även våra optimistjollar."
            extra="Vägbeskrivning: Från Sandviksvägen sväng ner på Hässelby Strandväg. Vid badet finns en parkering. Gå ner mot vattnet och vik av mot vänster (mot kraftvärmeverket). Den grågröna stugan (Ruffen) ligger snett mittemot bryggan."
            mapLink="https://maps.app.goo.gl/UnkzfdoqAYyeze3c8"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfosection;
