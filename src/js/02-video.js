import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// get
player.on('timeupdate', throttle(() => {
    player.getCurrentTime().then(seconds => {
        localStorage.setItem('videoplayer-current-time', seconds);
    });
}, 1000)
);

// set and update
const updateCurrentTime = () => {
const currentTime = localStorage.getItem('videoplayer-current-time');

    if (currentTime) { return player.setCurrentTime(currentTime).then(function (seconds) { }) };
};
updateCurrentTime();
