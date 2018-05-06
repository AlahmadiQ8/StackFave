/*global chrome*/
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'loading') {
    return;
  }

  const cssFile = 'static/css/main.b3b7d1aa.css';
  const jsFile = 'static/js/main.07ce5916.js';

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

chrome.runtime.onMessage.addListener(
  ({ type, payload }, sender, sendResponse) => {
    console.log(
      sender.tab
        ? 'from a content script:' + sender.tab.url
        : 'from the extension'
    );
    switch (type) {
      case 'AUTH':
        auth(sendResponse);
        return true; // must return true to signal asynchronous
      case 'REMOVE_TOKEN':
        const { token } = payload;
        chrome.identity.removeCachedAuthToken({ token }, () => {
          sendResponse({ message: 'successfully removed token' });
        });
        return true; // must return true to signal asynchronous
      default:
        console.log(`no matched action: ${type}`);
    }
  }
);

function auth(sendResponse) {
  const scope = 'read_inbox,no_expiry,private_info';
  const clientId = '12364';
  const redirectUrl = chrome.identity.getRedirectURL('oauth2');
  const url = `https://stackoverflow.com/oauth/dialog?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUrl}`;
  chrome.identity.launchWebAuthFlow(
    { url: url, interactive: true },
    redirect_url => {
      const token = redirect_url.match(/access_token=(.+)/)[1];
      sendResponse({ token });
    }
  );
}
