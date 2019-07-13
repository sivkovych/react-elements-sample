import React from 'preact';

export interface AppProps {
    name: string;
    age?: number;
}

interface AppState {
    name: string;
    age?: number;
}

export default class Kek extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            name: props.name
        };
    }

    componentDidMount() {
        this.setState({
            name: "React's componentDidMount worked as expected"
        });
    }

    render(props: AppProps, state: AppState) {
        return <h1>props: {props.name} state: {state.name}</h1>;
    }
}
