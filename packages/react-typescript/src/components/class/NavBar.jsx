
import { Component } from "react";

import logo from '../../assets/FE-Dev-React-EcoSystem.png';
import LogInButton from "../functional/LogInButton"
import LogOutButton from "../functional/LogOutButton"

class NavBar extends Component {
    constructor(props) {
      super(props);
      this.state = { isLoggedIn: false };
    }

    handleLogIn = () => {
        this.setState({ isLoggedIn: true });
      };
    
      handleLogOut = () => {
        this.setState({ isLoggedIn: false });
      };   

      render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
          button = <LogOutButton onClick={this.handleLogOut} />;
        } else {
          button = <LogInButton onClick={this.handleLogIn} />;
        }
  return (
    <div className="navigation">
      <div><img src={logo} alt="logo" />   <h1>React, TypeScript & Testing </h1></div>
            
{isLoggedIn ? (
          <LogOutButton onClick={this.handleLogOut} />
        ) : (
          <LogInButton onClick={this.handleLogIn} />
        )}
  
    </div>
  );
}
}
export default NavBar;