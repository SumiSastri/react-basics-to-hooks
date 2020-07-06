import React, { Component } from "react";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import PropTypes from "prop-types";

export class NavBar extends Component {
  static defaultProps = {
    title: "React Tutorials",
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <IconContext.Provider value={{ color: "black", size: "2rem" }}>
        <nav>
          <h1 className="navbar bg-primary">
            <FaReact /> {this.props.title}
            <FaReact /> React Tutorial: Hooks
          </h1>
        </nav>
      </IconContext.Provider>
    );
  }
}

export default NavBar;
