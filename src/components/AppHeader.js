import React, { Component as FancyName } from "react";

class AppHeader extends FancyName {
  componentDidMount() {
    console.log("Header Mounted");
  }

  render() {
    const { title, links = [] } = this.props;

    return (
      <header className="app-header">
        <div className="title">
          <a className="link" href="/">
            {title}
          </a>
        </div>
        {links.map(link => (
          <a className="link" href={link.path} key={link.key}>
            {link.text}
          </a>
        ))}
      </header>
    );
  }
}

export default AppHeader;
