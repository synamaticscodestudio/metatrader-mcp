# TickStat (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Price Data ](imtreportapi_price.md "Price Data Functions")/ TickStat | [](imtreportapi_ticklast.md "TickLast") [](imtreportapi_tickhistorygetraw.md "TickHistoryGetRaw") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TickStat
Get statistical information about quotes for the specified symbol.
MTAPIRES IMTReportAPI::TickStat( LPCWSTR symbol, // Symbol MTTickStat& stat // Pointer to statistical data structure )  
---  
Parameters
symbol
[in] The symbol, for which you need to get information.
stat
[out] A pointer to the structure that describes statistical price information ([MTTickStat](mttickstat.md "MTTickStat")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.