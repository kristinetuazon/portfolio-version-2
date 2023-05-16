import { fetchPageBySlug, fetchPageBlocks, notion } from "~/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { notFound } from "next/navigation";

const config = {}
export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetchPageBySlug(params.slug);
  if (!post) notFound();

  const blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin(config));
//   renderer.use(bookmarkPlugin());

  const html = await renderer.render(...blocks);

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}