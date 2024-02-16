import React from "react";

function Toggle({ isBruteMode, onToggle }) {
  return (
    <div className="flex items-center justify-center space-x-2 mb-2">
      {/* Text for smartMode */}
      <span className="text-lg font-black text-transparent bg-clip-text bg-gradBlueish">
        smartMode
      </span>

      {/* The toggle switch */}
      <label className="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isBruteMode}
          onChange={onToggle}
        />
        <div className="w-14 h-6 bg-gradBlueish rounded-full peer-focus:outline-none dark:bg-gray-700 peer-checked:bg-gradRedish"></div>
        <span className="absolute rounded-full bg-white w-4 h-4 left-1 transform duration-500 ease peer-checked:translate-x-8"></span>
      </label>

      {/* Text for bruteMode */}
      <span className="text-lg font-black text-transparent bg-clip-text bg-gradRedish">
        bruteMode
      </span>
    </div>
  );
}

export default Toggle;
