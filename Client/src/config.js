const proxyurl = "https://cors-anywhere.herokuapp.com/";

var config = {
    apiUrl: proxyurl + 'https://enigmatic-ravine-46914.herokuapp.com/api/products' || 'https:localhost:3001'
  }

  module.exports = config