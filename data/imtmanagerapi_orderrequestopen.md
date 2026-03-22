# OrderRequestOpen (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderRequestOpen | [](imtmanagerapi_orderrequest.md "OrderRequest") [](imtmanagerapi_orderrequestbygroup.md "OrderRequestByGroup") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderRequestOpen
Request from the server currently unfulfilled orders of a client.
C++
MTAPIRES IMTManagerAPI::OrderRequestOpen( const UINT64 login, // Client login IMTOrderArray* orders // An object of the array of orders )  
---  
.NET
MTAPIRES CIMTManagerAPI.OrderRequestOpen( ulong login, // Client login CIMTOrderArray orders // An object of the array of orders )  
---  
Python
ManagerAPI.OrderRequestOpen( login # Client login )  
---  
ManagerAPI.OrderRequestOpenCSV( login, # Client login fields # Comma-separated list of required fields )  
---  
ManagerAPI.OrderRequestOpenNumPy( login, # Client login fields # Comma-separated list of required fields )  
---  
Parameters
login
[in] The login of the client, whose open orders you need to get.
orders
[out] An object of the array of orders. The orders object must be first created using the [IMTManagerAPI::OrderCreateArray](imtmanagerapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method cannot be called from event handlers (any methods of IMT*Sink classes).