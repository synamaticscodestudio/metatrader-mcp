# OrderGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderGet | [](imtmanagerapi_orderunsubscribe.md "OrderUnsubscribe") [](imtmanagerapi_ordergetopen.md "OrderGetOpen") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderGet
Get a currently unfulfilled order by a ticket.
C++
MTAPIRES IMTManagerAPI::OrderGet( const UINT64 ticket, // Ticket IMTOrder* order // An order object )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderGet( ulong ticket, // Ticket CIMTOrder order // An order object )  
---  
Python
ManagerAPI.OrderGet( int ticket # Ticket )  
---  
Parameters
ticket
[in] The number (ticket) of an order.
order
[out] An object of a trade order. The 'order' object must be first created using the [IMTManagerAPI::OrderCreate](imtmanagerapi_ordercreate.md "OrderCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies data of an order with the specified ticket to the order object. The method is valid only if the [IMTManagerAPI::PUMP_MODE_ORDERS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.