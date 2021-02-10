window.onload = () => {
  'use strict';

  console.log("main.js, window.location.href: " + window.location.href);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(window.location.href + 'sw.js');
  }
}