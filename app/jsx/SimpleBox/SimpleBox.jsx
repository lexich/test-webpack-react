var React = require('react');
require("./SimpleBox.scss");
var cat2 = require("./cat2.png");
module.exports = React.createClass({
  getInitialState: function(){
    return {};
  },
  render: function() {
    return (
      <div className="simplebox">
        <p>{this.props.title}</p>
        <img className="simplebox__image" src={ cat2 } />
      </div>
    );
  }
});
