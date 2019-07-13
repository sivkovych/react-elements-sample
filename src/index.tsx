import {h, render} from 'preact';
import Form from './components/Form';
import {FormSettings} from "./model/FormSettings";

// noinspection JSUnusedGlobalSymbols
export default function renderForm(targetElement: Element, settings: FormSettings): void {
    render((
        <Form {...settings}/>
    ), targetElement);
};
