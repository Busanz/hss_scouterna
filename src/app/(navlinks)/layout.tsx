import Headersection from '@/sections/Headersection';
import Footersection from '@/sections/Footersection';
import AutoBreadcrumbs from '@/components/AutoBreadcrumbs';

export default function NavLinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full items-center px-1 sm:px-2 md:px-4 lg:px-6">
      <Headersection />
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-0">
        <AutoBreadcrumbs />
      </div>
      {children}
      <Footersection />
    </div>
  );
}
