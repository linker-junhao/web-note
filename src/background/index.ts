// eslint-disable-next-line import/no-extraneous-dependencies

chrome.contextMenus.create({
  title: '标记',
  contexts: ['selection'],
  onclick(...args) {
    console.log(args);
    // chrome.tabs.sendMessage()
  }
});
