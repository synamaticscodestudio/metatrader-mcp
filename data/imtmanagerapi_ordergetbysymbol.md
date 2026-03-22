# OrderGetBySymbol (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderGetBySymbol | [](imtmanagerapi_ordergetbytickets.md "OrderGetByTickets") [](imtmanagerapi_orderrequest.md "OrderRequest") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderGetBySymbol
Get currently open orders by group and symbol.
C++
MTAPIRES IMTManagerAPI::OrderGetBySymbol( LPCWSTR groups, // Group mask LPCWSTR symbol, // Symbol IMTOrderArray* orders // Orders array object )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderGetBySymbol( String^ groups, // Group mask String^ symbol, // Symbol CIMTOrderArray orders // Orders array object )  
---  
Python
ManagerAPI.OrderGetBySymbol( groups, # Group mask symbol, # Symbol )  
---  
ManagerAPI.OrderGetBySymbolCSV( groups, # Group mask symbol, # Symbol fields # Comma-separated list of required fields )  
---  
ManagerAPI.OrderGetBySymbolNumPy( groups, # Group mask symbol, # символ fields # Comma-separated list of required fields )  
---  
Parameters
groups
[in] The groups the orders are requested for. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex. The 'nullptr' value means "all groups". The maximum length of the string is 127 characters.
news
[in] The symbol, for which you wish to obtain orders.
orders
[out] An object of the array of orders. The 'orders' object should be first created using the [IMTManagerAPI::OrderCreateArray](imtmanagerapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method only works if the [IMTManagerAPI::PUMP_MODE_ORDERS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode has been specified during connection.