import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import logo from './logo.png'
import './App.less';

const { Header, Content } = Layout;

const Index = () => <h2>Home</h2>;
const Characters = () => <h2>Characters</h2>;
const Triggers = () => <h2>Triggers</h2>;
const Chapters = () => <h2>Chapters</h2>;
const QAs = () => <h2>Q&A</h2>;

const characters = "/characters";
const triggers = "/triggers";
const chapters = "/chapters";
const qas = "/qas";

class App extends PureComponent {
  constructor() {
    super();
    this.state = { selectedKey: [] };
    //this.handleMenuClick = this.handleMenuClick.bind(this);
    if (window.location.pathname) {
      this.state = { selectedKeys: [window.location.pathname] };
    }
  }

  handleMenuClick = (e) => {
    this.setState({ selectedKeys: e.key })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Layout className="layout">
            <Header>
              <Menu className="Header-menu" theme="dark" mode="horizontal" selectedKeys={this.state.selectedKeys} onClick={this.handleMenuClick}>
                <Link to="/"><img className="App-logo" src={logo} alt="logo"/></Link>
                <Menu.Item key={characters}><Link to={characters}><i class="material-icons">people</i> <b className="va-middle">人物</b></Link></Menu.Item>
                <Menu.Item key={triggers}><Link to={triggers}><i class="material-icons">view_week</i> <b className="va-middle">觸發</b></Link></Menu.Item>
                <Menu.Item key={chapters}><Link to={chapters}><i class="material-icons">chrome_reader_mode</i> <b className="va-middle">章節</b></Link></Menu.Item>
                <Menu.Item key={qas}><Link to={qas}><i class="material-icons">help_outline</i> <b className="va-middle">問答</b></Link></Menu.Item>
              </Menu>
            </Header>
            <Content className="Content">
              <Route path="/" exact component={Index} />
              <Route path={characters} component={Characters} />
              <Route path={triggers} component={Triggers} />
              <Route path={chapters} component={Chapters} />
              <Route path={qas} component={QAs} />
            </Content>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
