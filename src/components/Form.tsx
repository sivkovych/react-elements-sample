import * as React from "react";
import IFormProperties from "../model/form/IFormProperties";
import IFormState from "../model/form/IFormState";
import ITopLevelItemProperties from "../model/item/top-level/ITopLevelItemProperties";
import UserRole from "../model/user/UserRole";
import {prettyJson, randomInt} from "../util/util";
import TopLevelItem from "./TopLevelItem/TopLevelItem";

export default class Form extends React.Component<IFormProperties, IFormState> {
    constructor(properties: IFormProperties) {
        super(properties);
        this.state = {
            completed: [],
            formKey: `${randomInt()}-FORM-${randomInt()}`,
            items: [],
            status: "Initialized",
            user: {
                id: randomInt(),
                name: "John Smith",
                role: UserRole.SWEEPER
            }
        };
    }

    public componentDidMount(): void {
        setTimeout(() => {
            this.setState({
                items: [{
                    description: "Description of some Top Level Item",
                    id: randomInt(),
                    title: "Title of some Top Level Item",
                }, {
                    description: "Another description of some Top Level Item",
                    id: randomInt(),
                    title: "Another title of some Top Level Item",
                }, {
                    description: "And another description of some Top Level Item",
                    id: randomInt(),
                    title: "And another title of some Top Level Item",
                }],
                status: "Mounted"
            });
        }, 2000);
    }

    public render(): React.ReactNode {
        const state = this.state;
        const items = state.items;
        const prettyState = prettyJson(state);
        const prettyProps = prettyJson(this.props);
        return (
            <div>
                <pre>
                    <br/>Form Settings: {prettyProps}
                    <br/>Form State: {prettyState}
                    <hr/>
                    <ul>
                        {items.map((item, index) => this.createItem(item, index))}
                    </ul>
                    <hr/>
                </pre>
            </div>
        );
    }

    private createItem(itemProperties: ITopLevelItemProperties, index: number) {
        itemProperties.onItemCompletion = this.onItemCompletion.bind(this);
        return <TopLevelItem key={index} {...itemProperties}/>;
    }

    private onItemCompletion(itemId: number): void {
        const state = this.state;
        const completedItems = state.completed;
        const isPresent = completedItems.indexOf(itemId) !== -1;
        if (!isPresent) {
            completedItems.push(itemId);
            this.setState({
                completed: completedItems,
                status: (() => {
                    const completeCount = completedItems.length;
                    if (completeCount === state.items.length) {
                        return "Completed";
                    }
                    return "In Progress";
                })()
            });
        }
    }
}
