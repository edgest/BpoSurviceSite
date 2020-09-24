'use strict';
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const nav_all = document.querySelector('nav_all');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
      overlay.classList.add('show');
      open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  close.addEventListener('click', () => {
    nav_all.classList.remove('show');
    open.classList.remove('hide');
  });
}