chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log(tabId, changeInfo);

  if (changeInfo.status == "loading") {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["pieces/app.1d3829ef94e2b6406292.css"],
    });
  }

  if (changeInfo.status == "complete") {

    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["addinMagic.js"],
    });

  }
});
