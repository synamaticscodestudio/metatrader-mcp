# HistoryRequestByTickets (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ HistoryRequestByTickets | [](imtmanagerapi_historyrequestbyloginssymbol.md "HistoryRequestByLoginsSymbol") [](imtmanagerapi_historyrequestpage.md "HistoryRequestPage") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::HistoryRequestByTickets
Request from the server the closed orders (history) related to the list of tickets.
C++
MTAPIRES IMTManagerAPI::HistoryRequestByTickets( const UINT64* tickets, // Tickets const UINT tickets_total,// Number of tickets IMTOrderArray* orders // Array of orders )  
---  
.NET
MTRetCode CIMTManagerAPI.HistoryRequestByTickets( ulong[] tickets, // Tickets CIMTOrderArray orders // Array of orders )  
---  
Python
ManagerAPI.HistoryRequestByTickets( tickets # Tickets )  
---  
ManagerAPI.HistoryRequestByTicketsCSV( tickets, # Tickets fields # Comma-separated list of required fields )  
---  
ManagerAPI.HistoryRequestByTicketsNumPy( tickets, # Tickets fields # Comma-separated list of required fields )  
---  
Parameters
tickets
[in] List of order tickets.
tickets_total
[in] The number of tickets in the 'tickets' array.
orders
[out] An object of the array of orders. The 'orders' object should be first created using the [IMTManagerAPI::OrderCreateArray](imtmanagerapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies data of orders with the specified tickets to the 'orders' object.
The method cannot be called from event handlers (any IMT*Sink class methods).