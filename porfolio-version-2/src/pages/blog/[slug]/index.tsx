// import { getPage } from "../../../lib/notion";

// export default function BlogPost({ page }) {
//   return (
//     <>
//       <h1>{page.properties.Title.title[0].text.content}</h1>
//       <p>{page.properties.Content.rich_text[0].text.content}</p>
//     </>
//   );
// }

// export async function getStaticProps({ params }) {
//   const page = await getPage(params.slug);

//   return {
//     props: {
//       page,
//     },
//     revalidate: 60,
//   };
// }

// export async function getStaticPaths() {
//   const pages = await getDatabase();

//   const paths = pages.map((page) => ({
//     params: { slug: page.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }