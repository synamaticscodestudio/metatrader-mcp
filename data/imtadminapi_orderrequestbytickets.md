# OrderRequestByTickets (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderRequestByTickets | [](imtadminapi_orderrequestbyloginssymbol.md "OrderRequestByLoginsSymbol") [](imtadminapi_orderadd.md "OrderAdd") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderRequestByTickets
Request from the server open orders by the list of tickets.
C++
MTAPIRES IMTAdminAPI::OrderRequestByTickets( const UINT64* tickets, // Tickets const UINT tickets_total,// Number of tickets IMTOrderArray* orders // Array of orders )  
---  
.NET
MTRetCode CIMTAdminAPI.OrderRequestByTickets( ulong[] tickets, // Tickets CIMTOrderArray orders // Array of orders )  
---  
Python
AdminAPI.OrderRequestByTickets( tickets # Tickets )  
---  
AdminAPI.OrderRequestByTicketsCSV( tickets, # Tickets fields # comma-separated list of required fields )  
---  
AdminAPI.OrderRequestByTicketsNumPy( tickets, # Tickets fields # comma-separated list of required fields )  
---  
Parameters
tickets
[in] List of order tickets.
tickets_total
[in] The number of tickets in the 'tickets' array.
orders
[out] An object of the array of orders. The 'orders' object should be first created using the [IMTAdminAPI::OrderCreateArray](imtadminapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies data of orders with the specified tickets to the 'orders' object.
The method cannot be called from event handlers (any IMT*Sink class methods).