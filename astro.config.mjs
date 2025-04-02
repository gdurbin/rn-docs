// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.radiantnerd.com",
  integrations: [
    starlight({
      title: "RADIANTNERD DOCS",
      logo: {
        src: "@/assets/radiantnerd-logo.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/gdurbin/RGameCorePlug",
        patreon: "https://patreon.com/radiantnerd",
        "x.com": "https://x.com/radiant_nerd",
        youtube: "https://youtube.com/@radiantnerd",
        email: "mailto:admin@radiantnerd.com",
      },
      sidebar: [
        {
          label: "RGameCore",
          autogenerate: { directory: "rgamecore" },
        },
        {
          label: "Resources",
          autogenerate: { directory: "resources" },
        },
        {
          label: "Attribution",
          items: [{ label: "RGameCore", link: "rgamecore/attribution" }],
        },
      ],
      //   components: {
      //     SiteTitle: "@components/SiteTitleCustom.astro",
      //   },
    }),
  ],
});
