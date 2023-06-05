import * as React from "react";
import { IBodyProps } from './IBodyProps';
import { IBodyState } from "./IBodyState";
export default class Body extends React.Component<IBodyProps, IBodyState> {
    constructor(props: any);
    private loadItems;
    private onColumnClick;
    private sortItems;
    passItemToModal(item: any): void;
    openDetailModal(): void;
    closeDetailModal(): void;
    onUpdate(item: any): void;
    onDelete(item: any): void;
    onFilter(text: string): void;
    renderContents(item: any): JSX.Element;
    render(): JSX.Element;
}
//# sourceMappingURL=Body.d.ts.map