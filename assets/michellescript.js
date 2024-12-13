
function showRandomImage() {

  
  fetch("https://coffee.alexflipnote.dev/random")
    .then(response => response.json())
    .then(data => {
        const RandomCoffeePicture = document.getElementById('RandomCoffeePicture');
        RandomCoffeePicture.src = data.message;
        RandomCoffeePicture.style.display = 'block';

    })
    .catch(error => console.error('Error fetching coffee picture:', error));}
    