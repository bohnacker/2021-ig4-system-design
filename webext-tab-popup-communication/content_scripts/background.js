(function() {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;
  console.log('background script loaded');

  // listen for messages from the popup

  browser.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "getDuration") {
      console.log('popup asked for duration');
      // just to have some changing value
      sendResponse( Math.random() );
    }
  });

})();
