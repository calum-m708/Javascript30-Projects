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
