# DealRequestByGroup (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Deals ](imtadminapi_trading_deal.md "Functions")/ DealRequestByGroup | [](imtadminapi_dealrequest.md "DealRequest") [](imtadminapi_dealrequestbygroupsymbols.md "DealRequestByGroupSymbol") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DealRequestByGroup
Receive deals related to a group of accounts.
C++
MTAPIRES IMTAdminAPI::DealRequestByGroup( LPCWSTR group, // Group const INT64 from, // Beginning of the period const INT64 to, // End of the period IMTDealArray* deals // Array of deals )  
---  
.NET
MTRetCode CIMTAdminAPI.DealRequestByGroup( string mask, // Group long from, // Beginning of the period long to, // End of the period CIMTDealArray deals // Array of deals )  
---  
Python
AdminAPI.DealRequestByGroup( group, # Group from, # Beginning of the period to # End of the period )  
---  
AdminAPI.DealRequestByGroupCSV( group, # Group from, # Beginning of the period to, # End of the period fields # Comma-separated list of required fields )  
---  
AdminAPI.DealRequestByGroupNumPy( group, # Group from, # Beginning of the period to, # End of the period fields # Comma-separated list of required fields )  
---  
Parameters
group
[in] The groups for which deals are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex. The maximum length of the string is 127 characters.
from
[in] The beginning of the period for which you need to receive deals. The date is specified in seconds which have elapsed since 01.01.1970.
to
[in] The end of the period for which you need to receive deals. The date is specified in seconds which have elapsed since 01.01.1970.
deals
[out] An object of the deals array. The 'deals' object must be first created using [IMTAdminAPI::DealCreateArray](imtadminapi_dealcreatearray.md "DealCreateArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method copies to the 'deals' object data of all deals, which belong to clients in the specified groups and which were executed in the specified time range.
The method cannot be called from event handlers (any IMT*Sink class methods).