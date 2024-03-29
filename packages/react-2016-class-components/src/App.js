import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./functionalComponents/FunctionalComponentWithNamedExport";
import TableOfContentsBar from "./siteNavs/TableOfContentsBar";
import ReactComponents from "./functionalComponents/ReactComponents";
import FunctionalComponent from "./functionalComponents/FunctionalComponent";
import ClassComponents from "./components/ClassComponents";
import Counter from "./classComponents/Counter";
import FunctionalComponentClickEvents from "./eventComponents/FunctionComponentClickEvents";
import FourWaysToConditionallyRender from "./conditionalRendering/FourWaysToConditionallyRender";
import ListOfLists from "./listComponents/ListOfLists";
import Form from "./components/FormComponent";
import PropDrilling from "./propDrilling/PropDrilling";
import GetAndPostData from "./restApiCalls/GetAndPostData";
import NavBar from "./siteNavs/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Fragment>
          <div className='App'>
            <NavBar title='React 2016 Class Components' icon />
            <Route exact path='/' component={Home} />
            <TableOfContentsBar />
            <Route path='/components' component={ReactComponents} />
            <Route
              path='/functional-components'
              component={FunctionalComponent}
            />
            <Route path='/class-components' component={ClassComponents} />
            <Route path='/counter-demo' component={Counter} />
            <Route
              path='/event-handling'
              component={FunctionalComponentClickEvents}
            />
            <Route
              path='/conditional-rendering'
              component={FourWaysToConditionallyRender}
            />
            <Route path='/map-and-render' component={ListOfLists} />
            <Route path='/forms' component={Form} />
            <Route path='/prop-drilling' component={PropDrilling} />
            <Route path='/api-calls-with-axios' component={GetAndPostData} />
          </div>
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
