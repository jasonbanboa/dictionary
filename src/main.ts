import './style.css'
import { WordData, ErrorWord } from './dictionaryService'
import fetchWordData from './dictionaryService'

async function main() {
  const responseData = await fetchWordData('hello');

  if (responseData instanceof Array)  {
    const [ WORDDATA ] = responseData;
    console.log(WORDDATA); 

    


  } else {
    const WORDERROR: ErrorWord = responseData;
    console.log(WORDERROR)
  }
}

window.onload = () => {
  main();
}