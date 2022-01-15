import React from "react";
import ReactDOM from "react-dom";

import Footer from 'home/Footer'

const Header = React.lazy(() => import("home/Header"))

import "./index.scss";
import SafeComponent from "./SafeComponent";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <React.Suspense fallback={<div>Loading</div>}>
        <Header />
      </React.Suspense>
    </SafeComponent>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
