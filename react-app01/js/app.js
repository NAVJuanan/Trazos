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
    label = "h2";
    obj = {};
    message = "Hola mundo React";

    constructor(props) {
        super(props);
        this.state = {}; // las propiedades susceptibles de cambiar van aquí
    }

    render() {
        return nodeHi(
            this.label,
            this.obj,
            this.message
        );
    }
}

const domHiContainer = document.querySelector('#hiReact');
ReactDOM.render(nodeHi(HolaMundo), domHiContainer);


// new React component
const nodeCounter = React.createElement;

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 }; // las propiedades susceptibles de cambiar van aquí
    }

    render() {
        return nodeHi(
            'button',
            { onClick: () => this.setState({ counter: counter + 1 }) },
            this.counter
        );
    }
}

const domCounter = document.querySelector('#counter');
ReactDOM.render(nodeCounter(Contador), domCounter);