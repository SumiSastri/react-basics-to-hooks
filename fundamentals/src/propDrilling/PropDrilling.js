import React from "react";

import TopOfFunctionalPropTree from "./propTreeFunctionalComponents/TopOfFunctionalPropTree";
import HigherOrderComponents from "./higherOrderComponents/HigherOrderComponents";
import RenderPropsComponentTwo from "./renderProps/RenderPropsComponentTwo";
import ToggleNormalProps from "./renderProps/ToggleNormalProps";
import ContextComponent from "./contextAPI/ContextComponent";
import ToggleRenderProps from "./renderProps/ToggleRenderProps";
import FindGitHubUser from "../iterations/FindGitHubUser";

function PropDrilling() {
  return (
    <div>
      <h4>What is prop-drilling?</h4>
      <p>
        With the uni-directional flow of data with React, props need to be
        passed down from parent to child. Here we show 3 child components and 6
        grandchild components all nested one within the other. This makes use of
        the modular nature of React components. However, to pass props from one
        component to another they have to be manually passed to each component
        to reach the actual component that needs them. This manual drilling down
        into the prop-tree to pass props is demo'd below see GrandChild2. The
        challenge of prop-drilling has led to the introduction of Hooks in 2016.
      </p>
      <TopOfFunctionalPropTree username="user1" />
      <HigherOrderComponents />
      <div className="card">
        <RenderPropsComponentTwo />
        <ToggleNormalProps>
          <h2 className="text-success">
            I am a standard PROPS.CHILDREN toggle
          </h2>
        </ToggleNormalProps>
        <ToggleRenderProps
          render={({ on, handleToggle }) => (
            <div>
              {on && <h3>I am a renderProps mini-functional component</h3>}
              <p>
                The render method is written as a prop of the child component
                and works like a mini-functional component when imported into
                the parent component. It follows the methods as props design
                pattern.
              </p>
              <button onClick={handleToggle}>Click to show</button>
            </div>
          )}
        />
        <ToggleRenderProps
          render={({ on, handleToggle }) => (
            <div>
              {on && (
                <nav>
                  <li>Home</li>
                  <li>About</li>
                </nav>
              )}
              <button
                onClick={handleToggle}
                style={{
                  display: "inline-block",
                  color: "black",
                  backgroundColor: "pink",
                  padding: "0.4rem 1.3rem",
                  margin: "0.5rem",
                  fontSize: "1rem",
                  border: "none",
                  cursor: "pointer",
                  marginRight: "0.5rem",
                  transition: "opacity 0.2s ease-in",
                  outline: "none",
                }}
              >
                I am now a nav button click me
              </button>
              <ToggleRenderProps
                render={({ on, handleToggle }) => (
                  <div>
                    {on && <FindGitHubUser />}
                    <button
                      onClick={handleToggle}
                      style={{
                        display: "inline-block",
                        color: "white",
                        backgroundColor: "blue",
                        padding: "0.4rem 1.3rem",
                        margin: "0.5rem",
                        fontSize: "1rem",
                        border: "none",
                        cursor: "pointer",
                        marginRight: "0.5rem",
                        transition: "opacity 0.2s ease-in",
                        outline: "none",
                      }}
                    >
                      I can import another component as well - click to show
                    </button>
                  </div>
                )}
              />
            </div>
          )}
        />
      </div>
      <ContextComponent />
    </div>
  );
}

export default PropDrilling;
