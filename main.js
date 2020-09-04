
// https://github.com/przemyslawpluta/node-youtube-dl/issues/327 

const youtubedl = require('youtube-dl');
const fs = require('fs');

const video = youtubedl(`https://www.twitch.tv/videos/697523995`);
video.on('info', (info) => {
    console.log('info');
    console.log(info);
});
video.pipe(fs.createWriteStream('output.mkv'));
video.on('complete', (info) => {
    console.log('complete');
    console.log(info)
});
video.on('end', () => {
    console.log('end');
});

