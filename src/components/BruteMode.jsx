import { useState } from "react";
import Button from "./Button";

function BruteMode() {
  const [showMessage, setShowMessage] = useState(false);
  const revealAllHiddenElements = async () => {
    setShowMessage(true); // Show the message when button is clicked
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (!tab) return;

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        var elements = document.body.getElementsByTagName("*");
        for (var i = 0; i < elements.length; i++) {
          if (window.getComputedStyle(elements[i]).display === "none") {
            elements[i].style.display = "block";
          }
        }
      },
    });
  };

  return (
    <div className="mt-2 flex flex-col items-center">
      <Button revealMethod={revealAllHiddenElements} mode="brute" />

      <div
        className={`${
          showMessage ? "opacity-100" : "opacity-0"
        } mt-4 text-center text-black text-xs border border-scarlet/40 bg-scarlet/10 p-2 rounded-md transition-opacity duration-500 ease`}
      >
        ✅ All hidden elements have been <i>revealed</i>!
      </div>
    </div>
  );
}

export default BruteMode;
