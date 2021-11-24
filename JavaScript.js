// navigator.saysWho = (() => {
//   const { userAgent } = navigator
//   let match = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
//   let temp

//   if (/trident/i.test(match[1])) {
//     temp = /\brv[ :]+(\d+)/g.exec(userAgent) || []

//     return `IE ${temp[1] || ''}`
//   }


//     temp = userAgent.match(/\b(Edg)\/(\d+)/)

//     if (temp !== null) {
//       return temp.slice(1).join(' ').replace('Edg', 'Edge (Chromium)')
//     }
//   }

//   match = match[2] ? [ match[1], match[2] ] : [ navigator.appName, navigator.appVersion, '-?' ]
//   temp = userAgent.match(/version\/(\d+)/i)

//   if (temp !== null) {
//     match.splice(1, 1, temp[1])
//   }

//   return match.join(' ')
// })()

// browser = (navigator.saysWho) // outputs: `Chrome 89`
// console.log(browser)

// chrome = browser.includes("Chrome")
// firefox = browser.includes("Firefox")
// edge = browser.includes("Edge")
// opera = browser.includes("Opera")

var person = prompt("Please enter your name");

if (person == null || person == "") {
  window.location.assign("https://youtu.be/dQw4w9WgXcQ");
} else {
  alert( "Hello " + person + "");
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
  // if(chrome == true){
  //   window.location.assign("https://youtu.be/dQw4w9WgXcQ"); 
  // }
  // if(firefox == true){
  //   window.location.assign("https://youtu.be/dQw4w9WgXcQ"); 
  // }
  // if(edge == true){
  //   window.location.assign("https://youtu.be/dQw4w9WgXcQ"); 
  // }

}
