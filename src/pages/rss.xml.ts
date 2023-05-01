import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const posts = await getCollection('posts');
  return rss({
    title: "skovati.dev",
    description: "hi, i'm skovati",
    site: "https://skovati.dev",
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      desc: post.data.desc,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
