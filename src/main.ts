import './style.css'
// import { WordData, ErrorWord } from './dictionaryService'
import fetchWordData from './dictionaryService'


const $toggleButton = document.querySelector<HTMLDivElement>('.toggle-button')!;
const $form = document.querySelector<HTMLFormElement>('form')!;


const handlers = {
  onThemeButtonClick: () => {
    if ($toggleButton.classList.contains('light-theme')) {
      document.body.classList.replace('light-theme', 'dark-theme');
      $toggleButton.classList.replace('light-theme', 'dark-theme');
    } else {
      document.body.classList.replace('dark-theme', 'light-theme');
      $toggleButton.classList.replace('dark-theme', 'light-theme');
    }
  },
  onSearchButtonClick: () => {
    $form.submit();
  }, 
  onFormSubmit: async (e: Event) => {
    e.preventDefault();
    const searchWord = $form.search.value.trim();
    if (!searchWord) return;
    const responseData = await fetchWordData(searchWord);
    if (responseData instanceof Array)  {
      const [ WORDDATA ] = responseData;
      console.log(WORDDATA);     
    } else {
      const WORDERROR = responseData;
      console.log(WORDERROR);
    }
  }
} 


async function main() {
  // const responseData = await fetchWordData('hello');
  
}


window.onload = () => {
  main();
  $toggleButton.addEventListener('click', handlers.onThemeButtonClick);
  $form.addEventListener('submit', handlers.onFormSubmit);
}
