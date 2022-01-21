'use strict';


const $steps = document.querySelectorAll('#step-wrap .step');
const $step_wrap = document.querySelector('#step-wrap');

let Cur_Step_Left = 45.83;

$step_wrap.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('answer1')
    || target.classList.contains('answer2')) {
    $steps.forEach((value, key) => {

      let Step_Left = Cur_Step_Left;

      Step_Left = (Step_Left - (100 / 12));

      let answer = Step_Left + '%';
      value.style.left = answer;

      if(key === $steps.length - 1) {
        Cur_Step_Left = Step_Left;
      }
    });
  }
})
