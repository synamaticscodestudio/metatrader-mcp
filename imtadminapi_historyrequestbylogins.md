# HistoryRequestByLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ HistoryRequestByLogins | [](imtadminapi_historyrequestbytickets.md "HistoryRequestByTickets") [](imtadminapi_historyrequestbyloginssymbol.md "HistoryRequestByLoginsSymbol") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::HistoryRequestByLogins
Request from the server the closed orders (history) related to the list of logins.
C++
MTAPIRES IMTAdminAPI::HistoryRequestByLogins( const UINT64* logins, // Logins const UINT logins_total, // Number of logins const INT64 from, // Beginning of the period const INT64 to, // End of the period IMTOrderArray* orders // Object of the orders array )  
---  
.NET
MTRetCode CIMTAdminAPI.HistoryRequestByLogins( ulong[] logins, // Logins long from, // Beginning of the period long to, // End of the period CIMTOrderArray orders // Object of the orders array )  
---  
Python
AdminAPI.HistoryRequestByLogins( logins, # Logins from, # Beginning of the period to # End of the period )  
---  
AdminAPI.HistoryRequestByLoginsCSV( logins, # Logins from, # Beginning of the period to, # End of the period fields # Comma-separated list of required fields )  
---  
AdminAPI.HistoryRequestByLoginsNumPy( logins, # Logins from, # Beginning of the period to, # End of the period fields # Comma-separated list of required fields )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
from
[in] The beginning of the period for which you need to receive orders. The date is specified in seconds which have elapsed since 01.01.1970.
to
[in] The end of the period for which you need to receive orders. The date is specified in seconds which have elapsed since 01.01.1970.
orders
[out] An object of the array of orders. The 'orders' object should be first created using the [IMTAdminAPI::OrderCreateArray](imtadminapi_ordercreatearray.md "OrderCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies to the 'orders' object the data of all closed orders belonging to the specified accounts.
The method cannot be called from event handlers (any IMT*Sink class methods).