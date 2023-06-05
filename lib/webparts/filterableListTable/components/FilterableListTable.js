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
import * as React from 'react';
import styles from './FilterableListTable.module.scss';
// PATRIZIO
// import { Button, DefaultButton, PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import Body from './Body/Body';
/*
  Default Component
*/
var FilterableListTable = /** @class */ (function (_super) {
    __extends(FilterableListTable, _super);
    // PATRIZIO
    //  private listItemEntityTypeName: string = undefined;
    function FilterableListTable(props, state) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            status: _this.listNotConfigured(_this.props) ? "Please configure list in Web Part Properties" : "Querying ".concat(_this.props.listName)
        };
        return _this;
    }
    FilterableListTable.prototype.componentWillReceiveProps = function (nextProps) {
        console.log('FilterableListTable.componentWillReceiveProps');
        // this.listItemEntityTypeName = undefined;
        this.state = {
            status: this.listNotConfigured(this.props) ? "Please configure list in Web Part Properties" : "Querying ".concat(this.props.listName)
        };
    };
    FilterableListTable.prototype.render = function () {
        console.log('FilterableListTable.render()');
        var disabled = this.listNotConfigured(this.props) ? styles.disabled : '';
        return (React.createElement("div", { className: styles.filterableListTable },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: "ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ".concat(styles.row) },
                    React.createElement("div", { className: 'ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1' },
                        React.createElement("span", { className: 'ms-font-xl ms-fontColor-white' }, "Sample SharePoint CRUD operations in React"))),
                React.createElement("div", { className: "ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ".concat(styles.row) },
                    React.createElement("div", { className: "ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1" }, this.state.status)),
                React.createElement(Body, { spHttpClient: this.props.spHttpClient, siteUrl: this.props.siteUrl, listName: this.props.listName, disabled: disabled }))));
    };
    FilterableListTable.prototype.listNotConfigured = function (props) {
        return props.listName === undefined || props.listName === '' || props.listName.length === 0;
    };
    return FilterableListTable;
}(React.Component));
export default FilterableListTable;
//# sourceMappingURL=FilterableListTable.js.map