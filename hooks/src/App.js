import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import HooksHome from "./components/common/HooksHome";
import NavBar from "./components/common/NavBar";
import HooksTableOfContents from "./components/common/HooksTableOfContents";
import { ClassCounter } from "./components/useState/ClassCounter";
import HooksUseEffectComponent from "./components/useEffect/HooksUseEffectComponent";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Fragment>
          <div className="App">
            <NavBar
              title="React-Hooks Tutorial: Refactors Class Components"
              icon
            />
            <Route path="/" component={HooksHome} />
            <Route path="/" component={HooksTableOfContents} />
            <Route path="/use-state" component={ClassCounter} />
            <Route path="/use-effect" component={HooksUseEffectComponent} />
          </div>
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
