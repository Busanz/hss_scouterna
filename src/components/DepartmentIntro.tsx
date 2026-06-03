import Image from 'next/image';
import type { DepartmentIntroType } from '@/types/types';
import CTASelector from './ui/CTASelector';

type DepartmentHeaderProps = {
  department: DepartmentIntroType;
};

const DepartmentIntro = ({ department }: DepartmentHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center gap-1 md:gap-12 text-text-secondary bg-background px-10 py-10 md:py-20">
      <div className="relative flex w-70 h-70 rounded-sm">
        <Image
          src={department.image}
          alt={department.title}
          fill
          className="object-contain object-top-left p-1 rounded-sm"
          loading="eager"
          sizes="(max-width: 640px) 60px, (max-width: 1024px) 90px, 100px"
        />
      </div>

      <div className="w-full max-w-3xl pt-3">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">{department.title}</h1>
        <h2 className="text-xl sm:text-2xl">{department.subtitle}</h2>
        <p className="sm:text-lg pt-4 ">{department.description}</p>
        {department.details && (
          <div className="mt-6 space-y-2 text-sm sm:text-base opacity-90">
            <p>
              <strong>När:</strong> {department.details.when}
            </p>
            <p>
              <strong>Var:</strong> {department.details.where}
            </p>
            <p>
              <strong>Ålder:</strong> {department.details.age}
            </p>
            <p className="pb-10">
              <strong>Tidigare namn:</strong> {department.details.formerName}
            </p>
          </div>
        )}
        <CTASelector
          varient="primary"
          onClick={() => {
            console.log(department.title);
          }}
          ctaText={'Visa intresse'}
          textColor={'#012b4c'}
          bgColor={department.color}
        />
      </div>
    </div>
  );
};

export default DepartmentIntro;
