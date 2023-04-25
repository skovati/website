import { defineConfig } from 'astro/config';
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed"
    }
  },
  integrations: [
    compress({
			css: true,
			html: true,
			img: false,
			js: true,
			svg: false,
		})
  ]
});
