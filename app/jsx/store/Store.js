var Reflux = require("reflux");
var actions = require("../actions/actions");

module.exports = Reflux.createStore({
  listenables: actions,
  onUpdateStatus: function(status){
    this.data.push(status);
    this.trigger(this.data);
  },
  init: function(){
    this.data = [
      "one", "two"
    ];
  }
});
