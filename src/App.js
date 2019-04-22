import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch, Link
} from 'react-router-dom'
import Private from './private';
import Public  from './public';
import Auth    from './auth';
import Home    from './home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { auth: false }
  }

  render() {
    return (
      <div>
        <div>auth: {this.state.auth ? "Logged in" : "Not logged in"}</div>

        <Router>
          <ul>
            <li><Link to="/public">/public</Link></li>
            <li><Link to="/private">/private</Link> (Required log in)</li>
          </ul>

          <Switch>
            <Route exact path="/public" component={Public} />      {/* 認証不要ページはSwithとAuthの間に入れる */}
            <Auth auth={this.state.auth}>
              <Switch>
                <Route exact path="/private" component={Private} /> {/* 認証必要ページはAuth->Switch配下に入れる */}
                <Route component={Home} />                          {/* this.state.auth === true、かつ、マッチするパスがない場合のページはここに入れる */}
              </Switch>
            </Auth>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
