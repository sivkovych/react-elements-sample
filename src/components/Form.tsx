import {Component, ComponentChild, h} from 'preact';
import {FormState} from "../model/FormState";
import {FormSettings} from "../model/FormSettings";

export default class Form extends Component<FormSettings, FormState> {
    constructor(settings: FormSettings) {
        super(settings);
        this.state = {
            name: settings.name,
            age: settings.age
        };
    }

    componentDidMount(): void {
        setTimeout(() => {
            this.setState({
                name: "React's componentDidMount worked as expected"
            })
        }, 2000);
    }

    render(settings: FormSettings, state: FormState): ComponentChild {
        return <h1>props: {settings.name}, state: {state.name}, age: {state.age}</h1>;
    }
}
