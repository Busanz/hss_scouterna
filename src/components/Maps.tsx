const Maps = () => {
  const mapsEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2056.763559874268!2d17.8116146157767!3d59.3708289817946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9b3d1a3c6d0b%3A0x6b0b5a6f7e1e2d3c!2sH%C3%A4sselby%20Scoutk%C3%A5r%2C%20Carl%20Bondes%20v%C3%A4g%2090%2C%20165%2074%20H%C3%A4sselby!5e0!3m2!1sen!2sse!4v1700000000000";
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
    </div>
  )

}

export default Maps