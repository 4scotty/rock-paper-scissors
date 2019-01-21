import './style.scss';
import {Component} from 'core';

export class Button extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.bind(this.props.onClick);
    }

    render() {
        return `<button onclick="${this.onClick}" class="btn">${this.props.title}</button>`;
    }
}
