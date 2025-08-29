import Image from "next/image";

interface LinkCardProps {
  href: string;
  title: string;
  image?: string; 
}

export function LinkCard({ href, title, image }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center p-2 w-full rounded-lg hover:scale-101  border "
    >
      {image && (
        <div className="relative w-10 h-10">
          <Image
            className="rounded-full"
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <div className="flex justify-center items-center flex-1">
        <h2 className="font-semibold">{title}</h2>
      </div>
      {image && <div className="w-10 h-10"></div>}
    </a>
  );
}