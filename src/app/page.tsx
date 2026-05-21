import Headersection from "@/sections/Headersection";
import Footersection from "@/sections/Footersection";
import FaqSection from "@/sections/FaqSection";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Headersection />
      <FaqSection />
      <Footersection />
    </div>
  );
}
