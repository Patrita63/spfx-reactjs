import { IColumn } from 'office-ui-fabric-react/lib/DetailsList';
// PATRIZIO
//import { IListItem } from './../../../../../lib/webparts/filterableListTable/components/IListItem.d';
import { IListItem } from './../../../../../lib/webparts/filterableListTable/components/ListItem/IListItem';
import { SPHttpClient } from '@microsoft/sp-http';

export interface IAllItemsProps {
  spHttpClient: SPHttpClient;
  siteUrl: string;
  passItemToModal: any;
  filterItems: any;
  items: IListItem[];
  columns: IColumn[];
}
