var bg = {
  init: () => {
    browser.downloads.onCreated.addListener( item => {
      var filename = item.filename.split('/').pop();

      var title = 'Start to download';
      var message = filename;

      browser.downloads.getFileIcon(item.id).then( icon => {
        browser.notifications.create('', {
          "type": "basic",
          "iconUrl": icon,
          "title": title,
          "message": message
        })
      })
    });
  }
};

bg.init();
