# Functions (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions")/ Orders | [](imtadminapi_trading.md "Trade Database Functions") [](imtadminapi_ordercreate.md "OrderCreate") |
| --- | --- | --- |
| --- | --- |

Orders
Using the functions, you can request a server database of orders and create new orders. The following functions are available for this purpose:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [OrderCreate](imtadminapi_ordercreate.md "OrderCreate") | Create an object of a trade order. |
| [OrderCreateArray](imtadminapi_ordercreatearray.md "OrderCreateArray") | Create an object of the array of orders. |
| [OrderRequest](imtadminapi_orderrequest.md "OrderRequest") | Request a trade order from a server by the ticket. |
| [OrderRequestOpen](imtadminapi_orderrequestopen.md "OrderRequestOpen") | Request open orders of a client from a server. |
| [OrderRequestByGroup](imtadminapi_orderrequestbygroup.md "OrderRequestByGroup") | Request from the server open orders related to a client group. |
| [OrderRequestByGroupSymbol](imtadminapi_orderrequestbygroupsymbol.md "OrderRequestByGroupSymbol") | Request open orders from the server by group and symbol. |
| [OrderRequestByLogins](imtadminapi_orderrequestbylogins.md "OrderRequestByLogins") | Request from the server open orders related to the list of logins. |
| [OrderRequestByLoginsSymbol](imtadminapi_orderrequestbyloginssymbol.md "OrderRequestByLoginsSymbol") | Request open orders from the server by list of logins and symbol. |
| [OrderRequestByTickets](imtadminapi_orderrequestbytickets.md "OrderRequestByTickets") | Request from the server open orders by the list of tickets. |
| [OrderAdd](imtadminapi_orderadd.md "OrderAdd") | Add an open order the server database. |
| [OrderAddBatch](imtadminapi_orderaddbatch.md "OrderAddBatch") | Add a batch of open orders to the server database. |
| [OrderAddBatchArray](imtadminapi_orderaddbatcharray.md "OrderAddBatchArray") | Add a batch of open orders to the server database. |
| [OrderUpdate](imtadminapi_orderupdate.md "OrderUpdate") | Update a trade order. |
| [OrderUpdateBatch](imtadminapi_orderupdatebatch.md "OrderUpdateBatch") | Update multiple orders in a server database. |
| [OrderUpdateBatchArray](imtadminapi_orderupdatebatcharray.md "OrderUpdateBatchArray") | Update multiple orders in a server database. |
| [OrderDelete](imtadminapi_orderdelete.md "OrderDelete") | Delete a trade order. |
| [OrderDeleteBatch](imtadminapi_orderdeletebatch.md "OrderDeleteBatch") | Delete orders from the server database in bulk. |
| [OrderCancel](imtadminapi_ordercancel.md "OrderCancel") | Move an open trading order to history. |
| [OrderCancelBatch](imtadminapi_ordercancelbatch.md "OrderCancelBatch") | Move multiple open order to history. |
| [OrderBackupList](imtadminapi_orderbackuplist.md "OrderBackupList") | Request the dates of backup databases of orders for the specified time range. |
| [OrderBackupRequest](imtadminapi_orderbackuprequest.md "OrderBackupRequest") | Request an order from a backup database. |
| [OrderBackupRequestOpen](imtadminapi_orderbackuprequestopen.md "OrderBackupRequestOpen") | Request open orders from a backup database. |
| [OrderBackupRequestHistory](imtadminapi_orderbackuprequesthistory.md "OrderBackupRequestHistory") | Request closed orders from a backup database. |
| [OrderBackupRestore](imtadminapi_orderbackuprestore.md "OrderBackupRestore") | Restore an order from a backup database. |
| [OrderReopen](imtadminapi_orderreopen.md "OrderReopen") | Reopen a pending order from the client history. |
| [HistoryRequest](imtadminapi_historyrequest.md "HistoryRequest") | Request from the server the client's closed orders (history) in the specified date range. |
| [HistoryRequestByTickets](imtadminapi_historyrequestbytickets.md "HistoryRequestByTickets") | Request from the server closed orders (history) related to the list of tickets. |
| [HistoryRequestByLogins](imtadminapi_historyrequestbylogins.md "HistoryRequestByLogins") | Request from the server the closed orders (history) related to the list of logins. |
| [HistoryRequestByLoginsSymbol](imtadminapi_historyrequestbyloginssymbol.md "HistoryRequestByLoginsSymbol") | Request closed orders (history) from the server by group and symbol. |
| [HistoryRequestByGroup](imtadminapi_historyrequestbygroup.md "HistoryRequestByGroup") | Request from the server the closed orders (history) related to a client group. |
| [HistoryRequestByGroupSymbol](imtadminapi_historyrequestbygroupsymbol.md "HistoryRequestByGroupSymbol") | Request closed orders (history) from the server by list of logins and symbol. |
| [HistoryRequestPage](imtadminapi_historyrequestpage.md "HistoryRequestPage") | Request from the server client's closed orders (history) in a paged form. |