# Deals (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade")/ Deals | [](imtserverapi_historyreopen.md "HistoryReopen") [](imtserverapi_dealcreate.md "DealCreate") |
| --- | --- | --- |
| --- | --- |

Deals
The MetaTrader 5 Server API allows managing a database of deals on a trade server. Using the server API, you can modify and delete deals, as well as handle events of changes in the database of deals.
An important feature of working with deals is that they are bound to a certain trade server. Accordingly, the plugin can manage only those deals that belong to the server where it is running.
Functions described in this section allow to manage the database of deals, as well subscribe and unsubscribe from events associated with changes in the deal base.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [DealCreate](imtserverapi_dealget.md "DealGet") | Create an object of a deal. |
| [DealCreateArray](imtserverapi_dealcreatearray.md "DealCreateArray") | Create an object of the array of deals. |
| [DealSubscribe](imtserverapi_dealsubscribe.md "DealSubscribe") | Subscribe to events and hooks associated with changes in the database of deals. |
| [DealUnsubscribe](imtserverapi_dealunsubscribe.md "DealUnsubscribe") | Unsubscribe from the events and hooks associated with changes in the database of deals. |
| [DealAdd](imtserverapi_dealadd.md "DealAdd") | Add a deal to the server database. |
| [DealAddBatch](imtserverapi_dealaddbatch.md "DealAddBatch") | Add deals to a server database in bulk. |
| [DealAddBatchArray](imtserverapi_dealaddbatcharray.md "DealAddBatchArray") | Add deals to a server database in bulk. |
| [DealUpdate](imtserverapi_dealupdate.md "DealUpdate") | Update a deal in the server database. |
| [DealUpdateBatch](imtserverapi_dealupdatebatch.md "DealUpdateBatch") | Update multiple deals in the server database. |
| [DealUpdateBatchArray](imtserverapi_dealupdatebatcharray.md "DealUpdateBatchArray") | Update multiple deals in the server database. |
| [DealDelete](imtserverapi_dealdelete.md "DealDelete") | Delete a deal from the server database. |
| [DealDeleteBatch](imtserverapi_dealdeletebatch.md "DealDeleteBatch") | Delete multiple deals from the server database. |
| [DealGet](imtserverapi_dealget.md "DealGet") | Get a deal by a ticket and login. |
| [DealGetByGroup](imtserverapi_dealgetbygroup.md "DealGetByGroup") | Get deals related to a group of accounts. |
| [DealGetByGroupSymbol](imtserverapi_dealgetbygroupsymbols.md "DealGetByGroupSymbol") | Get deals by group and symbol. |
| [DealGetByLogins](imtserverapi_dealgetbylogins.md "DealGetByLogins") | Get deals by the list of logins. |
| [DealGetByLoginsSymbol](imtserverapi_dealgetbyloginssymbol.md "DealGetByLoginsSymbol") | Get deals by a list of logins and symbol. |
| [DealGetByTickets](imtserverapi_dealgetbytickets.md "DealGetByTickets") | Get deals by the list of tickets. |
| [DealSelectByGroup](imtserverapi_dealselectbygroup.md "DealSelectByGroup") | Request deals from a database for a group of accounts using additional criteria. |
| [DealSelectByLogins](imtserverapi_dealselectbylogins.md "DealSelectByLogins") | Request deals from a database for a list of logins using additional criteria. |
| [DealPerform](imtserverapi_dealperform.md "DealPerform") | Execute a deal on the client's account. This method performs a market buy or sell operation on an account, as if it is performed by the client through the terminal. |
| [DealPerformCloseBy](imtserverapi_dealperformcloseby.md "DealPerformCloseBy") | Close a position by an opposite one. This method performs a Close By operation, as if it is performed by the client through the terminal. |
| [DealPerformBatch](imtserverapi_dealperformbatch.md "DealPerformBatch") | Perform multiple deals on the client's account. This method performs market buy or sell operations on the account as if they were performed by the client through the terminal. |
| [DealPerformBatchArray](imtserverapi_dealperformbatcharray.md "DealPerformBatchArray") | Perform multiple deals on the client's account. This method performs market buy or sell operations on the account as if they were performed by the client through the terminal. |