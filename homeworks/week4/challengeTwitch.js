/* eslint-disable comma-dangle */
/* eslint-disable prefer-destructuring */
/* eslint-disable arrow-parens */
const rp = require('request-promise-native');

const maxLimit = 100; // 100
const gameId = '21779';
// let cnt = 0;

const options = {
  url: `https://api.twitch.tv/helix/streams?game_id=${gameId}&first=${maxLimit}`,
  headers: {
    'Client-ID': 'ylx39xtx1ne6q7my9p4m50aadd190z'
  }
};

function getTopStream(body) {
  const topStreams = JSON.parse(body).data;
  for (let i = 0; i < topStreams.length; i += 1) {
    console.log(topStreams[i].user_name, topStreams[i].id);
    // console.log((cnt += 1));
  }
  const {
    pagination: { cursor }
  } = JSON.parse(body);

  options.url = `https://api.twitch.tv/helix/streams?game_id=${gameId}&first=${maxLimit}&after=${cursor}`;
  return rp(options);
}

rp(options)
  .then(getTopStream)
  .then(getTopStream)
  .catch(error => {
    console.log(error);
  });
