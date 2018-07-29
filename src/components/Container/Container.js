import React from "react";
import "./Container.css";

export const NavBar = (props) => (
    <nav className="navbar">
        <ul>
            <li className="brand"><a href="/">Clicky Game</a></li>
            <li className={props.navState.effect || "normal"}>{props.navState.gameStatus}</li>
            <li>Score: {props.navState.score} | Top Score: {props.navState.topScore}</li>
        </ul>
    </nav>
);

export const Header = () => (
    <header className="header">
        <h1> Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
    </header >
);

export const Main = (props) => (
    <main className={props.effect || "container"}>
        {props.children}
    </main >
);

export const Footer = () => (
    <footer className="footer">
        <div className="bottom">
            &copy; Clicky Game! - Powered by React
        </div>
    </footer >
);