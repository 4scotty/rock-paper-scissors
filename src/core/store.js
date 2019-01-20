export class Store {
    /**
     * Store object
     * @param {Object} reducer
     * @param {Array} middleware
     * @param {Object} store
     */
    constructor(reducer, middleware, store = {}) {
        this.reducer = reducer;
        this.middleware = middleware;
        this.store = store;
        this.cb = () => {};

        this.processMiddleware(this.actionInit());
        this.processReducers(this.actionInit());
    }

    /**
     * Connect update function
     * @param {Function} cb
     */
    connect(cb) {
        this.cb = cb;
    }

    /**
     * Getter store
     * @returns {Object}
     */
    getStore() {
        return this.store;
    }

    /**
     * Getter dispatch
     * @returns {Function}
     */
    getDispatch() {
        return (action) => {
            this.processMiddleware(action);
            this.processReducers(action);
        };
    }

    /**
     * Init action-creator
     * @returns {{type: string}}
     */
    actionInit() {
        return {
            type: '@@STORE/INIT'
        };
    }

    /**
     * Process middleware
     * @param {Object} action
     */
    processMiddleware(action) {
        this.middleware.forEach((middleware) => middleware(this.getStore())(this.getDispatch())(action));
    }

    /**
     * Process reducers
     * @param {Object} action
     */
    processReducers(action) {
        Object.keys(this.reducer).forEach((key) => this.setState(key, this.reducer[key](this.getStore()[key], action)));
    }

    /**
     * Update state
     * @param {string} key
     * @param {Object} state
     */
    setState(key, state) {
        if (state && state !== this.store[key]) {
            this.store[key] = state;
            this.cb();
        }
    }
}
