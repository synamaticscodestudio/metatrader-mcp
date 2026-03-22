# TickAdd (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Tick Data ](imtadminapi_tick.md "Functions")/ TickAdd | [](imtadminapi_tickrequestraw.md "TickRequestRaw") [](imtadminapi_tickreplace.md "TickReplace") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::TickAdd
Add tick data for a symbol.
C++
MTAPIRES IMTAdminAPI::TickAdd( LPCWSTR symbol, // Symbol const MTTickShort*  ticks, // Ticks to add const UINT ticks_total // The number of ticks to add )  
---  
.NET
MTRetCode CIMTAdminAPI.TickAdd( string symbol, // Symbol MTTickShort[]  ticks // Ticks to add )  
---  
Python
AdminAPI.TickAdd( symbol, # Symbol ticks # Ticks to add )  
---  
Parameters
symbol
[in] The symbol, for which you want to update historical data.
ticks
[in] An array of [MTTickShort](mttickshort.md "MTTickShort") structures describing ticks to be added.
ticks_total
[in] The number of ticks to add.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Unlike [IMTManagerAPI::TickAdd](imtmanagerapi_tickadd.md "TickAdd"), this method directly adds quotes to the price history rather than adding them to the price stream.