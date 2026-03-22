# OrderRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderRequest | [](imtadminapi_ordercreatearray.md "OrderCreateArray") [](imtadminapi_orderrequestopen.md "OrderRequestOpen") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderRequest
Request a trade order from a server by the ticket.
C++
MTAPIRES IMTAdminAPI::OrderRequest( const UINT64 ticket, // Ticket IMTOrder* order // An order object )  
---  
.NET
MTRetCode CIMTAdminAPI.OrderRequest( ulong ticket, // Ticket CIMTOrder order // An order objec )  
---  
Python
AdminAPI.OrderRequest( ticket # Ticket )  
---  
Parameters
ticket
[in] The number (ticket) of an order.
order
[out] An object of a trade order. The order object must be first created using the [IMTAdminAPI::OrderCreate](imtadminapi_ordercreate.md "OrderCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies data of an order with the specified ticket to the order object.
This method cannot be called from event handlers (any methods of IMT*Sink classes).