import * as React from 'react';
import { IFilterableListTableProps } from './IFilterableListTableProps';
import { IConfigState } from './IConfigState';
export default class FilterableListTable extends React.Component<IFilterableListTableProps, IConfigState> {
    private listItemEntityTypeName;
    constructor(props: IFilterableListTableProps, state: IConfigState);
    componentWillReceiveProps(nextProps: IFilterableListTableProps): void;
    render(): React.ReactElement<IFilterableListTableProps>;
    private listNotConfigured;
}
