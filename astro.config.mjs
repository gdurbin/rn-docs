// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://rndocs.pages.dev/rgamecore",
  integrations: [
    starlight({
      title: "RADIANTNERD DOCS",
      social: {
        github: "https://github.com/gdurbin",
        patreon: "https://patreon.com/radiantnerd",
        "x.com": "https://x.com/radiant_nerd",
        youtube: "https://youtube.com/@radiantnerd",
        email: "mailto:radiantnrd@gmail.com",
      },
      sidebar: [
        {
          label: "RGameCore",
          autogenerate: { directory: "rgamecore" },
        },
        {
          label: "Attribution",
          items: [{ label: "Attribution", link: "rgamecore/attribution" }],
        },
        {
          label: "Resources",
          items: [{ label: "GameDev Resources", link: "rgamecore/resources" }],
        },
      ],
      disable404Route: true,
      components: {
        SiteTitle: "@components/SiteTitleCustom.astro",
      },
    }),
  ],
});
