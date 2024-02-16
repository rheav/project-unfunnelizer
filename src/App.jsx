import { useState } from "react";
import SmartMode from "./components/SmartMode";
import BruteMode from "./components/BruteMode";
import Toggle from "./components/Toggle";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("smart"); // 'smart' or 'brute'

  return (
    <>
      <Header mode={mode} />
      <main className="w-[300px] h-[200px] bg-white py-4 flex flex-col justify-center">
        <Toggle
          onToggle={() => setMode(mode === "smart" ? "brute" : "smart")}
        />
        {mode === "smart" ? <SmartMode /> : <BruteMode />}
      </main>
      <Footer mode={mode} />
    </>
  );
}

export default App;
