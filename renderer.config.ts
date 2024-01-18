import { defineRendererConfig, html } from '@lunariajs/core';

export default defineRendererConfig({
  slots: {
    afterTitle: () => html`<p>This is a example component!</p>`,
  },
});