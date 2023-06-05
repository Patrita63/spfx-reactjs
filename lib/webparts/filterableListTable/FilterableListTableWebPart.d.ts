import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IFilterableListTableWebPartProps {
    description: string;
    listName: string;
}
export default class FilterableListTableWebPart extends BaseClientSideWebPart<IFilterableListTableWebPartProps> {
    render(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=FilterableListTableWebPart.d.ts.map