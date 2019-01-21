import {Application, Store} from 'core';
import {IndexLayout} from 'layouts';
import reducer from 'reducers';
import modules from 'modules';

const store = new Store(reducer, modules),
    application = new Application(store);

application.render(
    () => IndexLayout.createComponent(),
    document.getElementById('root')
);
