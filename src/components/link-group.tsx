import { LinkCard } from "./link-card";

interface LinkData {
  href: string;
  title: string;
  image?: string;
}

interface LinkGroupProps {
  links: LinkData[];
  className?: string;
}

export function LinkGroup({ links, className = "" }: LinkGroupProps) {
  return (
    <div className={`flex flex-col gap-3 w-2/3 ${className}`}>
      {links.map((link, index) => (
        <LinkCard
          key={index}
          href={link.href}
          title={link.title}
          image={link.image}
        />
      ))}
    </div>
  );
}