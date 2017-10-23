var divr = document.querySelector('#feu_rouge');
var divo = document.querySelector('#feu_orange');
var divv = document.querySelector('#feu_vert');

function TimerVinit() {
  divv.classList.remove('feu_gris');
  divv.classList.add('feu_vert');
  setTimeout(TimerV, 0000);
}
function TimerV() {
  divr.classList.remove('feu_rouge');
  divr.classList.add('feu_gris');
  divv.classList.remove('feu_gris');
  divv.classList.add('feu_vert');
  setTimeout(TimerO, 3000);
}
function TimerO() {
  divv.classList.remove('feu_vert');
  divv.classList.add('feu_gris');
  divo.classList.remove('feu_gris');
  divo.classList.add('feu_orange');
  setTimeout(TimerR, 3000);
}
function TimerR() {
  divo.classList.remove('feu_orange');
  divo.classList.add('feu_gris');
  divr.classList.remove('feu_gris');
  divr.classList.add('feu_rouge');
  setTimeout(TimerV, 6000);
}
TimerVinit();
TimerV();
