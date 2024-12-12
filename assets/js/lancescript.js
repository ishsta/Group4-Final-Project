
    function showRandomImage() {
        fetch('https://dog.ceo/api/breed/clumber/images/random')
            .then(response => response.json())
            .then(data => {
                const dogImage = document.getElementById('dogImage');
                dogImage.src = data.message;
                dogImage.style.display = 'block';
            })
            .catch(error => console.error('Error fetching image:', error));
    }
