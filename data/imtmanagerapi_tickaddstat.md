# TickAddStat (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Tick Data ](imtmanagerapi_tick.md "Tick Data Functions")/ TickAddStat | [](imtmanagerapi_tickaddbatch.md "TickAddBatch") [](imtmanagerapi_ticklast.md "TickLast") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TickAddStat
Add statistical information about the price.
C++
MTAPIRES IMTManagerAPI::TickAddStat( MTTick& tick, // Reference to the structure of tick MTTickStat& stat // Reference to the structure of statistical information )  
---  
.NET
MTRetCode CIMTManagerAPI.TickAddStat( MTTick tick, // Quote structure MTTickStat stat // Statistical information structure )  
---  
Python
ManagerAPI.TickAddStat( tick, # Quote structure stat # Statistical information structure )  
---  
Parameters
tick
[in] A reference to the structure that describes the tick ([MTTick](mttick.md "MTTick")).
stat
[in] A reference to the structure that describes statistical price information ([MTTickStat](mttickstat.md "MTTickStat")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
To execute this function, a manager must have appropriate rights, otherwise the [MT_RET_ERR_PERMISSIONS](retcodes_common.md "Common errors") error is returned.