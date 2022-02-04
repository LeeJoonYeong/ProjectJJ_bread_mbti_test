'use strict';

const $result_img_wrap = document.querySelector('#main-wrap .result-img-wrap');
const $result_title = document.querySelector('#main-wrap .result-title');
const $result_content = document.querySelector('#main-wrap .result-content');

if(window.location.pathname === '/intj.html') {
  $result_img_wrap.style.position = 'relative';
  $result_img_wrap.style.left = '50px';
  $result_img_wrap.style.top = '-40px';
}

