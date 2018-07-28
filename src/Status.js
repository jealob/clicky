import React from "react";
import { NavBar, Header, Main, Footer } from "./components/Container";
import images from "./images.json";
import ImageCard from "./components/ImageCard"
class Status extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        images,
        score: 0,
        topScore: 0,
        imageReamin: images,
        gameStatus: "Click an image to start a game"
    };

    handleScore = () => {
        this.setState({
            score: this.state.score + 1
        })
    }
    handleTopScore = () => {
        if (this.state.score > this.state.topScore) {
            this.setState({
                topScore: this.state.score,
            })
        }
    }
    handleGameStatus = () => {
        if (true) {
            this.setState({
                gamesStatus: "You guessed Correctly!",
            })
        }
        else {
            this.setState({
                gamesStatus: "You guessed Incorrectly!",
            })
        }
    }
    removeImage = (id) => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const imageRemain = this.state.imageReamin.filter(image => image.id !== id);
        // Set this.state.friends equal to the new friends array
        this.setState({ imageRemain });
    };

    shuffleImages = () => {
        for (let i = this.state.images.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.state.images[i], this.state.images[j]] = [this.state.images[j], this.state.images[i]];
        }
        this.setState({ images })
    }

    render() {
        return (
            <div>
                <NavBar
                    state={this.state.gameStatus}
                    score={this.state.score}
                    topScore={this.state.topScore}
                    onClick={this.handleScore}
                    handleTopScore={this.handleTopScore}
                    handleGameStatus={this.handleGameStatus}>
                    Clicky Game
                    </NavBar>
                <Header heading="Clicky Game!">Click on an image to earn points, but don't click on any more than once!</Header>
                <Main>
                    {this.state.images.map(image => (
                        <ImageCard
                            removeImage={this.removeImage}
                            shuffleImages={this.shuffleImages}
                            key={image.id}
                            id={image.id}
                            image={image.image}
                        />
                    ))}
                </Main>
                <Footer>
                    Clicky Game!<img alt="React" src="./assets/images/react.png"></img>
                </Footer>
            </div>
        );
    }
}

export default Status