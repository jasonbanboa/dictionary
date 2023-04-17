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
TODO 
Search for words using the input field
See the Free Dictionary API's response for the searched word
See a form validation message when trying to submit a blank form
Play the audio file for a word when it's available
Switch between serif, sans serif, and monospace fonts
Switch between light and dark themes
View the optimal layout for the interface depending on their device's screen size
See hover and focus states for all interactive elements on the page