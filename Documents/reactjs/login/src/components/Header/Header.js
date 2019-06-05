import React, {Component} from 'react'; 
import './Header.css';
 import '../../styles/foundation.min.css';

class Header extends Component{
  render(){
    return(
      <div><div className="callout primary">
      <div className="row column">
     <h2> {this.props.name} Project </h2>
      </div>
      </div></div>
    )
  }
}

export default Header;
