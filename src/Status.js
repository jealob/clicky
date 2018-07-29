import React from "react";
import { NavBar, Header, Main, Footer } from "./components/Container";
import imageList from "./images.json";
import ImageCard from "./components/ImageCard";

class Status extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        images: imageList,
        unClickedImages: imageList,
        score: 0,
        topScore: 0,
        gameStatus: "Click an image to start a game"
    };

    handleTopScore = () => {
        if (this.state.score > this.state.topScore) {
            this.setState({
                topScore: this.state.score,
            })
        }
    }

    handleIncorrect = () => {
        this.setState({
            score: 0,
            unClickedImages: imageList,
            gameStatus: "You guessed Incorrectly!"
        });
    }

    handleCorrect = () => {
        this.setState({
            score: this.state.score + 1,
            gameStatus: "You guessed Correctly!",
        });
    }

    // Filter out the clicked image from list of unclicked images
    filterImage = (id) => {
        const newImages = this.state.unClickedImages.filter(image => image.id !== id);
        this.setState({ unClickedImages: newImages });
    }

    // Check if clicked image exist on current list of unclicked images 
    checkImage = (id) => {
        (this.state.unClickedImages.filter(image => image.id === id).length === 0) ? this.handleIncorrect() : this.handleCorrect();
    }

    // Shuffle the images on board
    shuffleImages = () => {
        for (let i = this.state.images.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.state.images[i], this.state.images[j]] = [this.state.images[j], this.state.images[i]];
        }
    }

    // The game logic
    clickImageEvent = (id) => {
        this.handleTopScore();
        this.filterImage(id);
        this.checkImage(id);
        this.shuffleImages();
    }

    render() {
        return (
            <div>
                <NavBar
                    handleTopScore={this.handleTopScore}
                    state={this.state.gameStatus}
                    score={this.state.score}
                    topScore={this.state.topScore}>
                    Clicky Game
                    </NavBar>
                <Header heading="Clicky Game!">Click on an image to earn points, but don't click on any more than once!</Header>
                <Main>
                    {this.state.images.map(image => (
                        <ImageCard
                            clickImageEvent={this.clickImageEvent}
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