import {Component, ComponentChild, h} from "preact";
import {IFormSettings} from "../model/IFormSettings";
import {IFormState} from "../model/IFormState";

export default class Form extends Component<IFormSettings, IFormState> {
    constructor(settings: IFormSettings) {
        super(settings);
        this.state = {
            id: Math.round(Math.random() * Math.pow(10, 6)),
            title: "General Form"
        };
        console.log("### [Form::constructor]");
    }

    public componentWillMount(): void {
        console.log("### [Form::componentWillMount]");
    }

    public componentWillUnmount(): void {
        console.log("### [Form::componentWillUnmount]");
    }

    public getChildContext(): object {
        console.log("### [Form::getChildContext]");
        return {
            i_am: "child_context"
        };
    }

    public componentWillReceiveProps(): void {
        console.log("### [Form::componentWillReceiveProps]: arguments = ", arguments);
    }

    public shouldComponentUpdate(): boolean {
        console.log("### [Form::shouldComponentUpdate]: arguments = ", arguments);
        return true;
    }

    public componentDidUpdate(): void {
        console.log("### [Form::componentDidUpdate]: arguments = ", arguments);
    }

    public componentWillUpdate(): void {
        console.log("### [Form::componentWillUpdate]: arguments = ", arguments);
    }

    public componentDidMount(): void {
        console.log("### [Form::componentDidMount]");
        setTimeout(() => {
            this.setState({
                message: "React's componentDidMount worked as expected"
            });
        }, 2000);
    }

    public render(settings: IFormSettings, state: IFormState): ComponentChild {
        console.log("### [Form::render]");
        return (
            <h1>
                settings: {JSON.stringify(settings, null, "\t")},
                state: {JSON.stringify(state, null, "\t")}
            </h1>
        );
    }
}
