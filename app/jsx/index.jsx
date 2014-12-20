var SimpleBox = require("./SimpleBox/SimpleBox");
var LittleKitty = require("./LittleKitty/LittleKitty");
var React = require("react");
var Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;


var ReactBootstrap = require('react-bootstrap')
  , Nav = ReactBootstrap.Nav;

var ReactRouterBootstrap = require('react-router-bootstrap')
  , NavItemLink = ReactRouterBootstrap.NavItemLink
  , ButtonLink = ReactRouterBootstrap.ButtonLink;

require("jquery");

var App = React.createClass({
  render: function () {
    return (
      <div className="App">
        <Nav>
          <NavItemLink to="box" someparam="1">Box</NavItemLink>
          <NavItemLink to="kitty">Kitty</NavItemLink>
        </Nav>
        <Router.RouteHandler />
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

var Pages = React.createClass({
  render: function(){
    return (
      <div className="Pages">
        CustomPage
        <Router.RouteHandler />
      </div>
    );
  }
})

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
    <Router.Route name="pages" path="pages" handler={Pages}>
      <Router.Route name="box" path="box" handler={SimpleBox} />
      <Router.Route name="kitty" path="kitty" handler={LittleKitty} />
      <Router.Redirect from="cat" to="kitty" />
      <Router.NotFoundRoute handler={NotFoundView} />
    </Router.Route>
    <Router.NotFoundRoute handler={NotFoundView} />
  </Router.Route>
);


module.exports = function(){
	Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
  });
};
