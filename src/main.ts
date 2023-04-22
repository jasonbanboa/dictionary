
import fetchWordData, { WordData } from './dictionaryService'
import { renderError, renderWord } from './renderService';


const $app = document.querySelector<HTMLDivElement>('#app')!;
const $toggleButton = document.querySelector<HTMLDivElement>('.toggle-button')!;
const $form = document.querySelector<HTMLFormElement>('form')!;
const $fontSelector = document.querySelector<HTMLDivElement>('.font-selector')!;
const $fontSelect = document.querySelector<HTMLDivElement>('.font-select')!;
const $fonts = $fontSelect.querySelectorAll('.font')!;
const $currentFont = document.querySelector<HTMLDivElement>('#current-font')!;


const handlers = {
  onThemeButtonClick: () => {
    document.body.classList.contains('light-theme') ? 
      document.body.classList.replace('light-theme', 'dark-theme') : 
      document.body.classList.replace('dark-theme', 'light-theme');
  },
  onSearchButtonClick: () => {
    $form.submit();
  }, 
  onFormSubmit: async (e: Event) => {
    e.preventDefault();
    const searchWord = $form.search.value.trim();
    if (!searchWord) return;
    const responseData = await fetchWordData(searchWord);
    
    if (responseData instanceof Array) {  
      const [ WORD_DATA ] = responseData;
      renderWord(WORD_DATA);
    } else {
      const ERROR_WORD = responseData;
      renderError(ERROR_WORD);
    }
  },
  onFontThemeClick: (e: Event) => {
    if (e.target === $fontSelect) return;
    $fontSelect.classList.contains('none') ?
     $fontSelect.classList.replace('none', 'flex') :
    $fontSelect.classList.replace('flex', 'none');
  },
  onFontSelect: (e: Event, i: number) => {
    const $fontDiv = e.target;
    if ($fontDiv instanceof HTMLDivElement) {
      const { font } = $fontDiv.dataset;
      $fonts.forEach($font => $font.classList.remove('primary'));
      $fonts[i].classList.add('primary');
      $app.className = font!; 
      $currentFont.textContent = font!;
    }
  }
} 


async function main() {
  const [ WORD_DATA ] = await fetchWordData('hello') as WordData[];  
  renderWord(WORD_DATA);
}


window.onload = () => {
  main();
  $toggleButton.addEventListener('click', handlers.onThemeButtonClick);
  $form.addEventListener('submit', handlers.onFormSubmit);
  $fontSelector.addEventListener('click', handlers.onFontThemeClick);

  $fonts.forEach(($font, i) => {
    $font.addEventListener('click', (e: Event) => {
      handlers.onFontSelect(e, i);
    });
  });
}
