// Button component that accepts the function to execute and a mode
function Button({ revealMethod, mode }) {
  const modeStyles = {
    smart: {
      ButtonClasses: "bg-gradBlueish text-white hover:shadow-seaFoam/80",
    },
    brute: {
      ButtonClasses: "bg-gradRedish text-black hover:shadow-scarlet/40",
    },
  };

  // Extract the styles for the current mode
  const { ButtonClasses } = modeStyles[mode];

  return (
    <button
      className={`${ButtonClasses} h-12 w-[90%] transition-all duration-300 ease text-lg rounded-md shadow-sm hover:shadow-xl hover:scale-105`}
      onClick={revealMethod}
    >
      {mode === "smart" ? "✨ reveal elements" : "☢️ break it all"}
    </button>
  );
}

export default Button;
