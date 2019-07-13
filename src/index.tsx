import React from 'preact';
import ReactDOM from 'preact';
// import render from 'preact';
import Kek, {AppProps} from './Kek';

// ReactDOM.render(<Kek/>, document.getElementById('root'));

// noinspection JSUnusedGlobalSymbols
export default function KekApp(targetElement: any, properties: AppProps) {
    // React.render((
    //     {/*<Kek {...properties}/>*/}
    // ), targetElement);
    ReactDOM.render((
        <Kek {...properties}/>
    ), targetElement);
};

