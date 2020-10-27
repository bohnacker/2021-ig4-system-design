
let titleElem = document.head.getElementsByTagName('title');
if (titleElem) {
  console.log("Hello from the Addon Clipboard-Test to '" + titleElem[0].text + "'");
}


navigator.clipboard.readText().then(clipText => {
  console.log('This is the actual content of the clipboard:');
  console.log('--------------------------------------------');
  console.log(clipText);
  console.log('--------------------------------------------');
});


