const fs = require('fs');

// fs.readFile('./animals.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })


// fs.writeFile('./example.txt', 'I will be written to example.txt', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file successfully written!");
//   }
// })

// console.log(process.argv[2])

var letter = process.argv[2];
var animals = new Array;

fs.readFile('./animals.txt', 'utf-8', (err, data) => {
  if (err){
    console.log(err);
  } else {
    animals = (data.split('\n'));
  }

  var matchedAnimals = [];
  animals.forEach(function(animal) {
    if (animal[0] && animal[0].toUpperCase() === letter.toUpperCase()) {
      matchedAnimals.push(animal)
    }
  })
  // console.log(matchedAnimals)

  fs.writeFile(`./${letter}_animals.txt`, matchedAnimals, err => {
    if (err){
      console.log(err);
    } else {
      console.log("file successfully written!");
    }
  });

})
