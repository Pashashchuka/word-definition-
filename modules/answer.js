const answer = document.querySelector(".answer");

export const createAnswer = (res) => {
  const answerHTML = `
      <ul>
      <li class="word">
        <div class="content">
          <p class="subject">${res[0].word}</p>
          <span class="comment">${res[0].meanings[0].partOfSpeech}/${res[0].phonetic}/</span>
        </div>
        <button class="volume"></button>
      </li>
      <li class="meaning">
        <div class="details">
          <p class="sense">Meaning</p>
          <span class="meaning__comment">${res[0].meanings[0].definitions[0].definition}</span>
        </div>
      </li>
    </ul>
  </div>
  </div>
      `;
  answer.innerHTML = answerHTML;

  const volume = document.querySelector(".volume");

  const audioURL = res[0].phonetics[0].audio;
  const audio = new Audio(audioURL);

  const playAudio = () => {
    audio.play();
  };

  volume.addEventListener("click", playAudio);
};
