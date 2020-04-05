import {
  keysCode, en, enCaps, ru, ruCaps,
} from './assets/data.js';

const body = document.querySelector('body');
const wrapper = document.createElement('div');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');


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

let flag = true;

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  document.querySelectorAll('.key').forEach((item) => item.classList.remove('active'));

  if (event.key === 'Shift') {
    caps = !caps;
    changeKeyboard();
    flag = true;
  }
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (document.querySelector(`.key[data-code=${event.code}]`)) {

    const text = document.querySelector(`.key[data-code=${event.code}]`).innerHTML;
    document.querySelector(`.key[data-code=${event.code}]`).classList.add('active');

    if (event.code === 'Tab') {
      textarea.value += '   ';
    } else if (event.code === 'Backspace' || event.code === 'Delete') {
      textarea.value = textarea.value.slice(0, -1);
    } else if (event.code === 'Enter') {
      textarea.value += '\n';
    } else if (event.code === 'Space') {
      textarea.value += ' ';
    } else if (event.code === 'CapsLock') {
      caps = !caps;
      changeKeyboard();
    } else if (event.altKey && event.ctrlKey) {
      langEn = !langEn;
      localStorage.setItem('langEn', langEn);
      changeKeyboard();
    } else if (event.key === 'Shift' && flag) {
      caps = !caps;
      changeKeyboard();
      flag = false;
    } else if (event.key === 'Control' || event.key === 'Alt' || event.key === 'Meta') {

    } else {
      textarea.value += text;
      textarea.focus();
    }
  }
});


keyboard.querySelectorAll('.key').forEach((item) => {
  item.addEventListener('mousedown', () => {
    item.classList.add('active');

    const text = item.innerText;
    if (item.classList.contains('control')) {
      if (text === 'CapsLock') {
        caps = !caps;
        changeKeyboard();
      }
      if (text === 'Delete' || text === 'Backspace') {
        textarea.value = textarea.value.slice(0, -1);
      }
      if (text === 'Enter') {
        textarea.value += '\n';
      }
      if (text === 'Space') {
        textarea.value += ' ';
      }
      if (text === 'Shift') {
        caps = !caps;
        changeKeyboard();
      }
      if (text === 'Tab') {
        textarea.value += '   ';
      }
    } else {
      textarea.value += item.innerHTML;
    }
  });

  item.addEventListener('mouseup', () => {
    item.classList.remove('active');
    textarea.focus();
  });
});
