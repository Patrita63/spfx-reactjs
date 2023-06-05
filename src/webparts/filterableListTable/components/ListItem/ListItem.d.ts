import { IListItem } from "./IListItem";
import * as React from "react";
export default class ListItem extends React.Component<{
    listitem: IListItem;
    handleUpdate: any;
    handleCancel: any;
    handleDelete: any;
}, {
    title: string;
}> {
    constructor(props: any);
    handleTitleChange(newValue: any): void;
    handleEdit(): void;
    handleCancel(): void;
    handleDelete(): void;
    handleValidationError(value: string): "" | "Title is a required field.";
    render(): JSX.Element;
}
