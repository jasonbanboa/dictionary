
import { WordData, ErrorWord, Meaning } from './dictionaryService'

const renderSearchWordHead = ({ phonetic, phonetics, word }: WordData) => {
  const $main = document.querySelector<HTMLDivElement>('.main')!;

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
  `;

  const audioObj = phonetics.find(({ audio }) => audio );
  $audioButton.addEventListener('click', () => {
    if (audioObj) {
      const playableAudio = new Audio(audioObj.audio);
      playableAudio.play();
    }
  });

  $searchWordHead.append($audioButton);
  $main.append($searchWordHead);
}

const renderMeaning = (meaings: Meaning) => {
  
}

export function renderWord(WORD_DATA: WordData): void {
  const $main = document.querySelector<HTMLDivElement>('.main')!;
  $main.innerHTML = '';
  
  renderSearchWordHead(WORD_DATA);
  
  // start rendering searchwordhead
  // console.log(WORD_DATA);

  // const { license, meanings, phonetic, phonetics, sourceUrls, word } = WORD_DATA;
  
  // const $searchWordHead = document.createElement('section');
  // const phoneticObj = phonetics.find(({ text }) => text);

  // $searchWordHead.className = 'search-word-head flex i-center';
  // $searchWordHead.innerHTML = `
  //   <div class="head-wrapper">
  //     <h2 id="word">${word}</h2>
  //     <p class="pronunciation primary">${phonetic || phoneticObj?.text}</p>
  //   </div>
  // `;

  // const $audioButton = document.createElement('div');
  // $audioButton.setAttribute('role', 'button');
  // $audioButton.className = 'audio';
  // $audioButton.innerHTML = `
  //   <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fill-rule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>
  // `;

  // const audioObj = phonetics.find(({ audio }) => audio );
  // $audioButton.addEventListener('click', () => {
  //   if (audioObj) {
  //     const playableAudio = new Audio(audioObj.audio);
  //     playableAudio.play();
  //   }
  // });

  // $searchWordHead.append($audioButton);
  // $main.append($searchWordHead);
  // end rendering searchwordhead


  //   `
  //   <section class="meanings">
  //     <article class="meaning">
  //       <div class="part-of-speech flex rel">noun</div>
  //       <p class="decorator">Meaning</p>
  //       <ul class="definfitions">
  //         <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
  //         <li>A component of many instruments including the pian…cause different tones to be produced when struck.</li>
  //         <li>A device with keys of a musical keyboard, used to … built into or separate from the keyboard device.</li>
  //       </ul>
  //       <article class="synonyms flex">
  //         <div class="decorator">Synonyms</div>
  //         <div class="synonyms-list">
  //         </div>
  //       </article>
  //     </article>
  //   </section>
  // `;
}

export function renderError(errorWord: ErrorWord) {
  console.log(errorWord);
}