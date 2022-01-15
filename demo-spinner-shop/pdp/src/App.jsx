import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Footer from 'home/Footer'
import { PDPContent } from './PDPContent'

const Header = React.lazy(() => import("home/Header"))

import "./index.scss";
import SafeComponent from "./SafeComponent";

const App = () => (
  <Router>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <React.Suspense fallback={<div>Loading</div>}>
          <Header />
        </React.Suspense>
      </SafeComponent>

      <Routes>
        <Route path="/products/:id" element={<PDPContent />  } />
      </Routes>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
