//1) create your own resume data in JASON format

var resume = {
    "name":"shelby",
    "age":"22",
    "Gender":"Male",
    "Phonenumber":"9876543210",
    "quallification": "Computer science",
    "university":"newYorkUnivercity",
    "address":"TonyStreetNewYork",
    "email": "shelby22gmail.com",
    "language": ["english","french","german","spanish"]
}
var resumeString = JSON.stringify(resume, null, 2);
var parsedResume = JSON.parse(resumeString);
console.log(parsedResume);

// 2)for the above JSON, iterate over all for loop

// A) json in for loop !

var resume1 = {
    "name":"shelby",
    "age":"22",
    "Gender":"Male",
    "Phonenumber":"9876543210",
    "quallification": "Computer science",
    "university":"newYorkUnivercity",
    "address":"TonyStreetNewYork",
    "email": "shelby22gmail.com",
    "language": ["english","french","german","spanish"]
}
var resume1String = JSON.stringify(resume1, null, 2);
var parsedResume1 = JSON.parse(resume1String);
/*console.log("Printing JSON using for loop:");
for (let i = 0; i < resume1String.length; i++) {
    console.log(resume1String);
  }
  */
//B) for in !
/*for (const key in resume1) {
    if (Array.isArray(resume1[key])) {
      console.log(key + ":");
      for (const item of resume1[key]) {
        console.log(JSON.stringify(item, null, 2));
      }
    } else {
      console.log(key + ": " + resume1[key]);
    }
  }
*/
// C) for of!
/*
for (const [key, value] of Object.entries(resume1)) {
    // If the value is an array, print each object in the array
    if (Array.isArray(value)) {
      console.log(key + ":");
      for (const item of value) {
        console.log(JSON.stringify(item, null, 2)); // Print each item as a string with 2 spaces indentation
      }
    } else {
      console.log(key + ": " + value);
    }
}
*/

// D) for each!
/*
resume1.forEach(([key, value]) => {
    if (Array.isArray(value)) {
      console.log(key + ":");
      value.forEach(item => {
        console.log(JSON.stringify(item, null, 2));
      });
    } else {
      console.log(key + ": " + value);
    }
  });
*/





