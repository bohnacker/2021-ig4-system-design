/**
 * When the popup loads, inject a content script into the active tab.
 */
browser.tabs.executeScript({ file: "/content_scripts/background.js" })
  .then(init);


function init() {
  let consoleElement = document.getElementById('console');
  let button = document.getElementById('requestButton');


  function getActiveTab() {
    return browser.tabs.query({ active: true, currentWindow: true });
  }


  button.addEventListener('click', askForDuration);

  function askForDuration() {
    getActiveTab().then((tabs) => {
      browser.tabs
        .sendMessage(tabs[0].id, {action: 'getDuration'})
        .then( response => {
          consoleElement.innerHTML = response;
        });
    });

  }
}


