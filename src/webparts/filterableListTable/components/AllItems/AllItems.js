"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DetailsList_1 = require("office-ui-fabric-react/lib/DetailsList");
var MarqueeSelection_1 = require("office-ui-fabric-react/lib/MarqueeSelection");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var React = require("react");
/*
  AllItems Component takes in a list of SharePoint items from the Component's 'props'
*/
var AllItems = /** @class */ (function (_super) {
    __extends(AllItems, _super);
    function AllItems(props) {
        var _this = _super.call(this, props) || this;
        _this._selection = undefined;
        _this._selection = new DetailsList_1.Selection({
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
            React.createElement(TextField_1.TextField, { label: "Filter by Title:", onChanged: this.onChanged }),
            React.createElement(MarqueeSelection_1.MarqueeSelection, { selection: this._selection },
                React.createElement(DetailsList_1.DetailsList, { items: this.props.items, columns: this.props.columns, setKey: "set", layoutMode: DetailsList_1.DetailsListLayoutMode.fixedColumns, selection: this._selection, selectionPreservedOnEmptyClick: true, ariaLabelForSelectionColumn: "Toggle Selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items", onItemInvoked: this.onItemInvoked }))));
    };
    __decorate([
        Utilities_1.autobind
    ], AllItems.prototype, "onChanged", null);
    __decorate([
        Utilities_1.autobind
    ], AllItems.prototype, "onItemInvoked", null);
    return AllItems;
}(React.Component));
exports.default = AllItems;
//# sourceMappingURL=AllItems.js.map