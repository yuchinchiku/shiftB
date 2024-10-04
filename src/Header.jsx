import React from "react";

const Header = ({ src }) => (
  <header className="header">
    <nav className="nav">
      <ul className="navList">
        { src.map((elem) => {
          return (
            <li className="navList__item" key={elem.id}>
              <a className="navList__link" href={`${elem.href}`}>{elem.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  </header>
);

export default Header;