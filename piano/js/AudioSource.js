"use strict"

/**
 * Base class for classes producing sound through oscillators
 */
class AudioSource {

  constructor(audioContext, instrument) {
    if (instrument.getSynthesizeType() != "oscillator") {
      throw("Unsupported synthesizer type.");
    }
    this.instrument = instrument;
    this.audioContext = audioContext;

    this.finalNode = this.audioContext.createGain();
  }

  getAudioNode() {
    return this.finalNode;
  }

}
