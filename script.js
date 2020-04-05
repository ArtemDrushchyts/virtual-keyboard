const body = document.querySelector('body');
const wrapper = document.createElement('div');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');

const keysCode = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const en = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '🠕', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '🠔', '🠗', '🠖', 'Ctrl'];

const enCaps = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '🠕', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '🠔', '🠗', '🠖', 'Ctrl'];

const ru = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '🠕', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '🠔', '🠗', '🠖', 'Ctrl'];

const ruCaps = [
  'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '🠕', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '🠔', '🠗', '🠖', 'Ctrl'];

body.appendChild(wrapper);
wrapper.classList.add('wrapper');
wrapper.appendChild(textarea);
textarea.classList.add('textarea');
wrapper.appendChild(keyboard);
keyboard.classList.add('keyboard-wrapper');

let caps = false;
let langEn = JSON.parse(localStorage.getItem('langEn'));

function keyboardKey() {
  let layout = langEn;
  if (layout) {
    if (caps) {
      layout = enCaps;
    } else {
      layout = en;
    }
  } else if (caps) {
    layout = ruCaps;
  } else {
    layout = ru;
  }
  keyboard.querySelectorAll('span').forEach((item) => item.remove());

  for (let i = 0; i < keysCode.length; i++) {
    let keyClass = '';
    if (keysCode[i] === 'Tab' || keysCode[i] === 'Delete' || keysCode[i] === 'ControlLeft' || keysCode[i] === 'ControlRight' || keysCode[i] === 'MetaLeft' || keysCode[i] === 'AltLeft' || keysCode[i] === 'AltRight') {
      keyClass = `control ${keysCode[i].toLowerCase()}`;
    }
    if (keysCode[i] === 'Backspace' || keysCode[i] === 'CapsLock' || keysCode[i] === 'Enter' || keysCode[i] === 'ShiftLeft' || keysCode[i] === 'ShiftRight') {
      keyClass = `control middle ${keysCode[i].toLowerCase()}`;
    }
    if (keysCode[i] === 'Space') {
      keyClass = 'control space';
    }
    keyboard.innerHTML += `<span class="key ${keyClass}" data-code=${keysCode[i]}>${layout[i]}</span>`;
  }
}

function changeKeyboard() {
  // const layout = langEn ? (caps ? enCaps : en) : (caps ? ruCaps : ru);
  let layout = langEn;
  if (layout) {
    if (caps) {
      layout = enCaps;
    } else {
      layout = en;
    }
  } else if (caps) {
    layout = ruCaps;
  } else {
    layout = ru;
  }

  keyboard.querySelectorAll('span').forEach((item, i) => {
    item.innerText = layout[i];
  });
}

keyboardKey();

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  document.querySelectorAll('.key').forEach((item) => item.classList.remove('active'));

  if (event.key === 'Shift') {
    caps = !caps;
    changeKeyboard();
  }
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (document.querySelector(`.key[data-code=${event.code}]`)) {
    const pressed = new Set();
    pressed.add(event.code);
    let text = document.querySelector(`.key[data-code=${event.code}]`).innerHTML;
    document.querySelector(`.key[data-code=${event.code}]`).classList.add('active');
    if (event.code === 'Tab') {
      textarea.value += '   ';
    } else if (event.code === 'Backspace' || event.code === 'Delete') {
      textarea.value = textarea.value.slice(0, -1);
    } else if (event.code === 'Enter') {
      textarea.value += '\n';
    } else if (event.code === 'Space') {
      textarea.value += ' ';
    } else if (event.code === 'ArrowUp') {
      textarea.value += '🠕';
    } else if (event.code === 'ArrowLeft') {
      textarea.value += '🠔';
    } else if (event.code === 'ArrowDown') {
      textarea.value += '🠗';
    } else if (event.code === 'ArrowRight') {
      textarea.value += '🠖';
    } else if (event.code === 'CapsLock') {
      caps = !caps;
      changeKeyboard();
    } else if (event.altKey && event.ctrlKey) {
      langEn = !langEn;
      localStorage.setItem('langEn', langEn);
      changeKeyboard();
    } else if (event.shiftKey) {
      caps = !caps;
      changeKeyboard();
    } else if (event.key === 'Control' || event.key === 'Alt' || event.key === 'Meta') {

    } else {
      textarea.value += text;
    }
  }
});