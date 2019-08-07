import {Component, ComponentChild, h} from "preact";
import {IFormProperties} from "../model/form/IFormProperties";
import {IFormState} from "../model/form/IFormState";
import ITopLevelItemProperties from "../model/item/top-level/ITopLevelItemProperties";
import UserRole from "../model/user/UserRole";
import {randomInt} from "../util/util";
import TopLevelItem from "./TopLevelItem/TopLevelItem";

export default class Form extends Component<IFormProperties, IFormState> {
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

    public render(properties: IFormProperties, state: IFormState): ComponentChild {
        const items = this.state.items;
        const itemElements = (itemProperties: ITopLevelItemProperties, index: number) => {
            itemProperties.onItemCompletion = this.onItemCompletion.bind(this);
            return <TopLevelItem key={index} {...itemProperties}/>;
        };
        return (
            <div>
                <pre>
                    <br/>Form Settings: {JSON.stringify(properties, null, 2)}
                    <br/>Form State: {JSON.stringify(state, null, 2)}
                    <hr/>
                    <ul>
                        {items.map(itemElements)}
                    </ul>
                    <hr/>
                </pre>
            </div>
        );
    }

    private onItemCompletion(itemId: number): void {
        const completedItems = this.state.completed;
        const isPresent = completedItems.indexOf(itemId) !== -1;
        if (!isPresent) {
            completedItems.push(itemId);
            this.setState({
                completed: completedItems
            });
        }
    }
}
