"use strict";

class Instrument {

  //Initialization of frequencies and other instrument characterstics
  constructor() {
    this.notes = [];
    this.lowestNote = null;
    this.highestNote = null;
  }

  //returns all possible this.notes
  getNotes() {
    return this.notes;
  }

  //Returns a note frequency
  getNoteFrequency(note) {
    return this.notes[note];
  }

  //Wave
  getWave() {
    return null;
  }

  getSynthesizeType() {
    return "none";
  }

  //Duration in seconds
  getDefaultDuration() {
    return null;
  }

  //Starting delay (fractional)
  getStartingDelay() {
    return null;
  }

  //Ending delay
  getEndingDelay() {
    return null;
  }

  //Time note still plays after main duration
  getFadeDuration() {
    return null;
  }

  getLowestNote() {
    return this.lowestNote;
  }

  getHighestNote() {
    return this.highestNote;
  }
}
