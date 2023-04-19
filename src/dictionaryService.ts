export type WordData = {
  word: string;
  phonetics: {
    text: string;
    audio: string;
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example: string;
      synonyms: string[];
    }[];
  }[];
  sourceUrls: string[];
}

export type ErrorWord = {
  title: string;
  message: string;
  resolution: string;
}


export default function fetchWordData(word: string): Promise<WordData[]> | ErrorWord {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(res => res.json());
}