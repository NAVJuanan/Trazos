"use strict";

const nodeLike = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return nodeLike(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const domContainer = document.querySelector('#likeReact');
ReactDOM.render(nodeLike(LikeButton), domContainer);


// new React component
const nodeHi = React.createElement;

class HolaMundo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return nodeHi(
            'h2',
            {},
            'Hola mundo React'
        );
    }
}

const domHiContainer = document.querySelector('#hiReact');
ReactDOM.render(nodeHi(HolaMundo), domHiContainer);