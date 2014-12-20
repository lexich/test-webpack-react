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
  mixins: [Router.State],
  render: function () {
    var params = this.getParams();
    return (
      <div>
        "Hello react router"
        { params.lexich }
      </div>
    );
  }
});

var NotFoundView = React.createClass({
  render: function(){
    return (
      <p>Page not found 404</p>
    );
  }
});

var routes = (
  <Router.Route handler={App}>
    <Router.DefaultRoute handler={Index}/>
    <Router.Route name="box" path="box" handler={SimpleBox} />
    <Router.Route name="kitty" path="kitty" handler={LittleKitty} />
    <Router.NotFoundRoute handler={NotFoundView} />
  </Router.Route>
);


module.exports = function(){
	Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
  });
};
