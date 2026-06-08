import Family from "@/components/Family";
import Safety from "@/components/Safety";
import TryggaMoten from "@/components/TryggaMoten";

const ForParents = () => {
  return (
    <section className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col w-full max-w-360 rounded-sm">
        <TryggaMoten />
        <Family />
        <Safety />
      </div>
    </section>
  );
};

export default ForParents;