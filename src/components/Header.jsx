function Header({ mode }) {
  // Centralized configuration object for mode styles
  const modeStyles = {
    smart: {
      headerBgColor: "bg-gradBlueish",
      h1FontColor: "text-white",
    },
    brute: {
      headerBgColor: "bg-gradRedish",
      h1FontColor: "text-black",
    },
  };

  // Extract the styles for the current mode
  const { headerBgColor, h1FontColor } = modeStyles[mode];

  return (
    <div
      className={`${headerBgColor} text-center flex flex-col justify-center transition-all duration-300 ease h-16 `}
    >
      <h1
        className={`${h1FontColor} font-inter font-black text-2xl transition-all duration-300 ease`}
      >
        🔽 unFunnelizer
      </h1>
    </div>
  );
}

export default Header;
