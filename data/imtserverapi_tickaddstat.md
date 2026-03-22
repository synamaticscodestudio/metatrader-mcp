# TickAddStat (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Tick Data ](serverapi_ticks.md "Tick Data")/ TickAddStat | [](imtserverapi_tickaddbatch.md "TickAddBatch") [](imtserverapi_ticklast.md "TickLast") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TickAddStat
Add statistical information about the price.
MTAPIRES IMTServerAPI::TickAddStat( MTTick& tick, // A pointer to the quote structure MTTickStat& stat // A pointer to the structure of statistical information )  
---  
Parameters
tick
[in] A pointer to the [MTTick](mttick.md "MTTick") structure that describes the quote.
stat
[in] A pointer to the structure that describes statistical price information ([MTTickStat](mttickstat.md "MTTickStat")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method works only in plugins that run on history servers. If trying to run the command on another server, the [MT_RET_ERR_NOTSUPPORTED](retcodes_api.md "API") error will be returned.