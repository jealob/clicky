import React from "react";
import { NavBar, Header, Main, Footer } from "./Container";
import imageList from "../images.json";
import ImageCard from "./ImageCard";

class Status extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        images: imageList,
        unClickedImages: imageList,
        score: 0,
        topScore: 0,
        gameStatus: "Click an image to start a game",
    };

    // Updates top score
    handleTopScore = () => {
        if (this.state.score >= this.state.topScore) {
            this.setState({
                topScore: this.state.score + 1,
            })
        }
    }

    // Updates and restart game for incorrect clicks
    handleIncorrect = () => {
        this.setState({
            score: 0,
            unClickedImages: imageList,
            gameStatus: "You guessed Incorrectly!",
            effect: "incorrect"
        });
    }

    // Updates for correct clicks
    handleCorrect = () => {
        this.setState({
            score: this.state.score + 1,
            gameStatus: "You guessed Correctly!",
            effect: "correct"
        });
    }

    // Filter out the clicked image from list of unclicked images
    filterImage = (id) => {
        const newImages = this.state.unClickedImages.filter(image => image.id !== id);
        this.setState({ unClickedImages: newImages });
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
        this.filterImage(id);
        // Check if clicked image exist on current list of unclicked images 
        (this.state.unClickedImages.filter(image => image.id === id).length === 0) ? this.handleIncorrect() : this.handleCorrect();
        this.handleTopScore();
    }

    render() {
        // Shuffle image card as game loads
        this.shuffleImages();
        return (
            <div>
                <NavBar handleWinner={this.handleWinner} navState={this.state} />
                <Header />
                <Main>
                    {this.state.images.map(image => (
                        <ImageCard
                            clickImageEvent={this.clickImageEvent}
                            key={image.id}
                            image={image}
                        />
                    ))}
                </Main>
                <Footer />
            </div>
        );
    }
}
export default Status;