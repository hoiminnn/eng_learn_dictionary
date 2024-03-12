import React from 'react';
import {useState, useEffect} from 'react';
import {render} from 'react-dom'
import IconSpeakerLoud from '../svg/speaker_loud';

export function Speech(props) {

    const [word, setWord] = useState(props.word)
    const synth = window.speechSynthesis
    let utterThis = new SpeechSynthesisUtterance("")
  
    useEffect(() => {

    //   setWord(document.getElementById("word").innerHTML)
      utterThis = new SpeechSynthesisUtterance(word)
          }, 
          []
      )
  
    function speech(event) {
        utterThis.text = word
        synth.speak(utterThis);
    }

      return (
        <button type="button" onClick={speech} id='word' class="mx-2 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <IconSpeakerLoud />
        </button>
      );
  }