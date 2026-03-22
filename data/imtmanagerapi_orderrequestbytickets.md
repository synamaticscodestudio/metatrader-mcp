# OrderRequestByTickets (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderRequestByTickets | [](imtmanagerapi_orderrequestbyloginssymbol.md "OrderRequestByLoginsSymbol") [](imtmanagerapi_orderadd.md "OrderAdd") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderRequestByTickets
Request from the server open orders by the list of tickets.
C++
MTAPIRES IMTManagerAPI::OrderRequestByTickets( const UINT64* tickets, // Tickets const UINT tickets_total,// Number of tickets IMTOrderArray* orders // Array of orders )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderRequestByTickets( ulong[] tickets, // Tickets CIMTOrderArray orders // Array of orders )  
---  
Python
ManagerAPI.OrderRequestByTickets( tickets  # Tickets )  
---  
ManagerAPI.OrderRequestByTicketsCSV( tickets, # Tickets fields # Comma-separated list of required fields )  
---  
ManagerAPI.OrderRequestByTicketsNumPy( tickets, # Tickets fields # Comma-separated list of required fieldss )  
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