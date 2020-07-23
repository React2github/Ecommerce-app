const proxyurl = "https://cors-anywhere.herokuapp.com/";

var config = {
    apiUrl: proxyurl + process.env.apiUrl || 'https:localhost:3001'
  }

  module.exports = config