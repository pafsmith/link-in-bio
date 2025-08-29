import { db } from "~/server/db";
import { pages, links, user } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export async function getPageBySlug(slug: string) {
  const page = await db
    .select({
      id: pages.id,
      title: pages.title,
      description: pages.description,
      slug: pages.slug,
      userId: pages.userId,
      userName: user.name,
      userImage: user.image,
    })
    .from(pages)
    .leftJoin(user, eq(pages.userId, user.id))
    .where(eq(pages.slug, slug))
    .limit(1);

  if (page.length === 0) {
    return null;
  }

  const pageLinks = await db
    .select({
      title: links.title,
      url: links.url,
      image: links.image,
      order: links.order,
    })
    .from(links)
    .where(eq(links.pageId, page[0]!.id))
    .orderBy(links.order);

  return {
    ...page[0],
    links: pageLinks.map(link => ({
      href: link.url,
      title: link.title,
      image: link.image || undefined,
    }))
  };
}