var React = require('react');
require("./SimpleBox.scss");
var cat2 = require("./cat2.png");
module.exports = React.createClass({
  render: function() {
    return (
      <div className="simplebox">
        Hello, world! I am a CommentBox.
        <img className="simplebox-image" src={ cat2 } />
      </div>
    );
  }
});
