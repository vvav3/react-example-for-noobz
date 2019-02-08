import React, { Component } from "react";

import "./App.css";
import AppHeader from "./components/AppHeader";
import SecretToLife from "./components/SecretToLife";

class App extends Component {
  render() {
    const links = [
      { key: "home", path: "/", text: "Home" },
      { key: "about", path: "/about", text: "About" },
      { key: "faq", path: "/faq", text: "FAQ" }
    ];

    return (
      <div className="App">
        <AppHeader title="My App" links={links} />
        <main>
          <SecretToLife />
        </main>
      </div>
    );
  }
}

export default App;
