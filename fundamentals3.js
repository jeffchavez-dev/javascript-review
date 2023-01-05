function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
  }
 
  console.log(favoriteAnimal('bird'))

  function hello(name = 'Jeff') {
    console.log(`Hello ${name}!`);
  }
  
  hello('Ari'); // Hello Ari!
  hello();      // Hello Chris!