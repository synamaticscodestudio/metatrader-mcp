# TickAddBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Tick Data ](imtmanagerapi_tick.md "Tick Data Functions")/ TickAddBatch | [](imtmanagerapi_tickadd.md "TickAdd") [](imtmanagerapi_tickaddstat.md "TickAddStat") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TickAddBatch
Add multiple quotes into the price stream.
C++
MTAPIRES IMTManagerAPI::TickAddBatch( MTTick* ticks, // An array of quotes ticks_total tick // The number of quotes )  
---  
.NET
MTRetCode CIMTManagerAPI.TickAddBatch( MTTick[] ticks // An array of quotes )  
---  
Python
ManagerAPI.TickAddBatch( ticks # An array of quotes )  
---  
Parameters
ticks
[in] An array of [MTTick](mttick.md "MTTick") objects describing quotes.
tick
[in] The number of quotes in the 'ticks' array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
To execute the function, the manager must have the appropriate permission; otherwise the [MT_RET_ERR_PERMISSIONS](retcodes_common.md "Common errors") error will be returned.
Unlike [IMTManagerAPI::TickHistoryAdd](imtmanagerapi_tickhistoryadd.md "TickHistoryAdd"), this method adds quotes into the price stream rather than writing it directly to the price history. 