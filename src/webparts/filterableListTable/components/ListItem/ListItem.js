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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FilterableListTable_module_scss_1 = require("../FilterableListTable.module.scss");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
/*
  ListItem component handles the content for the Modal Dialog
*/
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem(props) {
        var _this = _super.call(this, props) || this;
        //binds the event handler for the Title text field. This is needed to update the 'state' of the Title after every change
        _this.handleTitleChange = _this.handleTitleChange.bind(_this);
        //set up the initial 'state' of the component.
        //The default value for the Title field comes from the 'props' of the parent Component.
        _this.state = {
            title: _this.props.listitem.Title
        };
        return _this;
    }
    //event handler that fires for every change of the Title input field
    //sets the state of the 'title' object to the current value of the input field.
    ListItem.prototype.handleTitleChange = function (newValue) {
        this.setState({ title: newValue });
    };
    //event handler that is called with the submit button is clicked.
    ListItem.prototype.handleEdit = function () {
        //create an object containing the Id of the list item, setting it to the value of the 'prop' passed in from the parent Component
        //Title is being set from the 'state'
        var item = { Id: this.props.listitem.Id, Title: this.state.title };
        //call the event handler from the parent Component. This gets 'bound' from the Component's 'props'
        this.props.handleUpdate(item);
        //close the Dialog window
        this.props.handleCancel();
    };
    //event handler that is called with the cancel button is clicked
    ListItem.prototype.handleCancel = function () {
        this.props.handleCancel();
    };
    ListItem.prototype.handleDelete = function () {
        var item = { Id: this.props.listitem.Id };
        //call the event handler from the parent Component. This gets 'bound' from the Component's 'props'
        this.props.handleDelete(item);
        //close the Dialog window
        this.props.handleCancel();
    };
    //handles the validation for the Title field, which is required.
    //Return an empty string if the field is valid,
    //otherwise return error message to display
    ListItem.prototype.handleValidationError = function (value) {
        if (value == "" || value.length === 0)
            return "Title is a required field.";
        else
            return "";
    };
    ListItem.prototype.render = function () {
        //variable to hold the value of the Title, which comes from the Component's 'state'
        var title = this.state.title;
        //returns the contents of the Modal Component
        //always want to bind the event handlers with .bind(this) so that 'this' doesn't get changed.
        return (React.createElement("div", { className: FilterableListTable_module_scss_1.default.container },
            React.createElement(TextField_1.TextField, { label: "Title", required: true, defaultValue: title, onChanged: this.handleTitleChange.bind(this), onGetErrorMessage: this.handleValidationError.bind(this) }),
            React.createElement(Button_1.PrimaryButton, { text: "Save", onClick: this.handleEdit.bind(this) }),
            React.createElement(Button_1.Button, { text: "Cancel", onClick: this.handleCancel.bind(this) }),
            React.createElement(Button_1.Button, { text: "Delete", onClick: this.handleDelete.bind(this) })));
    };
    return ListItem;
}(React.Component));
exports.default = ListItem;
//# sourceMappingURL=ListItem.js.map