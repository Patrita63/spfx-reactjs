var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// PATRIZIO
// import { SPHttpClient } from "@microsoft/sp-http";
// import { IListItem } from "../ListItem/IListItem";
import { DetailsList, DetailsListLayoutMode, Selection } from 'office-ui-fabric-react/lib/DetailsList'; // , IColumn
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
// PATRIZIO
// import { autobind } from 'office-ui-fabric-react/lib/Utilities';
// https://github.com/microsoft/fluentui/wiki/TypeScript-Guidelines#use-arrow-functions-instead-of-bind
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import * as React from "react";
/*
  AllItems Component takes in a list of SharePoint items from the Component's 'props'
*/
var AllItems = /** @class */ (function (_super) {
    __extends(AllItems, _super);
    function AllItems(props) {
        var _this = _super.call(this, props) || this;
        _this._selection = undefined;
        _this._selection = new Selection({
            onSelectionChanged: function () { return _this.setState({ selectionDetails: _this.getSelectionDetails() }); }
        });
        console.log('AllItems.constructor this.props.items', _this.props.items);
        _this.state = {
            selectionDetails: _this.getSelectionDetails()
        };
        return _this;
    }
    AllItems.prototype.getSelectionDetails = function () {
        var selectionCount = this._selection.getSelectedCount();
        switch (selectionCount) {
            case 0:
                return 'No items selected';
            case 1:
                return '1 item selected: ' + this._selection.getSelection()[0].Title;
            default:
                return "".concat(selectionCount, " items selected");
        }
    };
    AllItems.prototype.onChanged = function (text) {
        this.props.filterItems(text);
    };
    AllItems.prototype.onItemInvoked = function (item) {
        this.props.passItemToModal(item);
    };
    AllItems.prototype.render = function () {
        var selectionDetails = this.state.selectionDetails;
        console.log('AllItems.render items', this.props.items.length);
        return (React.createElement("div", null,
            selectionDetails,
            React.createElement(TextField, { label: "Filter by Title:", onChanged: this.onChanged }),
            React.createElement(MarqueeSelection, { selection: this._selection },
                React.createElement(DetailsList, { items: this.props.items, columns: this.props.columns, setKey: "set", layoutMode: DetailsListLayoutMode.fixedColumns, selection: this._selection, selectionPreservedOnEmptyClick: true, ariaLabelForSelectionColumn: "Toggle Selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items", onItemInvoked: this.onItemInvoked }))));
    };
    return AllItems;
}(React.Component));
export default AllItems;
//# sourceMappingURL=AllItems.js.map