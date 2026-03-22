# OrderGetOpen (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderGetOpen | [](imtmanagerapi_orderget.md "OrderGet") [](imtmanagerapi_ordergetbygroup.md "OrderGetByGroup") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderGetOpen
Get currently unfulfilled orders of a client.
C++
MTAPIRES IMTManagerAPI::OrderGetOpen( const UINT64 login, // Client login IMTOrderArray* orders // An object of the array of orders )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderGetOpen( ulong login, // Client login CIMTOrderArray orders // An object of the array of orders )  
---  
Python
ManagerAPI.OrderGetOpen( login # Client login )  
---  
ManagerAPI.OrderGetOpenCSV( login, # Client login fields # Comma-separated list of required fields )  
---  
ManagerAPI.OrderGetOpenNumPy( login, # Client login fields # Comma-separated list of required fields )  
---  
Parameters
login
[in] The login of the client, whose open orders you need to get.
orders
[out] An object of the array of orders. The orders object must be first created using the [IMTManagerAPI::OrderCreateArray](imtmanagerapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method is valid only if the [IMTManagerAPI::PUMP_MODE_ORDERS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.