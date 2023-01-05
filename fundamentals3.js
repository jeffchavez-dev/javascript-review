function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
  }
 
  console.log(favoriteAnimal('bird'))

  function hello(name = 'Jeff') {
    console.log(`Hello ${name}!`);
  }
  
  hello('Ari'); // Hello Ari!
  hello();      // Hello Chris!

  const originals = [1, 2, 3];

const doubled = originals.map((item) => item * 2);

console.log(doubled); // [2, 4, 6]
console.clear()

//Function scope and conflicts


// function a() {
//   const y = 2;
//   output(z);
// }

// function b() {
//   const z = 3;
//   output(y);
// }

//     function output(value) {
//       const para = document.createElement('p');
//       document.body.appendChild(para);
//       para.textContent = `Value: ${value}`;
//     }

//     output(x)


//     a();
// b();


// Test - Function 1 
// source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions


const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);