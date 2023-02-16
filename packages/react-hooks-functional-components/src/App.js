import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import NavBar from "./components/common/NavBar";
import HooksTableOfContents from "./components/common/HooksTableOfContents";
import HooksHome from "./components/common/HooksHome";
import UseStateHome from "./components/useState/UseStateHome";
import UseEffectHome from "./components/useEffect/UseEffectHome";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Fragment>
          <div className='App'>
            <NavBar
              title='React-Hooks Tutorial: Refactors Class Components'
              icon
            />
            <Route path='/' component={HooksHome} />
            <Route path='/' component={HooksTableOfContents} />
            <Route path='/use-state' component={UseStateHome} />
            <Route path='/use-effect' component={UseEffectHome} />
          </div>
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
