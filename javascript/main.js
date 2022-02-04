'use strict';


const $steps = document.querySelectorAll('#step-wrap .step');
const $step_wrap = document.querySelector('#step-wrap');
const $progress_wrap = document.querySelector('#main-wrap .progress-wrap');
const $progress = document.querySelector('#main-wrap .progress-wrap .bar .progress');
const $lever = document.querySelector('#main-wrap .progress-wrap .lever');
const $loading_title = document.querySelector('#main-wrap .loading-title');
const $loading_img_wrap = document.querySelector('#main-wrap .loading-img-wrap');

let Cur_Step_Left = 45.83;
let Cur_progress_w = (100 / 12);
let Cur_lever_left = (100 / 12);
let step_count = 0;
let mbti = {
  E: 0,
  I: 0,
  S: 0,
  N: 0,
  F: 0,
  T: 0,
  P: 0,
  J: 0,
};

// 답변 클릭 시 다음 스텝으로 넘어가기.
$step_wrap.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('answer1')
    || target.classList.contains('answer2')) {

      // mbti 계산.
      step_count++;
      switch(step_count) {
        case 1:
          if(target.classList.contains('answer1')) {
            mbti.P++;
          } else {
            mbti.J++;
          }
          break;
        case 2:
          if(target.classList.contains('answer1')) {
            mbti.E++;
          } else {
            mbti.I++;
          }
          break;
        case 3:
          if(target.classList.contains('answer1')) {
            mbti.E++;
          } else {
            mbti.I++;
          }
          break;
        case 4:
          if(target.classList.contains('answer1')) {
            mbti.S++;
          } else {
            mbti.N++;
          }
          
          break;
        case 5:
          if(target.classList.contains('answer1')) {
            mbti.F++;
          } else {
            mbti.T++;
          }
          break;
        case 6:
          if(target.classList.contains('answer1')) {
            mbti.S++;
          } else {
            mbti.N++;
          }
          break;
        case 7:
          if(target.classList.contains('answer1')) {
            mbti.P++;
          } else {
            mbti.J++;
          }
          break;
        case 8:
          if(target.classList.contains('answer1')) {
            mbti.E++;
          } else {
            mbti.I++;
          }
          break;
        case 9:
          if(target.classList.contains('answer1')) {
            mbti.F++;
          } else {
            mbti.T++;
          }
          break;
        case 10:
          if(target.classList.contains('answer1')) {
            mbti.S++;
          } else {
            mbti.N++;
          }
          break;
        case 11:
          if(target.classList.contains('answer1')) {
            mbti.F++;
          } else {
            mbti.T++;
          }
          break;
        case 12:
          if(target.classList.contains('answer1')) {
            mbti.P++;
          } else {
            mbti.J++;
          }

          $progress_wrap.classList.remove('active');
          $step_wrap.classList.remove('active');
          $loading_title.classList.add('active');
          $loading_img_wrap.classList.add('active');

          CalculateMBTI();
          break;
      }

      // progress, 레버 진행상황 처리.
      let progress_w = (100 / 12);
      Cur_progress_w += progress_w;
      let lever_left = (100 / 12);
      Cur_lever_left += lever_left;

      $progress.style.width = `${Cur_progress_w}%`;
      $lever.style.left = `calc(${Cur_lever_left}% - 40px)`;

      // 레버 이미지 펌핑 애니메이션.
      //$lever.classList.add('active');

      //window.setTimeout(() => {
      //  $lever.classList.remove('active');
      //}, 600);

      // 답변 이미지 스크롤 애니메이션 처리.
      $steps.forEach((value, key) => {

        let Step_Left = Cur_Step_Left;

        Step_Left = (Step_Left - (100 / 12));

        let answer = Step_Left + '%';
        value.style.left = answer;

        if (key === $steps.length - 1) {
          Cur_Step_Left = Step_Left;
        }
      });
      console.log(mbti);
  }
})

function CalculateMBTI() {

  let result = '';

  if(mbti.E > mbti.I && mbti.S > mbti.N && mbti.F > mbti.T && mbti.P > mbti.J) {
    result = 'esfp';
  } else if(mbti.E > mbti.I && mbti.S > mbti.N && mbti.F > mbti.T && mbti.P < mbti.J) {
    result = 'esfj';
  } else if(mbti.E > mbti.I && mbti.S > mbti.N && mbti.F < mbti.T && mbti.P > mbti.J) {
    result = 'estp';
  } else if(mbti.E > mbti.I && mbti.S > mbti.N && mbti.F < mbti.T && mbti.P < mbti.J) {
    result = 'estj';
  } else if(mbti.E > mbti.I && mbti.S < mbti.N && mbti.F > mbti.T && mbti.P > mbti.J) {
    result = 'enfp';
  } else if(mbti.E > mbti.I && mbti.S < mbti.N && mbti.F > mbti.T && mbti.P < mbti.J) {
    result = 'enfj';
  } else if(mbti.E > mbti.I && mbti.S < mbti.N && mbti.F < mbti.T && mbti.P > mbti.J) {
    result = 'entp';
  } else if(mbti.E > mbti.I && mbti.S < mbti.N && mbti.F < mbti.T && mbti.P < mbti.J) {
    result = 'entj';
  } else if(mbti.E < mbti.I && mbti.S > mbti.N && mbti.F > mbti.T && mbti.P > mbti.J) {
    result = 'isfp';
  } else if(mbti.E < mbti.I && mbti.S > mbti.N && mbti.F > mbti.T && mbti.P < mbti.J) {
    result = 'isfj';
  } else if(mbti.E < mbti.I && mbti.S > mbti.N && mbti.F < mbti.T && mbti.P > mbti.J) {
    result = 'istp';
  } else if(mbti.E < mbti.I && mbti.S > mbti.N && mbti.F < mbti.T && mbti.P < mbti.J) {
    result = 'istj';
  } else if(mbti.E < mbti.I && mbti.S < mbti.N && mbti.F > mbti.T && mbti.P > mbti.J) {
    result = 'infp';
  } else if(mbti.E < mbti.I && mbti.S < mbti.N && mbti.F > mbti.T && mbti.P < mbti.J) {
    result = 'infj';
  } else if(mbti.E < mbti.I && mbti.S < mbti.N && mbti.F < mbti.T && mbti.P > mbti.J) {
    result = 'intp';
  } else if(mbti.E < mbti.I && mbti.S < mbti.N && mbti.F < mbti.T && mbti.P < mbti.J) {
    result = 'intj';
  }
  console.log(result);

  // 시간 경과후 결과 페이지 이동.
  window.setTimeout(() => {
    window.location.href = `./${result}.html`;
  }, 5000);
}


