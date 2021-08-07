"use strict";

const STYLE_WHITE_KEY = "whiteKey";
const STYLE_BLACK_KEY = "blackKey";
const STYLE_WHITE_KEY_TEXT = "whiteKeyText";
const STYLE_BLACK_KEY_TEXT = "blackKeyText";
const STYLE_BOARD = "board";
const TAG_DIV = "div";
const WHITE_KEYS_COUNT = 52;

/**
 * This class draws a piano keyboard
 */
class PianoKeyboard {

  constructor(parentElement) {
    this.parentElement = parentElement;
    this.calcDimensions();
    this.keyMap = {};
  }

  calcDimensions() {
    this.boardWidth = this.parentElement.getBoundingClientRect().width;
    this.whiteKeyWidth = (this.boardWidth - 20) / WHITE_KEYS_COUNT;
    this.blackKeyWidth = this.whiteKeyWidth / 2;
    this.whiteKeyHeight = this.parentElement.getBoundingClientRect().height * 0.9;
    this.blackKeyHeight = this.whiteKeyHeight * 0.7;
  }

  onResize() {
    this.calcDimensions();
    this.deleteKeyBoard();
    this.drawKeyboard();
  }

  setKeyDownFunction(keyDownFunction) {
    this.keyDownFunction = keyDownFunction;
  }

  setKeyUpFunction(keyUpFunction) {
    this.keyUpFunction = keyUpFunction;
  }

  keyPressed(note) {
    let key = document.getElementById(note);
    key.style.backgroundColor = (key.className == STYLE_BLACK_KEY) ? "#404040" : "#D0D0D0";
    if (this.keyDownFunction) {
      this.keyDownFunction(note);
    }
  }

  keyReleased(note) {
    let key = document.getElementById(note);
    key.style.backgroundColor = (key.className == STYLE_BLACK_KEY) ? "black" : "white";
    if (this.keyUpFunction) {
      this.keyUpFunction(note);
    }
  }

  keyDown(e) {
    if (!e.repeat && this.keyMap[e.key]) {
      this.keyPressed(this.keyMap[e.key]);
    }
  }

  keyUp(e) {
    if (this.keyMap[e.key]) {
      this.keyReleased(this.keyMap[e.key]);
    }
  }

  mouseKeyDown(e) {
    e.preventDefault(); //prevents drag&drop
    if (e.buttons == 1) { //only if the left mouse button is pressed.
      this.keyPressed(e.currentTarget.id);
    }
  }

  mouseKeyUp(e) {
    this.keyReleased(e.currentTarget.id);
  }

  setKeyboardMap(keyboardMap) {
    for (let i in keyboardMap) {
      this.keyMap[i] = keyboardMap[i];
    }
  }

  createKeyBoard() {
    let board = document.createElement(TAG_DIV);
    board.className = STYLE_BOARD;
    board.style.left = 0;
    board.style.top = 0;
    board.style.width = this.boardWidth;

    this.parentElement.appendChild(board);

    return board;
  }

  deleteKeyBoard() {
    this.board.remove();
  }

  createWhiteKey(positionX, positionY, keyId) {

    let key = document.createElement(TAG_DIV);
    key.className = STYLE_WHITE_KEY;
    key.style.left = positionX;
    key.style.top = positionY;
    key.style.width = this.whiteKeyWidth;
    key.style.height = this.whiteKeyHeight;
    key.id = keyId;

    let keyText = document.createElement(TAG_DIV);
    keyText.className = STYLE_WHITE_KEY_TEXT;
    keyText.textContent = keyId;
    key.appendChild(keyText);

    key.addEventListener('mousedown', this.mouseKeyDown.bind(this));
    key.addEventListener('mouseenter', this.mouseKeyDown.bind(this));
    key.addEventListener('mouseup', this.mouseKeyUp.bind(this));
    key.addEventListener('mouseout', this.mouseKeyUp.bind(this));

    return key;
  }

  createBlackKey(positionX, positionY, keyId) {

    let key = document.createElement(TAG_DIV);
    key.className = STYLE_BLACK_KEY;
    key.style.left = positionX;
    key.style.top = positionY;
    key.style.width = this.blackKeyWidth;
    key.style.height = this.blackKeyHeight;
    key.id = keyId;

    let keyText = document.createElement(TAG_DIV);
    keyText.className = STYLE_BLACK_KEY_TEXT;
    keyText.textContent = keyId;
    key.appendChild(keyText);

    key.addEventListener('mousedown', this.mouseKeyDown.bind(this));
    key.addEventListener('mouseenter', this.mouseKeyDown.bind(this));
    key.addEventListener('mouseup', this.mouseKeyUp.bind(this));
    key.addEventListener('mouseout', this.mouseKeyUp.bind(this));

    return key;
  }

  drawKeyboard() {
    this.board = this.createKeyBoard();
    let position = 10;
    let top = 0;
    let keyId;

    for (let i = 1; i <= WHITE_KEYS_COUNT; ++i) {
      let j = (i - 3) % 7;
      let octave = String(Math.floor((i + 4) / 7));

      switch ((i + 5) % 7) {
        case 1 : keyId = 'C' + octave; break;
        case 2 : keyId = 'D' + octave; break;
        case 3 : keyId = 'E' + octave; break;
        case 4 : keyId = 'F' + octave; break;
        case 5 : keyId = 'G' + octave; break;
        case 6 : keyId = 'A' + octave; break;
        case 0 : keyId = 'B' + octave; break;
      }

      this.board.appendChild(this.createWhiteKey(position, top, keyId));

      if (j == -1 || j == 1 || j == 2 || j == 4 || j == 5 || j == 6) {
        switch (j) {
          case  1 : keyId = 'C#' + octave; break;
          case  2 : keyId = 'D#' + octave; break;
          case  4 : keyId = 'F#' + octave; break;
          case  5 : keyId = 'G#' + octave; break;
          case -1 :
          case  6 : keyId = 'A#' + octave; break;
        }

        this.board.appendChild(this.createBlackKey(position - this.blackKeyWidth / 2, top, keyId));
      }
      position += this.whiteKeyWidth;
    }
  }

}
