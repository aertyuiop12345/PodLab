import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon", "shadcn-nuxt", "nuxt-aos"],
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: "@/components/ui",
  },
  app: {
    head: {
      title: "PodLab Studio | Création de Contenu Professionnel",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Découvrez PodLab Studio, le podcast de référence avec les créateurs qui façonnent l'avenir. Histoires vraies et leçons de business.",
        },
        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "PodLab Studio | Conversations Inspirantes",
        },
        {
          property: "og:description",
          content:
            "Plongez dans les coulisses de la création et de l'innovation avec les leaders de demain.",
        },
        { property: "og:image", content: "/og-image.jpg" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "PodLab Studio" },
        {
          name: "twitter:description",
          content: "Histoires vraies. Leçons réelles. Un business différent.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
