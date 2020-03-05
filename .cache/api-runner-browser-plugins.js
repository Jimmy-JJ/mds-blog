module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#ff3c3c","theme_color":"#ff3c3c","display":"minimal-ui","icon":"src/images/favicon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-apollo/gatsby-browser.js'),
      options: {"plugins":[],"uri":"https://motionwares-hire-api.appspot.com/graphql"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
