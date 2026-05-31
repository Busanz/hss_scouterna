import Headersection from '@/sections/Headersection';
import Footersection from '@/sections/Footersection';

export default function NavLinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full items-center px-1 sm:px-2 md:px-4 lg:px-6">
      <Headersection />
      {children}
      <Footersection />
    </div>
  );
}
