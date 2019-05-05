/* eslint-disable comma-dangle */
const request = require('request');

const options = {
  url: 'https://api.twitch.tv/helix/games/top',
  headers: {
    'Client-ID': 'ylx39xtx1ne6q7my9p4m50aadd190z'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    const topGames = JSON.parse(body).data;
    for (let i = 0; i < topGames.length; i += 1) {
      console.log(topGames[i].id, topGames[i].name);
    }
  }
}

request(options, callback);
