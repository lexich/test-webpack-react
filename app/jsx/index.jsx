SimpleBox = require("./SimpleBox/SimpleBox")
React = require("react")
module.exports = function(){
	React.render(
	  <SimpleBox />,
	  document.getElementById('react-entry')
	);
}
