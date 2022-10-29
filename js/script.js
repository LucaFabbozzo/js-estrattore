const studentList = [
  'pinco pallo',
  'ugo de ughi',
  'gianfranco angelo',
  'gigio de giorgi'
];


//prendo i miei elementi che mi servono
const button = document.querySelector('#btn');
const output = document.querySelector('#output');

//creo un'evento del mio bottone dove all'interno scrivero' la mia logica
button.addEventListener('click', function() {
  //creo le mie due costanti conteggio massimo e minimo
  const max = studentList.length - 1;
  const min = 0;
  //calcolo il mio numero max min random
  const randomStudent = Math.floor(Math.random() * (max - min + 1) + min);

  console.log(randomStudent);

  // stampo in pagina il risultato
   output.innerHTML = studentList[randomStudent];
})