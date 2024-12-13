async function fetchData() {
  try {
    // Get the character name from the input field
    const characterName = document.getElementById("characterName").value;

    // Capitalize the first letter and make the rest lowercase
    const formattedCharacterName =
      characterName.charAt(0).toUpperCase() +
      characterName.slice(1).toLowerCase();
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/14.24.1/data/en_US/champion/${formattedCharacterName}.json`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const characterLore = data.data[formattedCharacterName].lore;
    const legendName = [formattedCharacterName];
    const legendImg = data.data[formattedCharacterName].skins;

    const imgElement = document.getElementById("champImage");
    const titleElement = document.getElementById("champName");
    const loreElement = document.getElementById("champLore");

    imgElement.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${formattedCharacterName}_0.jpg`;
    imgElement.style.display = "block";

    titleElement.textContent = legendName;

    loreElement.textContent = characterLore;

  } catch (error) {
    console.error(error);
  }
}