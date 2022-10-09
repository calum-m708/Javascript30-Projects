const playAudio = (e) => {
  console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const button = document.querySelector(`.btn[data-key="${e.keyCode}"]`);
  if (!audio) return;

  button.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};
const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
};

const buttons = document.querySelectorAll('.btn');
buttons.forEach((btn) =>
  btn.addEventListener('transitionend', removeTransition)
);

window.addEventListener('keydown', playAudio);

// KEY SEQUENCE DETECTION
const pressed = [];
const code = 'devil';

window.addEventListener('keyup', (e) => {
  const secretMessage = document.querySelector('.secret-message>a');
  pressed.push(e.key);
  pressed.splice(-code.length - 1, pressed.length - code.length);
  if (pressed.join('').includes(code)) {
    secretMessage.style.display = 'inline-block';
  }
});
