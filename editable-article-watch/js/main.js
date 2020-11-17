
let article = document.querySelector('.content');


// observe article for changes
let articleObserver = new MutationObserver(handleChange);
let options = {childList:true, attributes:true, subtree:true, characterData:true};

articleObserver.observe(article, options);

function handleChange(changes) {
  console.log(changes);
}