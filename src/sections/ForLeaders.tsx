import CourseHss from '@/components/CourseHss';
import CourseTrygga from '@/components/CourseTrygga';
import Leaders from '@/components/Leaders';

const ForLeaders = () => {
  return (
    <section className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col w-full max-w-360 rounded-sm">
        <Leaders />
        <CourseTrygga />
        <CourseHss />
      </div>
    </section>
  );
};

export default ForLeaders;