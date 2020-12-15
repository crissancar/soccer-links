import { Fragment } from "react";

import Header from "./components/Header";
import Body from "./components/Body";

import "./App.scss";
import Menu from "./components/Menu";

function App() {
  return (
    <Fragment>
        <Menu />
        <Body />
    </Fragment>
  );
}

export default App;
