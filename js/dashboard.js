$(document).ready(function() {
  console.log("hello");
  var entries = document.getElementsByClassName("entry");
  var values = [];
  for (var z=0; z < entries.length; z++) {
    values.push(entries[z].value);
  }
  console.log(values);
});
