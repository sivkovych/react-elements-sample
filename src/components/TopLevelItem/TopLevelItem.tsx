import {Component, ComponentChild, h} from "preact";
import ITopLevelItemProperties from "../../model/item/top-level/ITopLevelItemProperties";
import ITopLevelItemState from "../../model/item/top-level/ITopLevelItemState";
import {randomInt} from "../../util/util";

export default class TopLevelItem extends Component<ITopLevelItemProperties, ITopLevelItemState> {
    constructor(settings: ITopLevelItemProperties) {
        super(settings);
        this.state = {
            itemKey: `${randomInt()}-ITEM-${randomInt()}`,
            layer: 1,
            status: "Initialized"
        };
    }

    public componentDidMount(): void {
        setTimeout(() => {
            this.setState({
                status: "Mounted"
            });
        }, 2000);
    }

    public render(properties: ITopLevelItemProperties, state: ITopLevelItemState): ComponentChild {
        const boundClick = (event: Event): void => {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
            this.completeItem.call(this);
        };
        return (
            <li>
                <pre>
                    <br/>TopLevelItem Settings: {JSON.stringify(properties, null, 2)}
                    <br/>TopLevelItem State: {JSON.stringify(state, null, 2)}
                    <button onClick={boundClick}>
                        Complete Item #{this.state.itemKey}
                    </button>
                </pre>
            </li>
        );
    }

    private completeItem(): void {
        if (this.state.status !== "Mounted") {
            return;
        }
        this.setState({
            status: "Completed"
        }, () => {
            const mine = this.props;
            if (mine.onItemCompletion) {
                mine.onItemCompletion(mine.id);
            }
        });
    }
}
