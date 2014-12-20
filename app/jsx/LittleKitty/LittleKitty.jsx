var React = require('react');
require("./LittleKitty.scss");
var imgSrc = require("./cat.jpg");

module.exports = React.createClass({
  render: function(){
    return (
      <div className="LittleKitty">
        <img className="LittleKitty__image" src={imgSrc} />
      </div>
    );
  }
});
