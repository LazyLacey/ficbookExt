chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log(tabId, changeInfo);

  if (changeInfo.status == "loading") {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["app.df4e75f7ad1d24d4125c.css"],
    });
  }

  if (changeInfo.status == "complete") {

    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["addinMagic.js"],
    });

  }
});
