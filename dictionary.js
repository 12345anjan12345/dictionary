const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa1b8887c0mshaf386a00653035dp1923dcjsncb683b50b327',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};
const date1 = document.getElementById('date');

date1.innerHTML = new Date();

const define = document.getElementById('definition');
const word = document.getElementById('enterword');
const valid1 = document.getElementById('valid');


console.log(search);
 const  dictionary=(word)=> {
    enterword.innerHTML = word;
    console.log(word);

fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+ word, options)
	.then(response => response.json())
	.then(data => {
        const {definition , word, valid} = data;
     
        define.innerHTML= definition ; 
        word.innerHTML= word;
        valid1.innerHTML=valid;
        })
            .catch(error => {
              console.error('Error fetching  data:', error);
              alert('Error fetching  data');
            });
          
          }

          submit.addEventListener("click", (e)=>{
            e.preventDefault()
         alert("word added successful");   
       dictionary(search.value)   
       
       });
        dictionary("Book");









