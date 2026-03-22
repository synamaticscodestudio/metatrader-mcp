# OrderGetByLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderGetByLogins | [](imtmanagerapi_ordergetbygroup.md "OrderGetByGroup") [](imtmanagerapi_ordergetbytickets.md "OrderGetByTickets") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderGetByLogins
Receive currently open orders by the list of logins.
C++
MTAPIRES IMTManagerAPI::OrderGetByLogins( const UINT64* logins, // Logins const UINT logins_total, // Number of logins IMTOrderArray* orders // Object of the orders array )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderGetByLogins( ulong[] logins, // Logins CIMTOrderArray orders // Object of the orders array )  
---  
Python
ManagerAPI.OrderGetByLogins( logins # Logins )  
---  
ManagerAPI.OrderGetByLoginsCSV( logins, # Logins fields # Comma-separated list of required fields )  
---  
ManagerAPI.OrderGetByLoginsNumPy( logins, # Logins fields # Comma-separated list of required fields )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
orders
[out] An object of the array of orders. The 'orders' object should be first created using the [IMTManagerAPI::OrderCreateArray](imtmanagerapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies to the 'orders' object the data of all open orders belonging to the specified accounts. The method works only if the [IMTManagerAPI::PUMP_MODE_ORDERS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode has been specified during the connection.