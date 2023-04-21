# dictionary

dictionary web app using the Dictionary API
https://api.dictionaryapi.dev/api/v2/entries/en/`<str:word>`

As an example, to get definition of English word hello, you can send request to
https://api.dictionaryapi.dev/api/v2/entries/en/hello

```json
[
    {
      "word": "hello",
      "phonetic": "həˈləʊ",
      "phonetics": [
        {
          "text": "həˈləʊ",
          "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
        },
        {
          "text": "hɛˈləʊ"
        }
      ],
      "origin": "early 19th century: variant of earlier hollo ; related to holla.",
      "meanings": [
        {
          "partOfSpeech": "exclamation",
          "definitions": [
            {
              "definition": "used as a greeting or to begin a phone conversation.",
              "example": "hello there, Katie!",
              "synonyms": [],
              "antonyms": []
            }
          ]
        },
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "an utterance of ‘hello’; a greeting.",
              "example": "she was getting polite nods and hellos from people",
              "synonyms": [],
              "antonyms": []
            }
          ]
        },
        {
          "partOfSpeech": "verb",
          "definitions": [
            {
              "definition": "say or shout ‘hello’.",
              "example": "I pressed the phone button and helloed",
              "synonyms": [],
              "antonyms": []
            }
          ]
        }
      ]
    }
  ]
```

```html
start rendering searchwordhead
  console.log(WORD_DATA);

  const { license, meanings, phonetic, phonetics, sourceUrls, word } = WORD_DATA;
  
  const $searchWordHead = document.createElement('section');
  const phoneticObj = phonetics.find(({ text }) => text);

  $searchWordHead.className = 'search-word-head flex i-center';
  $searchWordHead.innerHTML = `
    <div class="head-wrapper">
      <h2 id="word">${word}</h2>
      <p class="pronunciation primary">${phonetic || phoneticObj?.text}</p>
    </div>
  `;

  const $audioButton = document.createElement('div');
  $audioButton.setAttribute('role', 'button');
  $audioButton.className = 'audio';
  $audioButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fill-rule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>


  const audioObj = phonetics.find(({ audio }) => audio );
  $audioButton.addEventListener('click', () => {
    if (audioObj) {
      const playableAudio = new Audio(audioObj.audio);
      playableAudio.play();
    }
  });

  $searchWordHead.append($audioButton);
  $main.append($searchWordHead);
  end rendering searchwordhead


  <section class="meanings">
    <article class="meaning">
      <div class="part-of-speech flex rel">noun</div>
      <p class="decorator">Meaning</p>
      <ul class="definfitions">
        <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
        <li>A component of many instruments including the pian…cause different tones to be produced when struck.</li>
        <li>A device with keys of a musical keyboard, used to … built into or separate from the keyboard device.</li>
      </ul>
      <article class="synonyms flex">
        <div class="decorator">Synonyms</div>
        <div class="synonyms-list">
        </div>
      </article>
    </article>
  </section>

```
TODO 
Search for words using the input field
See the Free Dictionary API's response for the searched word
See a form validation message when trying to submit a blank form
Play the audio file for a word when it's available
Switch between serif, sans serif, and monospace fonts
Switch between light and dark themes
View the optimal layout for the interface depending on their device's screen size
See hover and focus states for all interactive elements on the page