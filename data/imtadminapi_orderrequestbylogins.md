# OrderRequestByLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderRequestByLogins | [](imtadminapi_orderrequestbygroupsymbol.md "OrderRequestByGroupSymbol") [](imtadminapi_orderrequestbyloginssymbol.md "OrderRequestByLoginsSymbol") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderRequestByLogins
Request from the server open orders related to the list of logins.
C++
MTAPIRES IMTAdminAPI::OrderRequestByLogins( const UINT64* logins, // Logins const UINT logins_total, // Number of logins IMTOrderArray* orders // Object of the orders array )  
---  
.NET
MTRetCode CIMTAdminAPI.OrderRequestByLogins( ulong[] logins, // Logins CIMTOrderArray orders // Object of the orders array )  
---  
Python
AdminAPI.OrderRequestByLogins( logins # Logins )  
---  
AdminAPI.OrderRequestByLoginsCSV( logins, # Logins fields # Object of the orders array )  
---  
AdminAPI.OrderRequestByLoginsNumPy( logins, # Logins fields # Object of the orders array )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
orders
[out] An object of the array of orders. The 'orders' object should be first created using the [IMTAdminAPI::OrderCreateArray](imtadminapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies to the 'orders' object the data of all open orders belonging to the specified accounts.
The method cannot be called from event handlers (any IMT*Sink class methods).