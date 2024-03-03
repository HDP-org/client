/* @refresh reload */
import "./index.css";
import "@park-ui/tailwind-plugin/preset.css";

import { render } from "solid-js/web";

import App from "./App.jsx";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(() => <App />, root!);
