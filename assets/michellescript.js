
function showRandomImage() {

    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(data => {
        const cocktailImage = document.getElementById('cocktailImage');
        cocktailImageImage.src = data.message;
        //cocktailImageImage.style.display = 'block';
    })
  .catch((error) => console.error("FETCH ERROR:", error));}
 