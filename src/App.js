import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';

function App() {
  const { transcript, listening, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

  if(!browserSupportsSpeechRecognition)   {
    return <span>Your Browser doesn't support Speech to Text</span>
  }

  return (
    <div class="app">
      <h1>Speech to Text App</h1>
      <h4>Microphone: {listening ? 'on' : 'off'}</h4>
      <div class='buttons'>
      <button class='start' onClick={SpeechRecognition.startListening}>Start</button>
      <button class='stop' onClick={SpeechRecognition.stopListening}>Stop</button>
      <button class='reset' onClick={resetTranscript}>Reset</button>
      </div>
      <div class='text'>
      {transcript}
      </div>
    </div>
  );
}

export default App;