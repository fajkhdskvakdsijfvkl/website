var person = prompt("Please enter your password");
if (person == null || person == "") {
  window.location.assign("https://youtu.be/dQw4w9WgXcQ");
} else {
  alert( "Corect password: " + person + "");
}
function stringToHash(string) {            
  var hash = 0;
  if (string.length == 0) return hash;

  for (i = 0; i < string.length; i++) {
      char = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
  }
  return hash;
}
var hash1 = stringToHash(person);
console.log(hash1);
if(hash1 == -1448604409){
  console.log("your in");
}
else{
  console.log("failure");
  window.location.assign("https://youtu.be/dQw4w9WgXcQ");
}
