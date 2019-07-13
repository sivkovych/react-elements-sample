import React from 'preact';
import ReactDOM from 'preact';
import Kek, {AppProps} from './Kek';

// noinspection JSUnusedGlobalSymbols
export default function KekApp(targetElement: HTMLElement, properties: AppProps) {
    ReactDOM.render((
        <Kek {...properties}/>
    ), targetElement);
};

