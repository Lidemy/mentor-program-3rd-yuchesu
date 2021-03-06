/* eslint-disable no-plusplus */
/* eslint-disable comma-dangle */
/* eslint-disable prefer-destructuring */
/* eslint-disable arrow-parens */
const rp = require('request-promise-native');
const process = require('process');

const maxLimit = 100; // 100
const topNumber = 300;
let reqTimes = topNumber / maxLimit;
let gameId;
// let cnt = 0;

const options = {
  url: `https://api.twitch.tv/helix/games?name=${process.argv[2]}`,
  headers: {
    'Client-ID': 'ylx39xtx1ne6q7my9p4m50aadd190z'
  }
};

function printStreamInfo(body) {
  if (reqTimes > 0) {
    reqTimes--;
    const topStreams = JSON.parse(body).data;
    for (let i = 0; i < topStreams.length; i += 1) {
      console.log(topStreams[i].user_name, topStreams[i].id);
      // console.log((cnt += 1));
    }
    const {
      pagination: { cursor }
    } = JSON.parse(body);
    options.url = `https://api.twitch.tv/helix/streams?game_id=${gameId}&first=${maxLimit}&after=${cursor}`;
    return rp(options)
      .then(printStreamInfo)
      .catch(error => {
        console.log(error);
      });
  }
  return 1;
}

rp(options)
  .then(body => {
    gameId = JSON.parse(body).data[0].id;
    options.url = `https://api.twitch.tv/helix/streams?game_id=${gameId}&first=${maxLimit}`;
    return rp(options);
  })
  .then(printStreamInfo)
  .catch(error => {
    console.log(error);
  });
