//  Creating the "Server Paths"
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
  "Welcome to WEB700 Assignment 1",
  "This assignment was prepared by Sabbir Ahmed",
  "Student Name: Sabbir Ahmed, Email: sahmed385@myseneca.ca",
  "User Logged In",
  "Main Panel",
  "Logout Complete"
];

//: Creating the "web server simulator" Function - "httpRequest"
function httpRequest(httpVerb, path) {
  for (let i = 0; i < serverPaths.length; i++) {
    if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
      return `200: ${serverResponses[i]}`;
    }
  }
  return `404: Unable to process ${httpVerb} request for ${path}`;
}

//  Automating the Tests by creating an "automateTests" Function
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const testVerbs = ["GET", "POST"];
const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

function automateTests() {
  function randomRequest() {
    const randVerb = testVerbs[getRandomInt(testVerbs.length)];
    const randPath = testPaths[getRandomInt(testPaths.length)];
    console.log(httpRequest(randVerb, randPath));
  }

  setInterval(randomRequest, 1000);
}

// Invoke the "automateTests" function
automateTests();
