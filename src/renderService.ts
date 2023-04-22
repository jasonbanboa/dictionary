
import { WordData, ErrorWord, Meaning } from './dictionaryService'


const renderSearchWordHead = ({ phonetic, phonetics, word }: WordData) => {
  const $main = document.querySelector<HTMLDivElement>('.main')!;

  const $searchWordHead = document.createElement('section');
  const phoneticObj = phonetics.find(({ text }) => text);

  $searchWordHead.className = 'search-word-head flex i-center';
  $searchWordHead.innerHTML = `
    <div class="head-wrapper">
      <h2 id="word">${word}</h2>
      <p class="pronunciation primary">${phonetic || phoneticObj?.text || 'No Results'}</p>
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
  const $main = document.querySelector<HTMLDivElement>('.main')!;

  const $meanings = document.createElement('div');
  meaings.forEach((meaning) => {
    const liString = meaning.definitions.reduce((acc, { definition }) => acc += `<li>${definition}</li>`, '');
    const synonyms = meaning.synonyms.join(', ');
    const antonyms = meaning.antonyms.join(', ');

    const synonymsString = `<div class="decorator pre-line">Synonyms <span class="primary">${synonyms}</span></div>`;
    const antonymString = `<div style="margin-top: -10px" class="decorator pre-line">Antonyms <span class="primary"><span>${antonyms}</span></div>`;

    const $meaning = document.createElement('article');
    $meaning.className = 'meaning';
    $meaning.innerHTML = `
      <div class="part-of-speech flex rel">${meaning.partOfSpeech}</div>
      <p class="decorator">Meaning</p>
      <ul class="definfitions">
        ${liString}
      </ul>
      <article class="synonyms">
         ${synonyms && synonymsString}
        ${antonyms && antonymString}
      </article>
    `;
    $meanings.append($meaning);
  });
  $main.append($meanings);
  
}

export function renderWord(WORD_DATA: WordData): void {
  const $main = document.querySelector<HTMLDivElement>('.main')!;
  $main.innerHTML = '';

  renderSearchWordHead(WORD_DATA);
  renderMeaning(WORD_DATA.meanings);

  const { sourceUrls } = WORD_DATA;
  const $sources = document.createElement('span');
  $sources.className = 'sources';
  $sources.innerHTML = `Sources <a target="_blank" href="${sourceUrls[0]}">${sourceUrls[0]}<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"/></svg></a>`;
  $main.append($sources);
}

export function renderError(errorWord: ErrorWord) {
  const $main = document.querySelector<HTMLDivElement>('.main')!;
  $main.innerHTML = `
    <div class="error-wrapper">
      <p class="icon text-center">😕</p>
      <h2 class="text-center"><strong>${errorWord.title}</strong></h2>
      <p class="text-center">${errorWord.message}</p>
    </div>
  `
}