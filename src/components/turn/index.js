import './style.scss';
import {Component} from 'core';

export class Turn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return `<i>${this.props.term || ':)'}</i>`;
    }
}
