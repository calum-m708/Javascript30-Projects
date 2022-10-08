const panels = document.querySelectorAll('.panel');

function toggleFighter(e) {
  this.classList.toggle('open');
}

function showText(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) => panel.addEventListener('click', toggleFighter));
panels.forEach((panel) => panel.addEventListener('transitionend', showText));
