chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'loading') {
    return;
  }

  const cssFile = 'static/css/main.ebf9e072.css';
  const jsFile = 'static/js/main.24582973.js';

  const cb = res => {
    if (chrome.runtime.lastError) {
      return;
    }
  };

  chrome.tabs.insertCSS(tabId, { file: cssFile, runAt: 'document_start' }, cb);
  chrome.tabs.executeScript(
    tabId,
    {
      file: jsFile,
      runAt: 'document_start',
    },
    cb
  );
});
