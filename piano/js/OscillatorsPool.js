"use strict";

const C_MAX_OSCILLATORS = 50;
const C_LEVEL_0 = 0.00001;

/**
 * This class combines oscillator with gain to provide some basic functionality
 * for sound play
 */
class ComplexOscillator {
/*
    #id;
    #gainNode;
    #oscillatorNode;
*/
    constructor(id, oscillator, gain) {
      this.id = id;
      this.oscillatorNode = oscillator;
      this.gainNode = gain;
    }

    getId() {
      return this.id;
    }

    getOscillator() {
      return this.oscillatorNode;
    }

    getGain() {
      return this.gainNode;
    }

    /**
     * Starts playing sound exponentially increasing volume
     */
    playExponentialRamp(frequency, toVolumeValue, startTime, finishTime) {
      this.oscillatorNode.frequency.setValueAtTime(frequency, startTime);
      this.gainNode.gain.setValueAtTime(C_LEVEL_0, startTime);
      this.gainNode.gain.exponentialRampToValueAtTime(toVolumeValue, finishTime);
    }

    /**
     * Instructs oscillator to keep playing till specified time
     */
    keepPlaying(atVolume, tillTime) {
      this.gainNode.gain.setValueAtTime(atVolume, tillTime);
    }

    /**
     * Stops playing exponentially
     */
    stopPlayExponential(atTime) {
      this.gainNode.gain.cancelScheduledValues(atTime);
      this.gainNode.gain.exponentialRampToValueAtTime(C_LEVEL_0, atTime);
      this.oscillatorNode.frequency.setValueAtTime(0, atTime);
    }

}

/**
 * Oscillators pool
 *  Generates oscillator with gain and connects it to finalNode.
 *  Gain is for playing individual notes.
 */
class OscillatorsPool {

  constructor(audioContext,
              instrument,
              finalNode,
              poolSize = C_MAX_OSCILLATORS) {
    this.poolSize = poolSize;
    this.audioContext = audioContext;
    this.instrument = instrument;
    this.finalNode = finalNode;
    this.oscillatorPointer = 0;
    this.oscillatorsPool = [];
    this.oscillatorsUsed = 0;
    this.oscillatorId = 0;
  }

  /**
   * INTERNAL USE ONLY
   *  Creates oscillator node connected to gain
   *  returns structure with these nodes.
   */
  createNewOscillatorWithGain() {
    let gainNode = this.audioContext.createGain();
    let oscillatorNode = this.audioContext.createOscillator();

    oscillatorNode.setPeriodicWave(
      this.audioContext.createPeriodicWave(
        this.instrument.getWave().real,
        this.instrument.getWave().imag
      )
    );

    oscillatorNode
      .connect(gainNode)
      .connect(this.finalNode);

    gainNode
      .gain
      .setValueAtTime(0, this.audioContext.currentTime);

    oscillatorNode.start();

    this.oscillatorsUsed++;

    return new ComplexOscillator(this.oscillatorId++, oscillatorNode, gainNode);
  }

  //Returns new or existing oscillator from pool
  getOscillator() {
    if (this.oscillatorsPool.length < this.poolSize) {
      this.oscillatorsPool.push(this.createNewOscillatorWithGain());
    }
    else {
      if (this.oscillatorPointer == this.poolSize) {
        this.oscillatorPointer = 0;
      }
    }
    return this.oscillatorsPool[this.oscillatorPointer++];
  }

  //Returns current oscillator to be used.
  getOscillatorPointer() {
    return this.oscillatorPointer;
  }

  //Returns complex oscillator by it's id
  getOscillatorById(id) {
    for (let i = 0; i < this.oscillatorsUsed; ++i) {
      if (this.oscillatorsPool[i].getId() == id) {
        return this.oscillatorsPool[i];
      }
    }
  }

}
