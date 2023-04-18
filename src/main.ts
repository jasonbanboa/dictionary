import './style.css'
import { WordData, ErrorWord } from './dictionaryService'
import fetchWordData from './dictionaryService'

async function main() {
  const wordDataList = await fetchWordData('hello');
  // if wordData.word then valid 
  // if wordData.message, wordData.resolution, wordData.title then invalid  
  console.log(wordDataList);
}

window.onload = () => {
  main();
}