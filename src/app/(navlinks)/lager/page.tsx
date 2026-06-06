import LagerSection from "@/sections/Lagersection"
import LagerHistorySection from "@/sections/LagerHistorysection"

const LagerPage = () => {
  return (
  <>
  <LagerSection />
  
  <div id="tidigare-lager">
    <LagerHistorySection />
  </div></>
  )
}

export default LagerPage
