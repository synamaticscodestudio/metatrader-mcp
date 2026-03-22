# HookTickStat (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Price Data ](reference_ticks.md "Price Data") / [ IMTTickSink ](imtticksink.md "IMTTickSink")/ HookTickStat | [](imtticksink_hooktick.md "HookTick") [](imtchartsink.md "IMTChartSink") |
| --- | --- | --- |
| --- | --- |

IMTTickSink::HookTickStat
A hook of an event of update of the statistical information about a price.
C++
virtual MTAPIRES IMTTickSink::HookTickStat( const int feeder, // Data feed MTTickStat& stat // A reference to the statistics description structure )  
---  
.NET (Manager API)
virtual MTAPIRES CIMTTickSink.HookTickStat( int feeder, // Data feed ref MTTickStat stat // A reference to the statistics description structure )  
---  
Parameters
feeder
[in] The data feed from which the quote is received.
stat
[in][out] A reference to the structure that describes statistical price information ([MTTickStat](mttickstat.md "MTTickStat")).
Return Value
To accept the data (to save it in the database), [MT_RET_OK](retcodes_successful.md "Successful completion") should be returned. Any other response code should be returned to decline the data.
Note
This method is used only in the MetaTrader 5 Server API.
This method can be used only on history servers. In the case of using it on another server, the [MT_RET_ERR_NOTSUPPORTED](retcodes_api.md "API") error will be returned.
The hook is called just before saving information in the database after it has passed all checks for correctness. The hook is called only when information is received from the current data feed used for the symbol in accordance with the priority (as determined by the position of the data source (gateway/data feed) in the configuration list).