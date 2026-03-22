# DealRequestByGroupSymbol (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Deals ](imtadminapi_trading_deal.md "Functions")/ DealRequestByGroupSymbol | [](imtadminapi_dealrequestbygroup.md "DealRequestByGroup") [](imtadminapi_dealrequestbylogins.md "DealRequestByLogins") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DealRequestByGroupSymbol
Get deals by group and symbol.
C++
MTAPIRES IMTAdminAPI::DealRequestByGroupSymbol( LPCWSTR group, // group LPCWSTR symbol, // symbol const INT64 from, // beginning of period const INT64 to, // end of period IMTDealArray* deals // array of deals )  
---  
.NET
MTRetCode CIMTAdminAPI.DealRequestByGroupSymbol( string mask, // group string symbol, // symbol long from, // beginning of period long to, // end of period CIMTDealArray deals // array of deals )  
---  
Python
AdminAPI.DealRequestByGroupSymbol( group, # group symbol, # symbol from, # beginning of period to # end of period )  
---  
AdminAPI.DealRequestByGroupSymbolCSV( group, # group symbol, # symbol from, # beginning of period to, # end of period fields # comma-separated list of required fields )  
---  
AdminAPI.DealRequestByGroupSymbolNumPy( group, # group symbol, # symbol from, # beginning of period to, # end of period fields # comma-separated list of required fields )  
---  
Parameters
group
[in] The groups for which deals are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups whose names begin with 'demo', except for the group demoforex. The maximum length of the string is 127 characters.
symbol
[in] The symbol for which you need to get deals. You can specify multiple symbols separated by commas.
from
[in] The beginning of the period for which you need to get deals. The date is specified in seconds since 01.01.1970.
to
[in] The end of the period for which you need to receive deals. The date is specified in seconds since 01.01.1970.
deals
[out] An object of the deals array. The 'deals' object must be previously created using [IMTAdminAPI::DealCreateArray](imtadminapi_dealcreatearray.md "DealCreateArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).