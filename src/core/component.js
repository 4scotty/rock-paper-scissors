import {Container} from './container';

export class Component {
    /**
     * Basic component class
     * @param {Object} props
     */
    constructor(props) {
        this.props = props || {};
    }

    /**
     * Render method
     * @abstract
     * @returns {string}
     */
    render() {
        return '';
    }

    /**
     * Factory method for mapping state to props
     * @abstract
     * @returns {Object}
     */
    static mapStateToProps() {
        return {};
    }

    /**
     * Factory method for mapping dispatch to props
     * @abstract
     * @returns {Object}
     */
    static mapDispatchToProps() {
        return {};
    }

    /**
     * Factory method
     * @param {*} props
     * @returns {string}
     */
    static createComponent(props = {}) {
        const store = Container.get('store'),
            ComponentClass = this, //eslint-disable-line
            component = new ComponentClass({
                ...this.mapStateToProps(store.getStore()),
                ...this.mapDispatchToProps(store.getDispatch()),
                ...props || {}
            });
        console.log(store, this.mapStateToProps(store.getStore()));

        return component.render();
    }
}
