"use strict";

const C_NOTE_DURATION = 4;
const C_NOTE_STARTING_DELAY = 1/32;
const C_NOTE_ENDING_DELAY = 1/32;

class PianoPlayer extends AudioSource {

  constructor(audioContext, instrument) {
    super(audioContext, instrument);

    this.pool = new OscillatorsPool(audioContext, instrument, this.finalNode);
    this.noteIds = new Map();
  }

  keyDown(note) {
    let osc = this.pool.getOscillator();
    let fadeDuration = C_NOTE_DURATION * this.instrument.getFadeDuration();

    let tm = this.audioContext.currentTime;

    osc.playExponentialRamp(this.instrument.getNoteFrequency(note), 1, tm, C_NOTE_STARTING_DELAY + tm);
    osc.keepPlaying(1, C_NOTE_DURATION - fadeDuration + tm);
    osc.stopPlayExponential(C_NOTE_DURATION + tm);

    this.noteIds.set(note, osc.getId());
  }

  keyUp(note) {
    let oscillator = this.pool.getOscillatorById(this.noteIds.get(note));
    if (oscillator !== undefined) {
      oscillator.stopPlayExponential(this.audioContext.currentTime + C_NOTE_ENDING_DELAY);
    }
  }

}
