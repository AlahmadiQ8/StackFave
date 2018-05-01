chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'loading') {
    return;
  }

  const cssFile = 'static/css/main.a30baf25.css';
  const jsFile = 'static/js/main.2548e9b6.js';

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
