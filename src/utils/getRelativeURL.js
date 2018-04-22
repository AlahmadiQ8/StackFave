/*global chrome*/

export default path => {
  if (process.env.NODE_ENV === 'development') {
    return path;
  }
  return chrome.runtime.getURL(path);
};
