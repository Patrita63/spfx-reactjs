import { SPHttpClient } from '@microsoft/sp-http';
// PATRIZIO
// import { IListItem } from '../ListItem/IListItem';
export interface IBodyProps {
  spHttpClient: SPHttpClient;
  siteUrl: string;
  listName: string;
  disabled: string;
}
