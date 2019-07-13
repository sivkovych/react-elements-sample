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
    }

    public componentDidMount(): void {
        setTimeout(() => {
            this.setState({
                name: "React's componentDidMount worked as expected"
            });
        }, 2000);
    }

    public render(settings: IFormSettings, state: IFormState): ComponentChild {
        return <h1>props: {settings.name}, state: {state.name}, age: {state.age}</h1>;
    }
}
