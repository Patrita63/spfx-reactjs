import * as React from "react";
import { IAllItemsProps } from "./IAllItemsProps";
import { IAllItemsState } from "./IAllItemsState";
export default class AllItems extends React.Component<IAllItemsProps, IAllItemsState> {
    private _selection;
    constructor(props: IAllItemsProps | undefined);
    private getSelectionDetails;
    private onChanged;
    private onItemInvoked;
    render(): JSX.Element;
}
