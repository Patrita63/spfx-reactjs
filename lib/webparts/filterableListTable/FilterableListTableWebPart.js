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
// import { IColumnProps } from './components/IColumnProps';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import * as strings from 'FilterableListTableWebPartStrings';
import FilterableListTable from './components/FilterableListTable';
var FilterableListTableWebPart = /** @class */ (function (_super) {
    __extends(FilterableListTableWebPart, _super);
    function FilterableListTableWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterableListTableWebPart.prototype.render = function () {
        var element = React.createElement(FilterableListTable, {
            description: this.properties.description,
            listName: this.properties.listName,
            columns: [],
            rows: [],
            spHttpClient: this.context.spHttpClient,
            siteUrl: this.context.pageContext.web.absoluteUrl
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(FilterableListTableWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    FilterableListTableWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('listName', {
                                    label: 'List Name'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return FilterableListTableWebPart;
}(BaseClientSideWebPart));
export default FilterableListTableWebPart;
//# sourceMappingURL=FilterableListTableWebPart.js.map