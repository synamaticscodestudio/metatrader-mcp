# Orders (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions")/ Orders | [](imtmanagerapi_trading.md "Trade Database Functions") [](imtmanagerapi_ordercreate.md "OrderCreate") |
| --- | --- | --- |
| --- | --- |

Orders
Functions allow to view the database of trade orders, as well subscribe and unsubscribe from events associated with changes in the order base.
The following functions are available for this purpose:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [OrderCreate](imtmanagerapi_ordercreate.md "OrderCreate") | Create an object of a trade order. |
| [OrderCreateArray](imtmanagerapi_ordercreatearray.md "OrderCreateArray") | Create an object of the array of orders. |
| [OrderSubscribe](imtmanagerapi_ordersubscribe.md "OrderSubscribe") | Subscribe to the events associated with changes in the database of orders. |
| [OrderUnsubscribe](imtmanagerapi_orderunsubscribe.md "OrderUnsubscribe") | Unsubscribe from the events associated with changes in the database of orders. |
| [OrderGet](imtmanagerapi_orderget.md "OrderGet") | Get a currently unfulfilled order by a ticket. |
| [OrderGetOpen](imtmanagerapi_ordergetopen.md "OrderGetOpen") | Get currently unfulfilled orders of a client. |
| [OrderGetByGroup](imtmanagerapi_ordergetbygroup.md "OrderGetByGroup") | Request from the server open orders related to a client group. |
| [OrderGetByLogins](imtmanagerapi_ordergetbylogins.md "OrderGetByLogins") | Receive currently open orders by the list of logins. |
| [OrderGetByTickets](imtmanagerapi_ordergetbytickets.md "OrderGetByTickets") | Receive currently open orders by the list of tickets. |
| [OrderGetBySymbol](imtmanagerapi_ordergetbysymbol.md "OrderGetBySymbol") | Receive currently open orders by groups and symbol. |
| [OrderRequest](imtmanagerapi_orderrequest.md "OrderRequest") | Request a trade order from a server by the ticket. |
| [OrderRequestOpen](imtmanagerapi_orderrequestopen.md "OrderRequestOpen") | Request from the server currently unfulfilled orders of a client. |
| [OrderRequestByGroup](imtmanagerapi_orderrequestbygroup.md "OrderRequestByGroup") | Request from the server open orders related to a client group. |
| [OrderRequestByGroupSymbol](imtmanagerapi_orderrequestbygroupsymbol.md "OrderRequestByGroupSymbol") | Request open orders from the server by group and symbol. |
| [OrderRequestByLogins](imtmanagerapi_orderrequestbylogins.md "OrderRequestByLogins") | Request from the server open orders related to the list of logins. |
| [OrderRequestByLoginsSymbol](imtmanagerapi_orderrequestbyloginssymbol.md "OrderRequestByLoginsSymbol") | Request open orders from the server by list of logins and symbol. |
| [OrderRequestByTickets](imtmanagerapi_orderrequestbytickets.md "OrderRequestByTickets") | Request from the server open orders by the list of tickets. |
| [OrderAdd](imtmanagerapi_orderadd.md "OrderAdd") | Add an open order the server database. |
| [OrderAddBatch](imtmanagerapi_orderaddbatch.md "OrderAddBatch") | Add a batch of open orders to the server database. |
| [OrderAddBatchArray](imtmanagerapi_orderaddbatcharray.md "OrderAddBatchArray") | Add a batch of open orders to the server database. |
| [OrderUpdate](imtmanagerapi_orderupdate.md "OrderUpdate") | Update a trade order. |
| [OrderUpdateBatch](imtmanagerapi_orderupdatebatch.md "OrderUpdateBatch") | Update multiple orders in a server database. |
| [OrderUpdateBatchArray](imtmanagerapi_orderupdatebatcharray.md "OrderUpdateBatchArray") | Update multiple orders in a server database. |
| [OrderDelete](imtmanagerapi_orderdelete.md "OrderDelete") | Delete a trade order. |
| [OrderDeleteBatch](imtmanagerapi_orderdeletebatch.md "OrderDeleteBatch") | Delete orders from the server database in bulk. |
| [OrderCancel](imtmanagerapi_ordercancel.md "OrderCancel") | Move an open trading order to history. |
| [OrderCancelBatch](imtmanagerapi_ordercancelbatch.md "OrderCancelBatch") | Move multiple open order to history. |
| [HistoryRequest](imtmanagerapi_historyrequest.md "HistoryRequest") | Request from the server the client's closed orders (history) in the specified date range. |
| [HistoryRequestByGroup](imtmanagerapi_historyrequestbygroup.md "HistoryRequestByGroup") | Request from the server closed orders (history) related to a client group. |
| [HistoryRequestByGroupSymbol](imtmanagerapi_historyrequestbygroupsymbol.md "HistoryRequestByGroupSymbol") | Request closed orders (history) from the server by group and symbol. |
| [HistoryRequestByLogins](imtmanagerapi_historyrequestbylogins.md "HistoryRequestByLogins") | Request from the server the closed orders (history) related to the list of logins. |
| [HistoryRequestByLoginsSymbol](imtmanagerapi_historyrequestbyloginssymbol.md "HistoryRequestByLoginsSymbol") | Request closed orders (history) from the server by list of logins and symbol. |
| [HistoryRequestByTickets](imtmanagerapi_historyrequestbytickets.md "HistoryRequestByTickets") | Request from the server the closed orders (history) related to the list of tickets. |
| [HistoryRequestPage](imtmanagerapi_historyrequestpage.md "HistoryRequestPage") | Request from the server client's closed orders (history) in a paged form. |