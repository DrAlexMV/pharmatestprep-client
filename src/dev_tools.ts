import * as ReactDOM from 'react-dom';


export const setUpDevTools = (window: any, module: any, mountNode: string) => {
    if (window.devToolsExtension) {
        window.devToolsExtension.open();
    }
    if (module.hot) {
        module.hot.accept();
    }
};