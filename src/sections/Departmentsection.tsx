import Image from 'next/image';
import Link from 'next/link';
import { departmentLogos } from '@/data/data';

const Departmentsection = () => {
  return (
    <div className="flex flex-col w-full h-full items-center my-10 lg:my-20">
      <div className="relative flex flex-col items-center w-full max-w-360 pt-5 md:pt-10 bg-blue-200 text-text-secondary rounded-sm">
        <h1>Avdelningar</h1>
        <div className="flex flex-wrap justify-evenly w-full max-w-360 px-4 md:px-6 lg:px-10 py-5 lg:py-10">
          {departmentLogos.map((department, index) => (
            <Link
              key={index}
              href={department.href}
              className="flex flex-col items-center text-center w-full max-w-48 "
            >
              <Image
                src={department.url}
                alt={`Logo of ${department.des}`}
                width={100}
                height={100}
                className="p-1"
              />
              <h3 className="font-normal text-xl pb-1">{department.label}</h3>
              <p className="text-lg">{department.des}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Departmentsection;
