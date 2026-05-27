"use client";

const mapsEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2056.763559874268!2d17.8116146157767!3d59.3708289817946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9b3d1a3c6d0b%3A0x6b0b5a6f7e1e2d3c!2sH%C3%A4sselby%20Scoutk%C3%A5r%2C%20Carl%20Bondes%20v%C3%A4g%2090%2C%20165%2074%20H%C3%A4sselby!5e0!3m2!1sen!2sse!4v1700000000000";


export default function ContactPage() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: "#003660" }}>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-white">

        <h2
          className="text-xl sm:text-2xl my-5"
        >
          Kontakta oss
        </h2>

        <p
          className="text-lg mb-12 max-w-2xl"
        >
          Har du några funderingar eller behöver du komma i kontakt med oss?
        </p>

        {/* Map + Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Map */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-2 w-full h-64 md:h-auto">
            <div className="w-full aspect-video rounded overflow-hidden">
              <iframe
                src={mapsEmbedSrc}
                className="w-full h-64 border-0"
                title="Hässelby Scoutkår — karta"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Karta över Hässelby Scoutkår"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">E-post</h3>

            <div className="space-y-3">
                <p>
                  <span className="font-medium">Address:</span>{" "}
                  <a href="mailto:info@hss-scout.org" className="underline" aria-label="Email info@hss-scout.org">
                    info@hss-scout.org
                  </a>
                </p>


              <p>
                <span className="font-medium">För medlemsärenden:</span>{" "}
                <a href="mailto:register@hss-scout.org" className="underline">
                  register@hss-scout.org
                </a>
              </p>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold mb-4">Adress</h3>
                <p>Myset:</p>
                <p>Ruffen:</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div
          className="text-center mt-10"
        >
          <p>
            Se om ditt svar finns på{" "}
            <a
              href="#"
              className="font-semibold underline underline-offset-2 text-white hover:text-white transition-colors duration-200"
            >
              FAQ
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
