import { useState } from "react";
import Button from "./Button";

function SmartMode() {
  const [showMessage, setShowMessage] = useState(false);
  const revealSmartElements = async () => {
    setShowMessage(true); // Show the message when button is clicked
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (!tab) return;

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        var elements = document.querySelectorAll(
          ".smartplayer-call-action.smartplayer-hide, [class*='hid'], [class*='conceal'], [class*='obscur'], [class*='invisi'], [class*='ocult'], [class*='escond'], [class*='encob'], [class*='sumi'], [class*='mask'], [class*='veil'], [class*='shroud'], [class*='suppress'], [class*='remov'], [class*='unseen'], [class*='camufla'], [class*='disfarç'], [class*='apag'], [class*='retir']"
        );
        elements.forEach(function (element) {
          element.style.display = "block";
        });
      },
    });
  };

  return (
    <div className="mt-2 flex flex-col items-center">
      <Button revealMethod={revealSmartElements} mode="smart" />

      <div
        className={`${
          showMessage ? "opacity-100" : "opacity-0"
        } mt-4 text-center text-white text-xs border border-azure/30 bg-azure/60 p-2 rounded-md transition-opacity duration-500 ease`}
      >
        ✅ Main elements have been <i>revealed</i>!
      </div>
    </div>
  );
}

export default SmartMode;
