import * as React from "react";
import ITopLevelItemProperties from "../../model/item/top-level/ITopLevelItemProperties";
import ITopLevelItemState from "../../model/item/top-level/ITopLevelItemState";
import {prettyJson, randomInt} from "../../util/util";

export default class TopLevelItem extends React.Component<ITopLevelItemProperties, ITopLevelItemState> {
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

    public render(): React.ReactNode {
        const state = this.state;
        const itemKey = state.itemKey;
        const prettyState = prettyJson(state);
        const prettyProps = prettyJson(this.props);
        const onClickCompletion = () => this.completeItem();
        return (
            <li>
                <pre>
                    <br/>TopLevelItem Settings: {prettyProps}
                    <br/>TopLevelItem State: {prettyState}
                    <button
                        id={itemKey}
                        disabled={state.status === "Completed"}
                        onClick={onClickCompletion}
                    >
                        Complete Item #{itemKey}
                    </button>
                </pre>
            </li>
        );
    }

    private completeItem(): void {
        const state = this.state;
        if (state.status !== "Mounted") {
            return;
        }
        this.setState({status: "Completed"}, () => {
            const mine = this.props;
            if (mine.onItemCompletion) {
                mine.onItemCompletion(mine.id);
            }
        });
    }
}
