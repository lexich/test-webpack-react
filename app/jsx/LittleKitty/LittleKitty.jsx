var React = require('react');
require("./LittleKitty.scss");
var imgSrc = require("./cat.jpg");
var Img = require("../Img/Img");

module.exports = React.createClass({
  render: function(){
    return (
      <div className="LittleKitty">
        <Img src={imgSrc} className={"LittleKitty__image"} />
      </div>
    );
  }
});
