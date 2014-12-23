var React = require("react")

module.exports = React.createClass({
  render: function(){
    var className = (this.props.className || "") + " image";
    return (
      <img className={className} src={this.props.src} />
    );
  }
});
