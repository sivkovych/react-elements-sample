import {h, render} from "preact";
import Form from "./components/Form";
import {IFormProperties} from "./model/form/IFormProperties";

// noinspection JSUnusedGlobalSymbols
export default function(properties: IFormProperties | undefined | null): void {
    if (typeof properties !== "object" || properties === null) {
        console.warn("Configuration is not defined.");
        return;
    }
    const rootSelector = properties.rootSelector || "";
    const $root: Element | null = document.querySelector(rootSelector);
    if ($root === null) {
        console.warn("Could not find root element by [rootSelector] configuration parameter.");
        return;
    }
    render(<Form {...properties}/>, $root);
}
