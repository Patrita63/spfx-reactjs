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
var sp_http_1 = require("@microsoft/sp-http");
var React = require("react");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var sp_pnp_js_1 = require("sp-pnp-js");
var ListItem_1 = require("../ListItem/ListItem");
var AllItems_1 = require("../AllItems/AllItems");
var Dialog_1 = require("office-ui-fabric-react/lib/Dialog");
var FilterableListTable_module_scss_1 = require("../FilterableListTable.module.scss");
/*
  Body Component is the 'main' Component for the WebPart. It receives the SPHttpClient and Site URL as 'props' from the FilterableListTable Component
  The Component's 'state' sets the whether the Modal Dialog is shown, what item is being displayed in the Modal Dialog and a list of the SharePoint items
  returned from the REST call
*/
var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body(props) {
        var _this = _super.call(this, props) || this;
        var _columns = [
            {
                key: 'Id',
                name: 'ID',
                fieldName: 'Id',
                minWidth: 25,
                maxWidth: 25,
                isResizable: true,
                ariaLabel: 'Operations for ID',
                data: 'number',
                onColumnClick: _this.onColumnClick
            },
            {
                key: 'Title',
                name: 'Title',
                fieldName: 'Title',
                minWidth: 100,
                maxWidth: 200,
                isResizable: true,
                ariaLabel: 'Operations for Title',
                data: 'string',
                onColumnClick: _this.onColumnClick
            },
            {
                key: 'Created',
                name: 'Created',
                fieldName: 'Created',
                minWidth: 100,
                maxWidth: 150,
                isResizable: true,
                ariaLabel: 'Operations for Created',
                data: 'date',
                onColumnClick: _this.onColumnClick
            },
            {
                key: 'Modified',
                name: 'Modified',
                fieldName: 'Modified',
                minWidth: 100,
                maxWidth: 150,
                isResizable: true,
                ariaLabel: 'Operations for Modified',
                data: 'date',
                onColumnClick: _this.onColumnClick
            }
        ];
        _this.state = {
            detailModal: false,
            item: null,
            columns: _columns,
            rows: [],
            titleFilter: null
        };
        return _this;
    }
    //Using the SPHttpClient, retrieve a list of SharePoint list items.
    //the SPHttpClient instance is coming from the Component's 'props' passed in from the FilterableListTable Component
    //along with the URL of the current site.
    Body.prototype.loadItems = function () {
        var _this = this;
        console.log('Body.loadItems');
        this.props.spHttpClient.get("".concat(this.props.siteUrl, "/_api/web/lists/getbytitle('").concat(this.props.listName, "')/items?$select=Id,Title,Created,Modified"), sp_http_1.SPHttpClient.configurations.v1, {
            headers: {
                'accept': 'application/json;odata=nometadata',
                'odata-version': '3.0'
            }
        }).then(function (response) {
            return response.json().then(function (response) {
                //set new state and re-render the Component displaying the updated data from SharePoint
                _this.setState({ rows: response.value });
            });
        });
    };
    Body.prototype.onColumnClick = function (evt, column) {
        var _a = this.state, columns = _a.columns, rows = _a.rows;
        var newRows = rows.slice();
        var newColumns = columns.slice();
        var currentColumn = newColumns.filter(function (currCol, index) { return column.key === currCol.key; })[0];
        newColumns.forEach(function (newCol) {
            if (newCol === currentColumn) {
                currentColumn.isSortedDescending = !currentColumn.isSortedDescending;
                currentColumn.isSorted = true;
            }
            else {
                newCol.isSorted = false;
                newCol.isSortedDescending = true;
            }
        });
        newRows = this.sortItems(newRows, currentColumn.fieldName, currentColumn.isSortedDescending);
        this.setState({
            columns: newColumns,
            rows: newRows
        });
    };
    Body.prototype.sortItems = function (items, sortBy, descending) {
        if (descending === void 0) { descending = false; }
        if (descending) {
            return items.sort(function (a, b) {
                if (a[sortBy] < b[sortBy]) {
                    return 1;
                }
                if (a[sortBy] > b[sortBy]) {
                    return -1;
                }
                return 0;
            });
        }
        else {
            return items.sort(function (a, b) {
                if (a[sortBy] < b[sortBy]) {
                    return -1;
                }
                if (a[sortBy] > b[sortBy]) {
                    return 1;
                }
                return 0;
            });
        }
    };
    //Event handler that will open the Modal Dialog and set the item 'state' to the current list item.
    Body.prototype.passItemToModal = function (item) {
        this.setState({
            detailModal: true,
            item: item
        });
    };
    //Opens the Modal Dialog
    Body.prototype.openDetailModal = function () {
        this.setState({
            detailModal: true
        });
    };
    //Closes the Modal Dialog by setting the state of detailModal to false
    Body.prototype.closeDetailModal = function () {
        this.setState({
            detailModal: false
        });
    };
    //Event handler that executes the POST REST call to the SharePoint list to update the List item, specifically just the Title is updated.
    Body.prototype.onUpdate = function (item) {
        var _this = this;
        /*
          Example using PNP to update the list item
        */
        sp_pnp_js_1.default.sp.web.lists.getByTitle("".concat(this.props.listName)).items.getById(item.Id).update({
            Title: item.Title
        }, "*").then(function (iur) {
            console.log('ItemUpdateResult', iur);
            _this.loadItems();
        });
        /*
          Example of using SPHttpClient to update a list item.
        */
        // const body = JSON.stringify({
        //   '__metadata': {
        //     'type': 'SP.Data.ProjectResourcesListItem'
        //   },
        //   'Title': item.Title
        // });
        // this.props.spHttpClient.post(`${this.props.siteUrl}/_api/web/lists/getbytitle('${this.props.listName}')/items(${item.Id})`, SPHttpClient.configurations.v1,
        //   {
        //     headers: {
        //       'accept': 'application/json;odata=nometadata',
        //       'odata-version': '3.0',
        //       'IF-MATCH': '*',
        //       'X-HTTP-Method': 'MERGE'
        //     },
        //     body: body
        //   }).then((response: SPHttpClientResponse): void => {
        //     //after the REST call is successful, reload the entire list... not the most efficient way, but it demonstrates how the
        //     //UI is updated with the new data since loadItems sets the 'state' of the 'rows' object.
        //     this.loadItems();
        //   });
    };
    Body.prototype.onDelete = function (item) {
        var _this = this;
        sp_pnp_js_1.default.sp.web.lists.getByTitle("".concat(this.props.listName)).items.getById(item.Id).delete("*").then(function () {
            _this.loadItems();
        });
    };
    Body.prototype.onFilter = function (text) {
        this.setState({
            titleFilter: text
        });
    };
    //Renders the contents to the Modal Dialog
    Body.prototype.renderContents = function (item) {
        console.log('Body.renderContents item', item);
        return (React.createElement(ListItem_1.default, { listitem: item, handleUpdate: this.onUpdate.bind(this), handleCancel: this.closeDetailModal.bind(this), handleDelete: this.onDelete.bind(this) }));
    };
    //Renders the AllItems Component and a single instance of the Modal Component
    Body.prototype.render = function () {
        var _this = this;
        //return a list of filtered items if a filter is being applied.
        var filteredItems;
        if (this.state.titleFilter) {
            filteredItems = this.state.rows.filter(function (i) { return i.Title.toLowerCase().indexOf(_this.state.titleFilter) > -1; });
        }
        else {
            filteredItems = this.state.rows;
        }
        return (React.createElement("div", null,
            React.createElement("div", { className: "ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ".concat(FilterableListTable_module_scss_1.default.row) },
                React.createElement("div", { className: 'ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1' },
                    React.createElement("a", { href: "#", className: "".concat(FilterableListTable_module_scss_1.default.button, " ").concat(this.props.disabled), onClick: function () { return _this.loadItems(); } },
                        React.createElement("span", { className: FilterableListTable_module_scss_1.default.label }, "Read all items")))),
            React.createElement(AllItems_1.default, { spHttpClient: this.props.spHttpClient, siteUrl: this.props.siteUrl, passItemToModal: this.passItemToModal.bind(this), filterItems: this.onFilter.bind(this), items: filteredItems, columns: this.state.columns }),
            React.createElement(Dialog_1.Dialog, { hidden: !this.state.detailModal, onDismiss: this.closeDetailModal.bind(this), dialogContentProps: {
                    type: Dialog_1.DialogType.normal,
                    title: 'Edit List Item',
                    subText: 'Modify Item Title and click Save'
                } }, this.state.item ? this.renderContents(this.state.item) : null)));
    };
    __decorate([
        Utilities_1.autobind
    ], Body.prototype, "onColumnClick", null);
    __decorate([
        Utilities_1.autobind
    ], Body.prototype, "sortItems", null);
    return Body;
}(React.Component));
exports.default = Body;
//# sourceMappingURL=Body.js.map