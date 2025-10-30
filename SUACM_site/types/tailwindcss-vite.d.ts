declare module '@tailwindcss/vite' {
  import type { PluginOption } from 'vite';
  const plugin: () => PluginOption;
  export default plugin;
}


