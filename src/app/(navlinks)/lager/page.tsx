import LagerHistorySection from "@/sections/LagerHistorysection"
import LagerSection from "@/sections/Lagersection"

const LagerPage = () => {
  return (
    <>
      <LagerSection />

      <div id="tidigare-lager">
        <LagerHistorySection />
      </div>
    </>
  )
}

export default LagerPage
