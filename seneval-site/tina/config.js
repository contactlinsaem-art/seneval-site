import { defineConfig } from "tinacms";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.HEAD || "main",
  clientId: isLocal ? "" : process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: isLocal ? "" : process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "blog",
        label: "Articles du blog",
        path: "src/content/blog",
        format: "md",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) =>
              values?.titre
                ?.toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "") || "",
          },
        },
        fields: [
          {
            type: "string",
            name: "titre",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date de publication",
            required: true,
          },
          {
            type: "string",
            name: "auteur",
            label: "Auteur",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description courte",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Image de couverture",
          },
          {
            type: "string",
            name: "categorie",
            label: "Catégorie",
            options: [
              "Actualités",
              "Réglementation",
              "Bonnes pratiques",
              "Retours d'expérience",
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu",
            isBody: true,
          },
        ],
      },
    ],
  },
});