import React, {Component} from 'react';
import logo from './logo.svg';
import './styles/foundation.min.css';
import Header from './components/Header/Header';
import MobileHeader from './components/MobileHeader/MobileHeader';
import Footer from './components/Footer/Footer';
import Welcome from './components/Welcome/Welcome';
import NotFound from './components/NotFound/NotFound';
import './styles/custom.css';
import Routes from './routes';

class App extends Component {

    constructor(props){
        super(props);
        this.state ={
            appName: 'Login'
        }
    }

    render(){
  return (
    <div className="off-canvas-wrapper">
    <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>

    <div className="off-canvas-content" data-off-canvas-content>
    <MobileHeader name={this.state.appName}/>
    <Header name={this.state.appName}/>
    <Routes/>
    <hr />
    <Footer/>
    </div>
    </div>
    </div>
    );
}
}

export default App;