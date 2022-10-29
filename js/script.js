const studentList = [
  'pinco pallo',
  'ugo de ughi',
  'gianfranco angelo',
  'gigio de giorgi'
];


//prendo i miei elementi che mi servono
const button = document.querySelector('#btn');
const output = document.querySelector('#output');

const studentiEstratti = [];

//creo un'evento del mio bottone dove all'interno scrivero' la mia logica
button.addEventListener('click', function() {
  //utilizzo un ciclo while
  //formula tipica che si utilizza per un controllo di univocità
  //1 estrarre un numero compreso tra 0 e l'ultimo elemento dell'array
  // 2 se il nome estratto è gia presente nell'array di studenti estratti devo estrarre un'altro numero fino a quando ne trovo uno non estratto
  // 3 quando trovo un nuovo nome lo aggiungo all'elenco di studenti estratti
  // 4 se l'elenco di studenti estratti è lungo uguale all'elenco della classe finisce
  let isNomeEstratto = false;

  if(studentiEstratti.length < studentList.length) {

    while (!isNomeEstratto) {
      const randomStudent = getRandomNumber(0, studentList.length - 1);
      const nomeEstratto = studentList[randomStudent]
      console.log(nomeEstratto, studentiEstratti);
      if(!studentiEstratti.includes(nomeEstratto)) {
        studentiEstratti.push(nomeEstratto);
        isNomeEstratto = true;
      }
      output.innerHTML = nomeEstratto;
    }
  } else {
    //fine
    output.innerHTML = 'Tutti gli studenti sono stati estratti'
    console.log('fine');
  }

})


function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}