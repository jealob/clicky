import React from "react";
import { NavBar, Header, Main, Footer } from "./components/Container";

class Status extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        score: 0,
        topScore: 0,
        gameStatus: "Click an image to start a game"
    };

    handleScore = () => {
        this.setState({
            score: this.state.score + 1,
        })
    }
    handleTopScore = () => {
        this.setState({
            topScore: this.state.score,
        })
    }
    handleGameStatus = () => {
        this.setState({
            topScore: this.state.gamesStatus,
        })
    }

    render() {
        return (
            <div>
                <NavBar>
                    {/* <Title>Clicky Game</Title>
                    <Status>Click an image to begin!</Status>
                    <Score></Score> */}
                    Clicky Game
                    </NavBar>
                <Header heading="Clicky Game!">Click on an image to earn points, but don't click on any more than once!</Header>
                <Main></Main>
                <Footer>
                    Clicky Game!<img alt="React" src="./assets/images/react.png"></img>
                </Footer>
            </div>
        );
    }
}
// (this.state.score > this.state.topScore) ? this.state.topScore + 1;
export default Status