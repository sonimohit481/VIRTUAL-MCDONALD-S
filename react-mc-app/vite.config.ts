// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
// const manifestForPlugin: Partial<VitePWAOptions> = {
//   registerType: "prompt",
//   includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
//   manifest: {
//     name: "McDonaldCloneReact",
//     short_name: "McReact",
//     icons: [
//       {
//         src: "/web-app-manifest-192x192.png",
//         sizes: "192x192",
//         type: "image/png",
//         purpose: "maskable",
//       },
//       {
//         src: "/web-app-manifest-512x512.png",
//         sizes: "512x512",
//         type: "image/png",
//         purpose: "maskable",
//       },
//     ],
//     theme_color: "#ffffff",
//     background_color: "#ffffff",
//     display: "standalone",
//   },
// };

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), VitePWA(manifestForPlugin)],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Mc Donald Clone React",
        short_name: "McDonald",
        description: "A PWA clone of McDonald's using React.",
        theme_color: "#FFCC00",
        icons: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
