import React from "react";
import "./Container.css";


export const NavBar = (props) => (
    <nav className="navbar">
        {/* <div className="container-fluid"> */}
        <ul>
            <li className="brand">
                <a href="/">{props.children}
                    {/* <img alt="React" src="./assets/images/react.png"></img> */}
                </a>
            </li>
            <li >
                {props.children}
            </li>
            <li>
                {props.children}
            </li>
        </ul>
        {/* </div> */}
    </nav>
);
export const Header = (props) => (
    <header className="header">
        <h1> {props.heading}</h1>
        <h2>{props.children}</h2>
    </header >
);

export const Main = (props) => (
    <main className="container">
   
    </main>
);

export const Footer = (props) => (
    <footer className="footer">
        <div className="bottom">
            {props.children}
        </div>
    </footer >

);