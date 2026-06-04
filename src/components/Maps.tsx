'use client'

interface StaticMapProps {
  src: string,
  alt?:string,
}

const StaticMap = ({src, alt ='Map'}: StaticMapProps) => {
  return (
    <div className="relative w-full h-48 md:h-56 lg:h-64 rounded-md overflow-hidden bg-blue-100 border-2 border-blue-500">
    <img 
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
    />
    </div>
  )
}

export default StaticMap