import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import HooksHome from "./components/common/HooksHome";
import NavBar from "./components/common/NavBar";
import HooksTableOfContents from "./components/common/HooksTableOfContents";
import UseStateHome from "./components/useState/UseStateHome";
import HooksUseEffectComponent from "./components/useEffect/HooksUseEffectComponent";

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
            <Route path='/use-effect' component={HooksUseEffectComponent} />
          </div>
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
