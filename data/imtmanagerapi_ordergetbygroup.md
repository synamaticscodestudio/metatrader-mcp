# OrderGetByGroup (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderGetByGroup | [](imtmanagerapi_ordergetopen.md "OrderGetOpen") [](imtmanagerapi_ordergetbylogins.md "OrderGetByLogins") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderGetByGroup
Request from the server open orders related to a client group.
C++
MTAPIRES IMTManagerAPI::OrderGetByGroup( LPCWSTR mask, // group mask IMTOrderArray* orders // object of the array of orders )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderGetByGroup( String^ mask, // group mask CIMTOrderArray orders // object of the array of orders )  
---  
Python
ManagerAPI.OrderGetByGroup( mask # group mask )  
---  
ManagerAPI.OrderGetByGroupCSV( mask, # group mask fields # comma-separated list of required fields )  
---  
ManagerAPI.OrderGetByGroupNumPy( mask, # group mask fields # comma-separated list of required fields )  
---  
Parameters
mask
[in] The groups the orders are requested for. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups whose names begin with 'demo', except for the group demoforex. The maximum length of the string is 127 characters.
orders
[out] An object of the array of orders. The 'orders' object should be first created using the [IMTManagerAPI::OrderCreateArray](imtmanagerapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies the data on all open orders belonging to clients in the specified groups to the 'orders' object. The method works only if the [IMTManagerAPI::PUMP_MODE_ORDERS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode has been specified during the connection.