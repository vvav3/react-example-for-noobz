import React from "react";

const AppHeaderFunc = props => {
  const { title, links = [] } = props;

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
};

export default AppHeaderFunc;
