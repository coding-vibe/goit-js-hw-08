import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const savedCurrentTimeInLS = localStorage.getItem(STORAGE_KEY);

const onTimeTracking = (e) => {
    const currentTime = e.seconds;
    localStorage.setItem(STORAGE_KEY, currentTime);
};
player.on('timeupdate', throttle((onTimeTracking), 1000));

const onPageReload = (currentSeconds) => {
        player.setCurrentTime(currentSeconds)
};
onPageReload(savedCurrentTimeInLS);

