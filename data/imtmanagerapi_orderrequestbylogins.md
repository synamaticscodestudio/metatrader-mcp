# OrderRequestByLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderRequestByLogins | [](imtmanagerapi_orderrequestbygroupsymbol.md "OrderRequestByGroupSymbol") [](imtmanagerapi_orderrequestbyloginssymbol.md "OrderRequestByLoginsSymbol") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderRequestByLogins
Request from the server open orders related to the list of logins.
C++
MTAPIRES IMTManagerAPI::OrderRequestByLogins( const UINT64* logins, // Logins const UINT logins_total, // Number of logins IMTOrderArray* orders // Object of the orders array )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderRequestByLogins( ulong[] logins, // Logins CIMTOrderArray orders // Object of the orders array )  
---  
Python
ManagerAPI.OrderRequestByLogins( logins # Logins )  
---  
ManagerAPI.OrderRequestByLoginsCSV( logins, # Logins fields # Object of the orders array )  
---  
ManagerAPI.OrderRequestByLoginsNumPy( logins, # Logins fields # Object of the orders array )  
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
The method copies to the 'orders' object the data of all open orders belonging to the specified accounts.
The method cannot be called from event handlers (any IMT*Sink class methods).