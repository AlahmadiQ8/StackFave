chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'loading') {
    return;
  }

  const cssFile = 'main.07d83810.css';
  const jsFile = 'main.7a31649c.js';

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

// chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
//   const handler = {
//     requestPermissions: () => {
//       const urls = (req.urls || [])
//         .filter(url => url.trim() !== '')
//         .map(url => {
//           if (url.slice(-2) === '/*') return url;
//           if (url.slice(-1) === '/') return url + '*';
//           return url + '/*';
//         });

//       if (urls.length === 0) {
//         sendRes(true);
//         removeUnnecessaryPermissions();
//       } else {
//         chrome.permissions.request({ origins: urls }, granted => {
//           sendRes(granted);
//           removeUnnecessaryPermissions();
//         });
//       }
//       return true;

//       function removeUnnecessaryPermissions() {
//         const whitelist = urls.concat([
//           'https://github.com/*',
//           'https://bitbucket.org/*',
//         ]);
//         chrome.permissions.getAll(permissions => {
//           const toBeRemovedUrls = permissions.origins.filter(url => {
//             return !~whitelist.indexOf(url);
//           });

//           if (toBeRemovedUrls.length) {
//             chrome.permissions.remove({ origins: toBeRemovedUrls });
//           }
//         });
//       }
//     },
//   };

//   return handler[req.type]();
// });
