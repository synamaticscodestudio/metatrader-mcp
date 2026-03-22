# OrderRequestOpen (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderRequestOpen | [](imtadminapi_orderrequest.md "OrderRequest") [](imtadminapi_orderrequestbygroup.md "OrderRequestByGroup") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderRequestOpen
Request open orders of a client from a server.
C++
MTAPIRES IMTAdminAPI::OrderRequestOpen( const UINT64 login, // Client login IMTOrderArray* orders // An object of the array of orders )  
---  
.NET
MTRetCode CIMTAdminAPI.OrderRequestOpen( ulong login, // Client login CIMTOrderArray orders // An object of the array of orders )  
---  
Python
AdminAPI.OrderRequestOpen( login # Client login )  
---  
Parameters
login
[in] The login of the client, whose open orders you need to get.
orders
[out] An object of the array of orders. The orders object must be first created using the [IMTAdminAPI::OrderCreateArray](imtadminapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method cannot be called from event handlers (any methods of IMT*Sink classes).