# Orders (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade")/ Orders | [](serverapi_trading.md "Trade") [](imtserverapi_ordercreate.md "OrderCreate") |
| --- | --- | --- |
| --- | --- |

Orders
The MetaTrader 5 Server API allows managing a database of orders on a trade server. Using the server API, you can modify and delete orders, as well as handle events of changes in the database of deals.
An important feature of working with orders is that they are bound to a certain trade server. Accordingly, the plugin can manage only those orders that belong to the server where it is running.
Functions described in this section allow to manage the database of orders, as well subscribe and unsubscribe from events associated with changes in the order base.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [OrderCreate](imtserverapi_ordercreate.md "OrderCreate") | Create an object of a trade order. |
| [OrderCreateArray](imtserverapi_ordercreatearray.md "OrderCreateArray") | Create an object of the array of orders. |
| [OrderSubscribe](imtserverapi_ordersubscribe.md "OrderSubscribe") | Subscribe to events and hooks associated with changes in the database of open orders. |
| [OrderUnsubscribe](imtserverapi_orderunsubscribe.md "OrderUnsubscribe") | Unsubscribe from the events and hooks associated with changes in the database of open orders. |
| [OrderAdd](imtserverapi_orderadd.md "OrderAdd") | Add an open order to the server database. |
| [OrderAddBatch](imtserverapi_orderaddbatch.md "OrderAddBatch") | Add open orders to a server database in bulk. |
| [OrderAddBatchArray](imtserverapi_orderaddbatcharray.md "OrderAddBatchArray") | Add open orders to a server database in bulk. |
| [OrderUpdate](imtserverapi_orderupdate.md "OrderUpdate") | Update an open trade order in the server data base. |
| [OrderUpdateBatch](imtserverapi_orderupdatebatch.md "OrderUpdateBatch") | Update open orders in a server database in bulk. |
| [OrderUpdateBatchArray](imtserverapi_orderupdatebatcharray.md "OrderUpdateBatchArray") | Update open orders in a server database in bulk. |
| [OrderDelete](imtserverapi_orderdelete.md "OrderDelete") | Delete an open trade order from the server data base. |
| [OrderDeleteBatch](imtserverapi_orderdeletebatch.md "OrderDeleteBatch") | Delete open orders from a server database in bulk. |
| [OrderCancel](imtserverapi_ordercancel.md "OrderCancel") | Move an open trading order to history. |
| [OrderCancelBatch](imtserverapi_ordercancelbatch.md "OrderCancelBatch") | Move multiple open order to history. |
| [OrderGet](imtserverapi_orderget.md "OrderGet") | Get open trade orders based on the ticket or login. |
| [OrderGetByGroup](imtserverapi_ordergetbygroup.md "OrderGetByGroup") | Get open orders for a client group. |
| [OrderGetByGroupSymbol](imtserverapi_ordergetbygroupsymbol.md "OrderGetByGroupSymbol") | Get open orders from the server by group and symbol. |
| [OrderGetByLogins](imtserverapi_ordergetbylogins.md "OrderGetByLogins") | Receive open orders by the list of logins. |
| [OrderGetByLoginsSymbol](imtserverapi_ordergetbyloginssymbol.md "OrderGetByLoginsSymbol") | Get open orders from the server by list of logins and symbol. |
| [OrderGetByTickets](imtserverapi_ordergetbytickets.md "OrderGetByTickets") | Get open orders by the list of tickets. |
| [OrderSelectByGroup](imtserverapi_orderselectbygroup.md "OrderSelectByGroup") | Request open orders from a database for a group of accounts using additional criteria. |
| [OrderSelectByLogins](imtserverapi_orderselectbylogins.md "OrderSelectByLogins") | Request open orders from a database for a list of logins using additional criteria. |
| [HistorySubscribe](imtserverapi_historysubscribe.md "HistorySubscribe") | Subscribe to events and hooks associated with changes in the database of closed orders. |
| [HistoryUnsubscribe](imtserverapi_historyunsubscribe.md "HistoryUnsubscribe") | Unsubscribe from the events and hooks associated with changes in the database of closed orders. |
| [HistoryAdd](imtserverapi_historyadd.md "HistoryAdd") | Add a closed order to the server database. |
| [HistoryAddBatch](imtserverapi_historyaddbatch.md "HistoryAddBatch") | Add closed orders to a server database in bulk. |
| [HistoryAddBatchArray](imtserverapi_historyaddbatcharray.md "HistoryAddBatchArray") | Add closed orders to a server database in bulk. |
| [HistoryUpdate](imtserverapi_historyupdate.md "HistoryUpdate") | Update a closed trade order in the server database. |
| [HistoryUpdateBatch](imtserverapi_historyupdatebatch.md "HistoryUpdateBatch") | Update closed orders in a server database in bulk. |
| [HistoryUpdateBatchArray](imtserverapi_historyupdatebatcharray.md "HistoryUpdateBatchArray") | Update closed orders in a server database in bulk. |
| [HisotryDelete](imtserverapi_historydelete.md "HistoryDelete") | Delete a closed trade order from the server database. |
| [HistoryDeleteBatch](imtserverapi_historydeletebatch.md "HistoryDeleteBatch") | Delete closed orders from a server database in bulk. |
| [HistoryGet](imtserverapi_historyget.md "HistoryGet") | Get closed trade orders by a ticket or login. |
| [HistoryGetByTickets](imtserverapi_historygetbytickets.md "HistoryGetByTickets") | Receive closed orders (history) related to a client group. |
| [HistoryGetByLogins](imtserverapi_historygetbylogins.md "HistoryGetByLogins") | Receive closed orders (history) related to the list of logins. |
| [HistoryGetByLoginsSymbol](imtserverapi_historygetbyloginssymbol.md "HistoryGetByLoginsSymbol") | Get closed orders (history) from the server by a list of logins and symbol. |
| [HistoryGetByGroup](imtserverapi_historygetbygroup.md "HistoryGetByGroup") | Receive closed orders (history) related to the list of tickets. |
| [HistoryGetByGroupSymbol](imtserverapi_historygetbygroupsymbol.md "HistoryGetByGroupSymbol") | Get closed orders (history) from the server by group and symbol. |
| [HistorySelectByGroup](imtserverapi_historyselectbygroup.md "HistorySelectByGroup") | Request closed orders from a database for a group of accounts using additional criteria. |
| [HistorySelectByLogins](imtserverapi_historyselectbylogins.md "HistorySelectByLogins") | Request closed orders from a database for a list of logins using additional criteria. |
| [HistoryReopen](imtserverapi_historyreopen.md "HistoryReopen") | Reopen a pending order from the client's history. |