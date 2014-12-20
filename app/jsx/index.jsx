var SimpleBox = require("./SimpleBox/SimpleBox");
var LittleKitty = require("./LittleKitty/LittleKitty");
var React = require("react");
var Router = require('react-router');

//var { Route, DefaultRoute, RouteHandler, Link } = Router;

var App = React.createClass({
  mixins: [ Router.State ],
  render: function () {
    return (
      <div>
        <div className="App">
          <ul>
            <li>
              <a href="#/">Index</a>
            </li>
            <li>
              <a href="#/kitty">kitty</a>
            </li>
            <li>
              <a href="#/box">Box</a>
            </li>
          </ul>
          <Router.RouteHandler/>
        </div>
      </div>
    );
  }
});

var Index = React.createClass({
  render: function () {
    return (
      <div>
        <p>Sidebar features:</p>
        <ul style={{maxWidth: '400px'}}>
          <li>User can open/close categories</li>
          <li>
            Visiting an item on first page load will automatically open
            the correct category. (Click an item, then reload the
            browser.)
          </li>
          <li>
            Navigating with forward/back buttons will open an active
            category if it is not already open. (Navigate to several
            items, close all the categories, then use back/forward
            buttons.)
          </li>
          <li>
            Only the user can close a category. (Navigating from an
            active category will not close it.)
          </li>
        </ul>
      </div>
    );
  }
});

var routes = (
  <Router.Route handler={App}>
    <Router.DefaultRoute handler={Index}/>
    <Router.Route name="box" path="box" handler={SimpleBox} />
    <Router.Route name="kitty" path="kitty" handler={LittleKitty} />
  </Router.Route>
);


module.exports = function(){
	Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
  });
};
