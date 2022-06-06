import React from "react";

import TopOfFunctionalPropTree from "./propTreeFunctionalComponents/TopOfFunctionalPropTree";
import HigherOrderComponents from "./higherOrderComponents/HigherOrderComponents";
import RenderPropsComponentTwo from "./renderProps/RenderPropsComponentTwo";
import ToggleNormalProps from "./renderProps/ToggleNormalProps";
import ContextComponent from "./contextAPI/ContextComponent";
import ToggleRenderProps from "./renderProps/ToggleRenderProps";
import FindGitHubUser from "../iterations/FindGitHubUser";
import Main from "./contextAPI/context-mini-project/Main";

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
            I am a standard PROPS.CHILDREN toggle - can't be reused
          </h2>
        </ToggleNormalProps>
        <ToggleRenderProps
          render={({ on, handleToggle }) => (
            <div>
              {on && (
                <h3>
                  I am a renderProps, I behave just like a mini-functional
                  component and can be re-used
                </h3>
              )}
              <button className="btn-dark" onClick={handleToggle}>
                DEMO: I am a render props button click me!
              </button>
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
              <button onClick={handleToggle} className="btn-pink">
                DEMO: Same component but now I am a nav button click me
              </button>
              <ToggleRenderProps
                render={({ on, handleToggle }) => (
                  <div>
                    {on && <FindGitHubUser />}
                    <button onClick={handleToggle} className="btn-blue">
                      DEMO: Same component I can import another component as
                      well - click me
                    </button>
                  </div>
                )}
              />
            </div>
          )}
        />
      </div>
      <ContextComponent />
      <Main />
    </div>
  );
}

export default PropDrilling;
