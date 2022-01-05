import { Component } from "react";

import logo from '../../assets/FE-Dev-React-EcoSystem.png';

import LoginButton from "../functional/LoginButton"
import LoginWelcome from "../functional/LoginWelcome"
import LogOutButton from "../functional/LogOutButton"
import LogOutGoodbye from "../functional/LogOutGoodbye"

interface Props {
    children?: React.ReactNode;
}

interface State {
    isLoggedIn: boolean;
}

class NavBar extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    handleLogin = () => {
        this.setState({ isLoggedIn: true });
    };

    handleLogOut = () => {
        this.setState({ isLoggedIn: false });
    };

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LoginButton onClick={this.handleLogOut} />;
        } else {
            button = <LogOutButton onClick={this.handleLogin} />;
        }
        return (
            <div className="navigation">
                {/* React fragment use */}
                <><img src={logo} alt="logo" />   <h1>React, TypeScript & Testing </h1></>
                {isLoggedIn ? (
                    <div>
                        <LoginButton onClick={this.handleLogOut} />
                        <LoginWelcome title="Mr." name="Chips" welcome="You are logged in" />
                    </div>
                ) : (
                    <div>

                        <LogOutButton onClick={this.handleLogin} />
                        <LogOutGoodbye title="Mr." name="Chips" goodbye="You are logged out, click to login" />



                    </div>
                )}

            </div>
        );
    }
}
export default NavBar;