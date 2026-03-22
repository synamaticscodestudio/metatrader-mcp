# TickStat (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Tick Data ](serverapi_ticks.md "Tick Data")/ TickStat | [](imtserverapi_ticklast.md "TickLast") [](imtserverapi_tickget.md "TickGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TickStat
Get statistical information about quotes for the specified symbol.
MTAPIRES IMTServerAPI::TickStat( LPCWSTR symbol, // Symbol MTTickStat& stat // A pointer to the structure of statistical information )  
---  
Parameters
symbol
[in] The symbol, for which you need to get information.
stat
[out] A pointer to the structure that describes statistical price information ([MTTickStat](mttickstat.md "MTTickStat")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.