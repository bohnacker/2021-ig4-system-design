
let article = document.querySelector('.content');


// ------------------------------------------------------------

// First possibility -> keyup event listener on the article
article.addEventListener("keyup", handleKeyup)

function handleKeyup(e) {
  console.log("----------------------------------------");
  console.log("This is the key event:");
  console.log(e);
  console.log("This is the new caret position");
  console.log(window.getSelection());
}

// ------------------------------------------------------------

// Second possibility -> observe article for changes
let articleObserver = new MutationObserver(handleChange);
let options = {childList:true, attributes:true, subtree:true, characterData:true};
articleObserver.observe(article, options);

function handleChange(changes) {
  console.log("----------------------------------------");
  console.log("This has changed just now:");
  console.log(changes);
  console.log("This is the new caret position");
  console.log(window.getSelection());
}


