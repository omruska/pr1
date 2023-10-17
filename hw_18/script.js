// Це однорядковий коментар console.log("test") console.log(123)

/*
   багаторядковий
   коментар
*/


function click() {
    var elements = document.getElementsByClassName('className');
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = '<h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>';
    }
  }
  
  click();