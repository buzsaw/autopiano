import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './home.css';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import Soundfont from 'soundfont-player';

export default () => {
  const [message, setMessage] = useState('')
  const isLoading = !message
  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f5');
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });
  const [width] = React.useState(window.innerWidth);
  
  const testFunc = (data) => {
    console.log(data)
    fetch('/api/getAudio')
    .then(resp => resp.json())
    .then(({url}) => {
          const audio = new Audio(url)
          audio.play()
    })
  }

  const testFun2 = (midiNumber) => {
    var ac = new AudioContext()
    Soundfont.instrument(ac, 'acoustic_grand_piano', { soundfont: 'MusyngKite' })
    .then(function (acoustic_grand_piano) {
      acoustic_grand_piano.play(midiNumber)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Piano
          noteRange={{ first: firstNote, last: lastNote }}
          playNote={(midiNumber) => {
            testFunc(midiNumber)
          }}
          stopNote={(midiNumber) => {
          }}
          width={width*0.7}
          keyboardShortcuts={keyboardShortcuts}
        />
      </header>
    </div>
  );
}