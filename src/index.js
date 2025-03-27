document.addEventListener('DOMContentLoaded', () => {
  const characterBar = document.getElementById('character-bar');
  const nameElement = document.getElementById('name');
  const imageElement = document.getElementById('image');
  const voteCountElement = document.getElementById('vote-count');
  const votesForm = document.getElementById('votes-form');
  const resetBtn = document.getElementById('reset-btn');
  const characterData = {
    "characters": [
      {
        "id": 1,
        "name": "Mr. Cute",
        "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
        "votes": 0
      },
      {
        "id": 2,
        "name": "Mx. Monkey",
        "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
        "votes": 0
      },
      {
        "id": 3,
        "name": "Ms. Zebra",
        "image": "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
        "votes": 0
      },
      {
        "id": 4,
        "name": "Dr. Lion",
        "image": "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
        "votes": 0
      },
      {
        "id": 5,
        "name": "Mme. Panda",
        "image": "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
        "votes": 0
      }
    ]
  };

  let selectedCharacter = null;

  function displayCharacters(characters) {
    characters.forEach((character) => {
      const characterDiv = document.createElement('div');
      characterDiv.classList.add('character');
      characterDiv.textContent = character.name;

      characterDiv.addEventListener('click', () => {
        selectCharacter(character);
      });

      characterBar.appendChild(characterDiv);
    });
  }

  function selectCharacter(character) {
    selectedCharacter = character;
    nameElement.textContent = character.name;
    imageElement.src = character.image;
    imageElement.alt = character.name;
    voteCountElement.textContent = character.votes;
  }

  votesForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (selectedCharacter) {
      const voteInput = document.getElementById('votes');
      const votes = parseInt(voteInput.value) || 0; 
      selectedCharacter.votes += votes; 
      voteCountElement.textContent = selectedCharacter.votes; 
      voteInput.value = ''; 
    }
});


  resetBtn.addEventListener('click', () => {
    if (selectedCharacter) {
      selectedCharacter.votes = 0;
      voteCountElement.textContent = selectedCharacter.votes;
    }
  });

  displayCharacters(characterData.characters);
});
