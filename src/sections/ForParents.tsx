import Safety from "@/components/Safety";
import TryggaMoten from "@/components/TryggaMoten";
import WaterFocus from "@/components/WaterFocus";

const ForParents = () => {
  return (
    <section className="flex flex-col w-full h-full items-center my-5 lg:my-10">
      <div className="flex flex-col w-full max-w-360 rounded-sm">
        <TryggaMoten />
        <WaterFocus />
        <Safety />
      </div>
    </section>
  );
};

export default ForParents;