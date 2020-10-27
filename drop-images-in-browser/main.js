// drag and drop of images
window.addEventListener("dragover", dragOverHandler);
window.addEventListener("drop", dropHandler);

let svgString;

function dragOverHandler(ev) {
  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  console.log('File(s) in drop zone');
}

function dropHandler(ev) {
  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  console.log("The event:");
  console.log(ev);

  let file = undefined;

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (let i = 0; i < ev.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === 'file') {
        file = ev.dataTransfer.items[i].getAsFile();
        // console.log('1. ... file[' + i + '].name = ' + file.name);
        // console.log(file);
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (let i = 0; i < ev.dataTransfer.files.length; i++) {
      // console.log('2. ... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
      // console.log(ev.dataTransfer.files[i]);
      file = ev.dataTransfer.files[0];
    }
  }

  if (file) {
    console.log("The file:");
    console.log(file);

    let reader = new FileReader();

    // when reading has finished
    reader.onload = function(ev) {
      // empty the image container
      $('#image-container').children().remove();

      console.log("The reader with the result:");
      console.log(reader);

      if (file.name.endsWith('.svg')) {
        $('#image-container').append(reader.result);
        
        svgString = reader.result;
        doSomethingWithSvgString(svgString);

      } else {
        let img = document.createElement('img');
        img.src = reader.result;
        console.log("The image:");
        console.log(img);
        // this is using the jquery library to add the image to the document
        $('#image-container').append(img);
      }
    };

    // start reading the file
    if (file.name.endsWith('.svg')) {
      reader.readAsBinaryString(file);
    } else {
      reader.readAsDataURL(file);
    }
  }
}


function doSomethingWithSvgString(svgString) {
  let it = svgString.matchAll(/fill:(.+);/g);
  let array = [...it];

  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

}

