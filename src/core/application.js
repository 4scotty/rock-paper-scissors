import {Container} from './container';
import {Mediator} from './mediator';

export class Application {
    /**
     * Application instance
     * @param {Store} store
     */
    constructor(store) {
        this.store = store;
        this.store.connect(() => this.update());

        Container.set('store', this.store);
        Container.set('mediator', new Mediator());
    }

    /**
     * Render function
     * @param {Function} renderer
     * @param {HTMLElement} node
     */
    render(renderer, node) {
        this.renderer = renderer;
        this.node = node;
        this.update();
    }

    /**
     * Update markup
     */
    update() {
        this.node.innerHTML = this.renderer();
    }
}
