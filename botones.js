const button1 = document.getElementById('button1');

button1.addEventListener('click', function() {
  button1.style.backgroundColor = 'blue'; // cambia a color azul con un click
});

button1.addEventListener('dblclick', function() {
  alert('Botón 1: Doble click!'); // Muestra un alert con doble click
});
 //

const body = document.body; 
const button2 = document.getElementById('button2'); 
let clickCount = 0; 

button2.addEventListener('click', function() {
  // cambiar la imagen del fondo con un click
  body.style.backgroundImage = "https://i.pinimg.com/564x/b9/24/8f/b9248f623dd909d73c071e2b2581a77c.jpg";
});

button2.addEventListener('dblclick', function() {
  // cambiar el color del fondo con doble click
  clickCount = (clickCount + 1) % 3; 
  switch (clickCount) {
    case 0:
      body.style.background = 'red';
      break;
    case 1:
      body.style.background = 'green';
      break;
    case 2:
      body.style.background = 'yellow';
      break;
      case 3:
      body.style.background = 'pink';
      break;
      case 4:
}
});

//
const button3 = document.getElementById('button3'); // Select the button3 element
const buttons = document.querySelectorAll('button'); // Select all button elements
const buttonContainer = document.getElementById('button-container'); // Select the container element

button3.addEventListener('click', function() {
  // cambiar el orden de los botones con un click
  const buttonsArray = Array.prototype.slice.call(buttons);
  buttonsArray.reverse();
  buttonContainer.innerHTML = ''; 
  buttonsArray.forEach(button => {
    buttonContainer.appendChild(button); 
  });
});

button3.addEventListener('dblclick', function() {
  // mostrar un alert con un numero aleatorio con doble click
  const randomNumber = Math.floor(Math.random() * 100);
  alert(`Random number: ${randomNumber}`);
});

//

const button = document.getElementById('myButton4'); 

let clickCount = 0;
let timeoutId = null; 

button.addEventListener('click', function(event) {
  clickCount++; // Increment the click counter
  timeoutId = setTimeout(function() {
    if (clickCount === 1) {
      // Eniviar a otra pagina con un click
     <a href = 'https://www.wikiart.org/es/claude-monet/all-works#!#filterName:all-paintings-chronologically,resultType:masonry'></a>
    }
    clickCount = 0; 
  }, 300); 
});

button.addEventListener('click', function(event) {
  clearTimeout(timeoutId); 
  clickCount++; 
  if (clickCount === 2) {
    // Hacer el boton invisible con doble click
    button.style.display = 'none';
    clickCount = 0; 
  }
});

//

const button = document.getElementById('myButton5');
const titleElement = document.getElementById('title'); 

let clickCount = 0; 
let timeoutId = null;

button.addEventListener('click', function(event) {
  clickCount++; 
  timeoutId = setTimeout(function() {
    if (clickCount === 1) {
      titleElement.textContent = '';
      clickCount = 0; 
    }
  }, 300); 
});

button.addEventListener('click', function(event) {
  clearTimeout(timeoutId);
  clickCount++; 
  if (clickCount === 2) {
    // Crear un titulo con doble click
    titleElement.textContent = 'New Title!';
    clickCount = 0; 
  }
});

//
const button = document.getElementById('myButton6'); // Select the button element
const imageElement = document.getElementById('myImage'); // Select the image element

let clickCount = 0; // Initialize a click counter
let timeoutId = null; // Initialize a timeout ID

button.addEventListener('click', function(event) {
  clickCount++; // Increment the click counter
  timeoutId = setTimeout(function() {
    if (clickCount === 1) {
      // Mostrar una imagen con un click
      imageElement.style.display = 'block';
      clickCount = 0; 
    }
  }, 300);
});

button.addEventListener('click', function(event) {
  clearTimeout(timeoutId); 
  clickCount++; 
  if (clickCount === 2) {
    //Ocultar la imagen con doble click
    imageElement.style.display = 'none';
    clickCount = 0; 
  }
});