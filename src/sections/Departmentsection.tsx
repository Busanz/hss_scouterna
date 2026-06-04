'use client';
import Image from 'next/image';
import { departmentLogos } from '@/data/data';
import { departmentsIntro } from '@/data/department';
import DepartmentIntro from '@/components/DepartmentIntro';
import type { DepartmentIntroType } from '@/types/types';
import { useState } from 'react';

const Departmentsection = () => {
  const [departmentIndex, setDepartmentIndex] = useState<number>(0);
  const selectedDepartment: DepartmentIntroType =
    departmentsIntro[departmentIndex];

  return (
    <div className="flex flex-col w-full h-full items-center mt-10 lg:mt-20">
      <div className="relative flex flex-col w-full h-full items-center">
        <div className="relative flex flex-col w-full max-w-360 py-5 md:pt-10 text-text-secondary rounded-sm bg-primary">
          <h1 className="flex w-full h-full justify-center text-2xl sm:text-3xl lg:text-4xl text-text-primary">
            Avdelningar
          </h1>
          <div className="flex flex-wrap justify-evenly w-full max-w-360 px-4 md:px-6 lg:px-10 py-5 lg:py-10 gap-y-4 md:gap-y-8">
            {departmentLogos.map((department, index) => (
              <button
                key={index}
                type="button"
                className="flex flex-col items-center text-center w-full max-w-30 sm:max-w-48 cursor-pointer"
                onClick={() => setDepartmentIndex(index)}
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24">
                  <Image
                    src={department.url}
                    alt={`Logo of ${department.des}`}
                    fill
                    className="object-contain p-1"
                    loading="lazy"
                    sizes="(max-width: 640px) 60px,(max-width: 768px) 70px, (max-width: 1024px) 80px, 100px"
                  />
                </div>
                <h3 className="font-normal text-lg sm:text-xl pb-1 text-text-primary">
                  {department.label}
                </h3>
                <p className="flex text-base sm:text-lg justify-center text-text-primary">
                  {department.des}
                </p>
              </button>
            ))}
          </div>
        </div>
        <div className="w-full">
          {selectedDepartment && (
            <DepartmentIntro
              key={departmentIndex}
              department={selectedDepartment}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Departmentsection;
