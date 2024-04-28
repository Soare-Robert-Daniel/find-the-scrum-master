import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const levels = await getCollection("level");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: levels.map((level) => ({
      ...level.data.metadata,
      link: `/level/${level.id}/`,
      pubDate: new Date().toUTCString(),
    })),
  });
}
