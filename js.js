function sayHello() {
    console.log("Hello, world!");
  }
  
  setInterval(sayHello, 2000); // Ejecuta `sayHello` cada 2 segundos.

  function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  console.log(getRandomNumber());