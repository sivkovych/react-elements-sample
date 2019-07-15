import {Component, ComponentChild, h} from "preact";
import {IFormSettings} from "../model/IFormSettings";
import {IFormState} from "../model/IFormState";

export default class Form extends Component<IFormSettings, IFormState> {
    constructor(settings: IFormSettings) {
        super(settings);
        this.state = {
            age: settings.age,
            name: settings.name
        };
        console.log("From [Form::constructor]");
    }

    public componentWillMount(): void {
        console.log("From [Form::componentWillMount]");
    }

    public componentWillUnmount(): void {
        console.log("From [Form::componentWillMount]");
    }

    public getChildContext(): object {
        console.log("From [Form::componentWillMount]");
        return {
            i_am: "child_context"
        };
    }

    public componentWillReceiveProps(): void {
        console.log("From [Form::componentWillMount]");
    }

    public shouldComponentUpdate(): boolean {
        console.log("From [Form::componentWillMount]");
        return true;
    }

    public componentDidUpdate(): void {
        console.log("From [Form::componentDidUpdate]");
    }

    public componentWillUpdate(): void {
        console.log("From [Form::componentWillUpdate]");
    }

    public componentDidMount(): void {
        console.log("From [Form::componentDidMount]");
        setTimeout(() => {
            this.setState({
                name: "React's componentDidMount worked as expected"
            });
        }, 2000);
    }

    public render(settings: IFormSettings, state: IFormState): ComponentChild {
        console.log("From [Form::render]");
        return (
            <h1>
                settings: {JSON.stringify(settings, null, "\t")},
                state: {JSON.stringify(state, null, "\t")}
            </h1>
        );
    }
}
