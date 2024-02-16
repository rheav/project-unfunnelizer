function Footer({ mode }) {
  // Centralized configuration object for mode styles
  const modeStyles = {
    smart: {
      footerBgColor: "bg-gradBlueish",
      fontColor: "text-white",
    },
    brute: {
      footerBgColor: "bg-gradRedish",
      fontColor: "text-black",
    },
  };

  // Extract the styles for the current mode
  const { footerBgColor, fontColor } = modeStyles[mode];

  return (
    <div
      className={`${footerBgColor} flex flex-col justify-center text-center transition-all duration-300 ease h-18 p-4 `}
    >
      <div
        className={`${fontColor} font-inter font-normal text-xs transition-all duration-300 ease`}
      >
        {mode === "smart" ? (
          <div className="border border-azure/70 bg-white/30 p-2 rounded-md mb-2">
            <strong>smartMode</strong> will reveal specific elements that
            usually are synchronized to appear with the VSL's pitch/offer.
          </div>
        ) : (
          <div className="border border-scarlet/70 bg-white/30 p-2 rounded-md mb-2">
            <strong>bruteMode</strong> will reveal <strong>all</strong> page
            elements that are hidden, and this can break the layout (refresh the
            page if it's the case).
          </div>
        )}
        <span className="font-bold text-xs">v1.4j</span>
      </div>
    </div>
  );
}

export default Footer;
