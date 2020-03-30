const body = document.getElementsByTagName('body');

const keyboard = [96, 49, 50, 51, 52, 53, 54 ,55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 93, 17, 37, 40, 39];
document.onkeypress = function(event) {
  console.log('which ' + event.which);
  console.log('code ' + event.code);
  console.log('key ' + event.key);
};

function board () {
  for(let i = 0; i < keyboard.length; i++) {
      console.log(String.fromCharCode(keyboard[i]));
  }
};

board();
