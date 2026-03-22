# HookTick (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Price Data ](reference_ticks.md "Price Data") / [ IMTTickSink ](imtticksink.md "IMTTickSink")/ HookTick | [](imtticksink_ontickstat.md "OnTickStat") [](imtticksink_hooktickstat.md "HookTickStat") |
| --- | --- | --- |
| --- | --- |

IMTTickSink::HookTick
A hook of an event of new quote arrival.
C++
virtual MTAPIRES IMTTickSink::HookTick( const int feeder, // Data feed MTTick& tick // A reference to the structure of tick )  
---  
.NET (Manager API)
virtual MTRetCode CIMTTickSink.HookTick( int feeder, // Data feed ref MTTick tick // A reference to the structure of tick )  
---  
Parameters
feeder
[in] The data feed from which the quote is received.
tick
[in][out] A reference to the structure of quote description ([MTTick](mttick.md "MTTick")).
Return Value
To accept a quote (to save it in the database), [MT_RET_OK](retcodes_successful.md "Successful completion") should be returned. Any other response code should be returned to decline the quote.
Note
This method is used only in the MetaTrader 5 Server API.
This method can be used only on history servers. In the case of using it on another server, the [MT_RET_ERR_NOTSUPPORTED](retcodes_api.md "API") error will be returned.
The hook is called just before saving a quote in the database after it has passed all checks for correctness and compliance with the [filtering](imtconsymbol_filtersoft.md "FilterSoft") criteria. The hook is called only when quotes are received from the current data feed used for the symbol in accordance with the priority (as determined by the position of the data source (gateway/data feed) in the configuration list).