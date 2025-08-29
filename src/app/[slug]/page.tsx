import { LinkGroup } from "~/components/link-group";
import { getPageBySlug } from "~/lib/queries";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function SlugPage({ params }: PageProps) {
  const pageData = await getPageBySlug(params.slug);
  
  if (!pageData) {
    notFound();
  }

  return (
    <div>
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-between border rounded-xl mt-10 px-6 py-10 shadow-lg gap-4">
          {/* Avatar */}
          <div className="">
            <img 
              src={pageData.userImage || ""} 
              alt="User Avatar" 
              className="w-24 h-24 rounded-full object-cover" 
            />
          </div>
          {/* Title */}
          <div className="flex flex-col gap-1 text-center">
            <h1>{pageData.title}</h1>
            <p>{pageData.description}</p>
          </div>
          {/* Links */}
          <LinkGroup links={pageData.links} />
        </div>
      </div>
    </div>
  );
}