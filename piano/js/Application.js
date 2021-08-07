"use strict";

class Application {
  constructor() {
    this.audio = new Audio();
    this.synthesizer = new Synthesizer();
    this.audio.enable();
    this.pianoPlayer = new PianoPlayer(this.audio.getAudioContext(), this.synthesizer);
    this.pianoKeyboard;
    this.audioInitialized = false;
  }

  main() {
    this.pianoKeyboard = new PianoKeyboard(document.getElementById("keyboardContainer"));

    this.pianoKeyboard.setKeyboardMap({
      'z': 'C4',
      's': 'C#4',
      'x': 'D4',
      'd': 'D#4',
      'c': 'E4',
      'v': 'F4',
      'g': 'F#4',
      'b': 'G4',
      'h': 'G#4',
      'n': 'A4',
      'j': 'A#4',
      'm': 'B4',
      ',': 'C5',
      'l': 'C#5',
      '.': 'D5',
      ';': 'D#5',
      '/': 'E5'
    });
    this.pianoKeyboard.drawKeyboard();

    this.pianoKeyboard.setKeyDownFunction(this.pianoPlayer.keyDown.bind(this.pianoPlayer));
    this.pianoKeyboard.setKeyUpFunction(this.pianoPlayer.keyUp.bind(this.pianoPlayer));
    document.addEventListener('keydown', this.keyDown.bind(this), false);
    document.addEventListener('keyup', this.keyUp.bind(this), false);
    document.getElementById("volume").onchange = this.setVolume.bind(this);
    document.addEventListener('mousedown', this.on.bind(this));
  }

  setVolume() {
    this.audio.setVolume(document.getElementById('volume').value / 100);
  }

  on() {
    if (this.audioInitialized)
      return;
    this.setVolume();
    this.audio.resume();
    this.audio.connectAudioNodeToOutput(this.pianoPlayer.getAudioNode());
    document.removeEventListener('mousedown', this.on);
  }

  keyDown(e) {
    if (!this.audioInitialized) { this.on(); }
    this.pianoKeyboard.keyDown(e);
  }

  keyUp(e) {
    this.pianoKeyboard.keyUp(e);
  }

  onResize() {
    if (this.pianoKeyboard) {
      this.pianoKeyboard.onResize();
    }
  }
}
