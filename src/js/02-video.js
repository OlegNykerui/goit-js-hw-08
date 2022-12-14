import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(elem => {
    localStorage.setItem('videoplayer-current-time', elem.seconds);
  }, 1000)
);
const savedTime = localStorage.getItem('videoplayer-current-time');
savedTime && player.setCurrentTime(savedTime);
