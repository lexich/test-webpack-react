var React = require('react');
var Reflux = require("reflux");
require("./SimpleBox.scss");
var cat2 = require("./cat2.png");

var store = require("../store/Store");
var actions = require("../actions/actions");

module.exports = React.createClass({
  mixins: [
    Reflux.connect(store,"data")
  ],
  getInitialState: function(){
    return { data: store.data};
  },
  render: function() {
    return (
      <div className="simplebox">
        <p>{this.props.title}</p>
        <img className="simplebox__image" src={ cat2 } />
        <ul>
          { this.state.data.map(function(item){ return (<li>{ item }</li>) }) }
        </ul>
      </div>
    );
  }
});
