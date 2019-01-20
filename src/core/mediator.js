/* eslint-disable no-bitwise, no-magic-numbers */
export class Mediator {
    /**
     * Mediator class
     */
    constructor() {
        window.__HandleEvent__ = this.exposeHandler();
    }

    /**
     * Expose global synthetic events handler
     * @returns {Function}
     */
    exposeHandler() {
        return (eventId) => {
            window.dispatchEvent(new CustomEvent(eventId));
        };
    }

    /**
     * Register handler
     * @param {Function} handler
     * @returns {string}
     */
    bind(handler) {
        //UUID v4
        const eventId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8);

            return v.toString(16);
        });

        window.addEventListener(eventId, handler);

        return `__HandleEvent__('${eventId}')`;
    }
}
