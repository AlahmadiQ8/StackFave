chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'loading') {
    return;
  }

  const cssFile = 'static/css/main.2d070dee.css';
  const jsFile = 'static/js/main.d52c6cd0.js';

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
