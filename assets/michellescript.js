
function showRandomImage() {

  
   fetch('https://api.thecatapi.com/v1/images/search?api_key=live_GJRUwJsMxd6Jx6q3zsGLyaU0G3k89u73Bo5JTLh3bvkveicfTOKjGxppafMalf1A
')
    .then(response => response.json())
    .then(data => {
        const RandomCoffeePicture = document.getElementById('RandomCoffeePicture');
        RandomCoffeePicture.src = data.message;
        RandomCoffeePicture.style.display = 'block';

    })
    .catch(error => console.error('Error fetching coffee picture:', error));}


//('https://coffee.alexflipnote.dev/random.json'