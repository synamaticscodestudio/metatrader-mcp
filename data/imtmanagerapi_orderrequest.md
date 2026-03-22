# OrderRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderRequest | [](imtmanagerapi_ordergetbysymbol.md "OrderGetBySymbol") [](imtmanagerapi_orderrequestopen.md "OrderRequestOpen") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderRequest
Request a trade order from a server by the ticket.
C++
MTAPIRES IMTManagerAPI::OrderRequest( const UINT64 ticket, // Ticket IMTOrder* order // An order object )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderRequest( ulong ticket, // Ticket CIMTOrder order // An order objec )  
---  
OrderGetBySymbol
ManagerAPI.OrderRequest( int ticket # Ticket )  
---  
Parameters
ticket
[in] The number (ticket) of an order.
order
[out] An object of a trade order. The 'order' object must be first created using the [IMTManagerAPI::OrderCreate](imtmanagerapi_ordercreate.md "OrderCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies data of an order (no matter already fulfilled or not) with the specified ticket to the order object.
This method cannot be called from event handlers (any methods of IMT*Sink classes).