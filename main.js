
function Startbesh() {
  var y = document.getElementById("Addbesh").value;
  var emt = document.getElementById("txt").innerHTML = "Input field should not be empty";
  if(y=="") {
    emt
  }
  else {
    var emt = document.getElementById("txt").innerHTML = "";
    const input = document.getElementById("Addbesh");
    const textarea = document.getElementById("Resultbesh");
 
  textarea.value = input.value.replaceAll(" ","🤸");

  }
}
function Copybesh() {
  var copyText = document.getElementById("Resultbesh");

  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  document.execCommand("copy");
  
  var txtcpy = document.getElementById("txt").innerHTML = "Text copied to clipboard" ;
}