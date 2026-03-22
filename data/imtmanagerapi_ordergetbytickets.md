# OrderGetByTickets (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderGetByTickets | [](imtmanagerapi_ordergetbylogins.md "OrderGetByLogins") [](imtmanagerapi_ordergetbysymbol.md "OrderGetBySymbol") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderGetByTickets
Receive currently open orders by the list of tickets.
C++
MTAPIRES IMTManagerAPI::OrderGetByTickets( const UINT64* tickets, // Tickets const UINT tickets_total,// Number of tickets IMTOrderArray* orders // Array of orders )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderGetByTickets( ulong[] tickets, // Tickets CIMTOrderArray orders // Array of orders )  
---  
Python
ManagerAPI.OrderGetByTickets( tickets  # Tickets )  
---  
ManagerAPI.OrderGetByTicketsCSV( tickets, # Tickets fields # Comma-separated list of required fields )  
---  
ManagerAPI.OrderGetByTicketsNumPy( tickets, # Tickets fields # Comma-separated list of required fields )  
---  
Parameters
tickets
[in] The list of order tickets.
tickets_total
[in] The number of tickets in the 'tickets' array.
orders
[out] An object of the array of orders. The 'orders' object should be first created using the [IMTManagerAPI::OrderCreateArray](imtmanagerapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies to the 'orders' object the data of open orders with the specified tickets. The method works only if the [IMTManagerAPI::PUMP_MODE_ORDERS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode has been specified during the connection.