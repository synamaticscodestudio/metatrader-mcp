# TickHistoryAdd (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Tick Data ](imtmanagerapi_tick.md "Tick Data Functions")/ TickHistoryAdd | [](imtmanagerapi_tickhistoryrequestraw.md "TickHistoryRequestRaw") [](imtmanagerapi_tickhistoryreplace.md "TickHistoryReplace") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TickHistoryAdd
Add tick data of a symbol.
C++
MTAPIRES IMTManagerAPI::TickHistoryAdd( LPCWSTR symbol, // Symbol const MTTickShort*  ticks, // Ticks to add const UINT ticks_total // Number of ticks to add )  
---  
.NET
MTRetCode CIMTManagerAPI.TickHistoryAdd( string symbol, // Symbol MTTickShort[]  ticks // Ticks to add )  
---  
Python
ManagerAPI.TickHistoryAdd( symbol, # Symbol ticks # Ticks to add )  
---  
Parameters
symbol
[in] The symbol, for which you want to update tick data.
ticks
[in] Array of [MTTickShort](mttickshort.md "MTTickShort") structures, describing the ticks to be added.
ticks_total
[in] The number of ticks to add.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Unlike [IMTManagerAPI::TickAdd](imtmanagerapi_tickadd.md "TickAdd"), this method directly adds quotes to the price history rather than adding them to the price stream.