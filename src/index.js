import {Application, Store} from 'core';
import {IndexLayout} from 'layouts';
import reducer from 'reducers';

const store = new Store(reducer, []),
    application = new Application(store);

application.render(
    () => IndexLayout.createComponent(),
    document.getElementById('root')
);
