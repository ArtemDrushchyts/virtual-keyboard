const body = document.querySelector('body');
const wrapper = document.createElement('div');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
// const keys = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 93, 17, 37, 40, 39];
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
let langEn = true;

function keyboardKey() {
  const layout = langEn ? (caps ? enCaps : en) : (caps ? ruCaps : ru);
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

keyboardKey();

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  document.querySelectorAll('.key').forEach((item) => item.classList.remove('active')); 
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (document.querySelector(`.key[data-code=${event.code}]`)) {
    document.querySelector(`.key[data-code=${event.code}]`).classList.add('active');

    switch (event.code) {
      case 'Tab':
        textarea.value += '   ';
        break;
      case 'Backspace':
        textarea.value = textarea.value.slice(0, -1);
        break;
      case 'Enter':
        textarea.value += 'df';
        break;
      case 'Delete':
        textarea.value = 'df';
        break;
      case 'AltLeft' && event.code === 'ControlLeft':
        caps = !caps;
        keyboardKey();
        break;
      default:
        textarea.value += `${event.key}`;
        break;
    }
  }
});