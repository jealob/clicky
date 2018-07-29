import React from "react";
import "./Container.css";


export const NavBar = (props) => (
    <nav className="navbar" onChange={props.handleTopScore()}>
        <ul>
            <li className="brand">
                <a href="/">{props.children}</a>
            </li>
            <li className={props.effect || "normal"}>
                {props.state}
            </li>
            <li>
                Score: {props.score} | Top Score: {props.topScore}
            </li>
        </ul>
    </nav>
);

export const Header = (props) => (
    <header className="header">
        <h1> {props.heading}</h1>
        <h2>{props.children}</h2>
    </header >
);

export const Main = (props) => (
    <main className={props.effect || "container" }>
        { props.children }
    </main >
);

export const Footer = (props) => (
    <footer className="footer">
        <div className="bottom">
            {props.children}
        </div>
    </footer >

);