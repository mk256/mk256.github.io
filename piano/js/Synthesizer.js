"use strict";

const C_BASE_FREQ_A4 = 440;
const C_HALF_TONE    = Math.pow(2, 1/12);

//Describes Synthesizer inistrument
class Synthesizer extends Instrument {

  //Initialization of frequencies and other instrument characterstics
  constructor() {
    super();
    this.calculateNotes();
  }

  //Wave
  getWave() {
    return {
      imag : new Float32Array([0, 1, 0.1, 0.2, 0.1, 0, 0]),
      real : new Float32Array(7)
    };
  }

  //
  getSynthesizeType() {
    return "oscillator";
  }

  //Duration in seconds
  getDefaultDuration() {
    return 1/2;
  }

  //Starting delay (fractional)
  getStartingDelay() {
    return 1/16;
  }

  //Ending delay
  getEndingDelay() {
    return 1/4;
  }

  //Time note stil plays after main duration
  getFadeDuration() {
    return 1/2;
  }

  //Calculate frequencies of notes based on A4 note.
  calculateNotes() {
    for (let octave = 0, note = 10, frequency = C_BASE_FREQ_A4 / 16; octave <= 8; frequency *= C_HALF_TONE) {
        switch (note) {
          case 1:
            this.notes["C" + octave] = frequency;
            break;
          case 2:
            this.notes["C#" + octave] = frequency;
            this.notes["Db" + octave] = frequency;
            break;
          case 3:
            this.notes["D" + octave] = frequency;
            break;
          case 4:
            this.notes["D#" + octave] = frequency;
            this.notes["Eb" + octave] = frequency;
            break;
          case 5:
            this.notes["E" + octave] = frequency;
            break;
          case 6:
            this.notes["F" + octave] = frequency;
            break;
          case 7:
            this.notes["F#" + octave] = frequency;
            this.notes["Gb" + octave] = frequency;
            break;
          case 8:
            this.notes["G" + octave] = frequency;
            break;
          case 9:
            this.notes["G#" + octave] = frequency;
            this.notes["Ab" + octave] = frequency;
            break;
          case 10:
            this.notes["A" + octave] = frequency;
            break;
          case 11:
            this.notes["A#" + octave] = frequency;
            this.notes["Bb" + octave] = frequency;
            break;
          case 12:
            this.notes["B" + octave] = frequency;
            break;
        }
        if (++note == 13) {
          octave++;
          note = 1;
        }
        if (note == 2 && octave == 8) {
          break;
        }
      }
      this.lowestNote = "A0";
      this.highestNote = "C8";
  }

}
