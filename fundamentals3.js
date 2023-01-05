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


const x = 1;

    function a() {
      const y = 2;
    }

    function b() {
      const z = 3;
    }

    function output(value) {
      const para = document.createElement('p');
      document.body.appendChild(para);
      para.textContent = `Value: ${value}`;
    }