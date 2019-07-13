import {h, render} from "preact";
import Form from "./components/Form";
import {IFormSettings} from "./model/IFormSettings";

// noinspection JSUnusedGlobalSymbols
export default function renderForm(targetElement: Element, settings: IFormSettings): void {
    render((
        <Form {...settings}/>
    ), targetElement);
}
