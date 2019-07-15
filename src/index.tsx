import {h, render} from "preact";
import Form from "./components/Form";
import {IFormSettings} from "./model/IFormSettings";

// noinspection JSUnusedGlobalSymbols
export default function renderMe(settings: IFormSettings | undefined | null): void {
    if (typeof settings !== "object" || settings === null) {
        console.warn("Configuration is not defined.");
        return;
    }
    const rootSelector = settings.rootSelector;
    if (typeof rootSelector !== "string") {
        console.warn("Mandatory configuration parameter [rootSelector] is empty.");
        return;
    }
    const $root: Element | null = document.querySelector(rootSelector);
    if ($root === null) {
        console.warn("Could not find root element by [rootSelector] configuration parameter.");
        return;
    }
    render(<Form {...settings}/>, $root);
}
