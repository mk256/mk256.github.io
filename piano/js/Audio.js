"use strict";

class Audio {

  constructor() {
    this.audioContext = null;
    this.nodes = [];
    this.gainNode = null;
    this.audioAnalyserNode = null;
    this.enabled = false;
  }

  enable() {
    if (!this.enabled) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.gainNode = this.audioContext.createGain();
      this.enabled = true;
    }

    return this;
  }

  setVolume(volume) {
    this.gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
  }

  suspend() {
    this.audioContext.suspend();
  }

  resume() {
    this.audioContext.resume();
  }

  isEnabled() {
    return this.enabled;
  }

  enableAnalyser(fftSize = 128) {
    if (this.enabled) {
      this.audioAnalyserNode = this.audioContext.createAnalyser();
      this.audioAnalyserNode.fftSize = fftSize;
    }

    return this;
  }

  disable(when = 0) {
    if (this.enabled) {
      this.gainNode.gain.setValueAtTime(when, 0);
      this.nodes.forEach((node, i) => {
        node.disconnect(this.gainNode);
      });
      this.enabled = false;
      this.audioContext.close();
    }

    return this;
  }

  getAudioContext() {
    return this.audioContext;
  }

  getAnalyser() {
    return this.audioAnalyserNode;
  }

  connectAudioNodeToOutput(node) {
    if (this.enabled) {
      this.nodes.push(node);

      if (this.audioAnalyserNode === null) {
        node.connect(this.gainNode)
            .connect(this.audioContext.destination);
      }
      else {
        node.connect(this.gainNode)
            .connect(this.audioAnalyserNode)
            .connect(this.audioContext.destination);
      }
    }

    return this;
  }

}
