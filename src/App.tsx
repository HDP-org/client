import type { Component } from "solid-js";
import { Heading } from "~/components/ui/heading.jsx";

const App: Component = () => {
  return (
    <div class="bg-[beige] h-screen w-screen">
      <img src="/hdp.svg" class="w-28 aspect-square" alt="HDP Logo" />
      <Heading size="7xl">HDP</Heading>
    </div>
  );
};

export default App;
