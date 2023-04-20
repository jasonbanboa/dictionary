import './style.css'
// import { WordData, ErrorWord } from './dictionaryService'
import fetchWordData from './dictionaryService'


const $toggleButton = document.querySelector<HTMLDivElement>('.toggle-button')!;


const events = {
  onThemeButtonClick: () => {
    if ($toggleButton.classList.contains('light-theme')) {
      document.body.classList.replace('light-theme', 'dark-theme');
      $toggleButton.classList.replace('light-theme', 'dark-theme');
    } else {
      document.body.classList.replace('dark-theme', 'light-theme');
      $toggleButton.classList.replace('dark-theme', 'light-theme');
    }
  }
} 


async function main() {
  const responseData = await fetchWordData('hello');

  if (responseData instanceof Array)  {
    const [ WORDDATA ] = responseData;
    console.log(WORDDATA);     
  } else {
    const WORDERROR = responseData;
    console.log(WORDERROR);
  }
}


window.onload = () => {
  main();
  $toggleButton.addEventListener('click', events.onThemeButtonClick);
}
