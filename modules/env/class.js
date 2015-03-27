
var SuperJS = require('superjs');

module.exports = SuperJS.Class.extend({

  _metaFile: function() {
    this._loadMeta(__filename);
  },

  //determine the current lifecycle environment for our application
  get: function() {

    if( process.env.NODE_ENV ) {

      if( process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
        return 'prod';
      } else if ( process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'beta' ) {
        return 'beta';
      } else {
        return 'dev';
      }

    } else {

      return 'dev';
    }
  }

})
