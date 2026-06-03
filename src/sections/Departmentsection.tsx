'use client';
import Image from 'next/image';
import { departmentLogos, departmentsIntro } from '@/data/data';
import DepartmentIntro from '@/components/DepartmentIntro';
import type { DepartmentIntroType } from '@/types/types';
import { useState } from 'react';

const Departmentsection = () => {
  const [departmentIndex, setDepartmentIndex] = useState<number>(0);
  const selectedDepartment: DepartmentIntroType =
    departmentsIntro[departmentIndex];
  console.log(selectedDepartment);
  return (
    <div className="flex flex-col w-full h-full items-center my-10 lg:my-20">
      <div className="relative flex flex-col items-center w-full max-w-360 pt-5 md:pt-10 bg-primary text-text-secondary rounded-sm">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-text-primary">
          Avdelningar
        </h1>
        <div className="flex flex-wrap justify-evenly w-full max-w-360 px-4 md:px-6 lg:px-10 py-5 lg:py-10">
          {departmentLogos.map((department, index) => (
            <button
              key={index}
              type="button"
              className="flex flex-col items-center text-center w-full max-w-48"
              onClick={() => setDepartmentIndex(index)}
            >
              <div className="relative w-24 h-24">
                <Image
                  src={department.url}
                  alt={`Logo of ${department.des}`}
                  fill
                  className="object-contain p-1"
                  loading="lazy"
                  sizes="(max-width: 640px) 60px, (max-width: 1024px) 80px, 100px"
                />
              </div>
              <h3 className="font-normal text-xl pb-1 text-text-primary">
                {department.label}
              </h3>
              <p className="text-lg text-text-primary">{department.des}</p>
            </button>
          ))}
        </div>
        <div className="w-full">
          {selectedDepartment && (
            <DepartmentIntro department={selectedDepartment} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Departmentsection;
