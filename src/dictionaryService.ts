
export type Meaning = {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example: string;
  }[];
  synonyms: string[];
  antonyms: string[];
}[];

export type WordData = {
  word: string;
  phonetic?: string,
  phonetics: {
    text: string;
    audio: string;
  }[];
  meanings: Meaning;
  sourceUrls: string[];
  license: {
    name: string,
    url: string,
  };
}

export type ErrorWord = {
  title: string;
  message: string;
  resolution: string;
}


export default function fetchWordData(word: string): Promise<WordData[]> | ErrorWord {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(res => res.json());
}