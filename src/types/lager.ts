export type LagerItem = {
  title: string;
  subtitle: string;
  icon: keyof typeof import("lucide-react");
  description: string;
  details: {
    when: string;
    where: string;
    age: string;
    formerName: string;
  };
  color: string;
};