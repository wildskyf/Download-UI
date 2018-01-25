var bg = {
  init: () => {
    browser.downloads.onCreated.addListener( item => {

      var filename = item.filename.split('/').pop();

      var title = 'Start to download';
      var message = filename;

      browser.notifications.create('', {
        "type": "basic",
        "iconUrl": browser.extension.getURL("icons.svg"),
        "title": title,
        "message": message
      })
    });
  }
};

bg.init();
