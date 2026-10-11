import type { PluginClientContext } from "@getpaseo/plugin/client";

// Values are Notion's `.notion-dark-theme` tokens, read from the desktop app on 2026-10-11.
export default function contribute(client: PluginClientContext) {
  const remove = client.addTheme({
    id: "notion-dark",
    name: "Notion Dark",
    appearance: "dark",
    colors: {
      background: "#191919", // --c-bacPri: Notion page; Paseo paints both the agent thread and the dark sidebar with it
      foreground: "#f0efed", // --c-texPri
      raised: "#202020", // --c-bacSec: Notion's sidebar; tool headers, cards, and hover
      control: "#262626", // --c-bacInt: selected sidebar row, popovers, inputs
      border: "#2f2f2f", // --c-palGra300: dividers; Paseo also fills user bubbles with it
      accent: "#2383e2", // --c-palUiBlu600: Notion blue, same in both modes
      mutedForeground: "#ada9a3", // --c-texSec
      ring: "#7d7a75", // --c-texTer: extra-muted text, scrollbars, terminal bright black
    },
  });
  return remove;
}
